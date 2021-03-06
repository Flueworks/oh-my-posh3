package main

import (
	"encoding/json"
	"fmt"
	"os"
)

//Settings holds all the theme for rendering the prompt
type Settings struct {
	FinalSpace   bool     `json:"final_space"`
	ConsoleTitle bool     `json:"console_title"`
	Blocks       []*Block `json:"blocks"`
}

//BlockType type of block
type BlockType string

//BlockAlignment aligment of a Block
type BlockAlignment string

const (
	//Prompt writes one or more Segments
	Prompt BlockType = "prompt"
	//LineBreak creates a line break in the prompt
	LineBreak BlockType = "newline"
	//Left aligns left
	Left BlockAlignment = "left"
	//Right aligns right
	Right BlockAlignment = "right"
)

//Block defines a part of the prompt with optional segments
type Block struct {
	Type             BlockType      `json:"type"`
	Alignment        BlockAlignment `json:"alignment"`
	HorizontalOffset int            `json:"horizontal_offset"`
	VerticalOffset   int            `json:"vertical_offset"`
	Segments         []*Segment     `json:"segments"`
}

//GetSettings returns the default configuration including possible user overrides
func GetSettings(env environmentInfo) *Settings {
	settings, err := loadUserConfiguration(env)
	if err != nil {
		return getDefaultSettings()
	}
	return settings
}

func loadUserConfiguration(env environmentInfo) (*Settings, error) {
	var settings Settings
	settingsFileLocation := fmt.Sprintf("%s/.go_my_posh", env.getenv("HOME"))
	if _, err := os.Stat(*env.getArgs().Config); !os.IsNotExist(err) {
		settingsFileLocation = *env.getArgs().Config
	}
	defaultSettings, err := os.Open(settingsFileLocation)
	defer func() {
		_ = defaultSettings.Close()
	}()
	if err != nil {
		return nil, err
	}
	jsonParser := json.NewDecoder(defaultSettings)
	err = jsonParser.Decode(&settings)
	return &settings, err
}

func getDefaultSettings() *Settings {
	settings := &Settings{
		FinalSpace: true,
		Blocks: []*Block{
			{
				Type:      Prompt,
				Alignment: Left,
				Segments: []*Segment{
					{
						Type:            Session,
						Style:           Diamond,
						Background:      "#c386f1",
						Foreground:      "#ffffff",
						LeadingDiamond:  "\uE0B6",
						TrailingDiamond: "\uE0B0",
					},
					{
						Type:            Path,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#ff479c",
						Foreground:      "#ffffff",
						Properties: map[Property]interface{}{
							Prefix: " \uE5FF ",
							Style:  "folder",
						},
					},
					{
						Type:            Git,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#fffb38",
						Foreground:      "#193549",
						Properties: map[Property]interface{}{
							DisplayStashCount:   true,
							DisplayUpstreamIcon: true,
						},
					},
					{
						Type:            Battery,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#f36943",
						Foreground:      "#193549",
						Properties: map[Property]interface{}{
							BatteryIcon:      "",
							ColorBackground:  true,
							ChargedColor:     "#4caf50",
							ChargingColor:    "#40c4ff",
							DischargingColor: "#ff5722",
							Postfix:          "\uF295 ",
						},
					},
					{
						Type:            Node,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#6CA35E",
						Foreground:      "#ffffff",
						Properties: map[Property]interface{}{
							Prefix: " \uE718 ",
						},
					},
					{
						Type:            ShellInfo,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#0077c2",
						Foreground:      "#ffffff",
						Properties: map[Property]interface{}{
							Prefix: " \uFCB5 ",
						},
					},
					{
						Type:            Root,
						Style:           Powerline,
						PowerlineSymbol: "\uE0B0",
						Background:      "#ffff66",
						Foreground:      "#ffffff",
					},
					{
						Type:            Exit,
						Style:           Diamond,
						PowerlineSymbol: "\uE0B0",
						Background:      "#2e9599",
						Foreground:      "#ffffff",
						LeadingDiamond:  "",
						TrailingDiamond: "\uE0B4",
						Properties: map[Property]interface{}{
							DisplayExitCode: false,
							AlwaysEnabled:   true,
							ErrorColor:      "#f1184c",
							ColorBackground: true,
							Prefix:          "<transparent>\uE0B0</> \uE23A",
						},
					},
				},
			},
		},
	}
	return settings
}

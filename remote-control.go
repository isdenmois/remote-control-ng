package main

import (
	"os"
	"log"
	"io/ioutil"
	"github.com/isdenmois/remote-control/server"
	"github.com/pquerna/ffjson/ffjson"
)

type serverConfig struct {
	Qbittorrent		string
	FilmsCategory	string
}

func parseConfig() serverConfig {
	file, e := ioutil.ReadFile("./config.json")
    if e != nil {
        log.Fatalln("Config read error: %v", e)
        os.Exit(1)
    }

	var config serverConfig
	ffjson.Unmarshal(file, &config)

	return config;
}

func main() {
	log.Println("Start parse files")

	config := parseConfig()
	films := server.Parse(config.Qbittorrent, config.FilmsCategory)

	log.Printf("Starting server on :9090")
	server.Start(films)
}

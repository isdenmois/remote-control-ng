package main

import (
	"github.com/isdenmois/remote-control/parser"
	"github.com/isdenmois/remote-control/server"
	"time"
	"fmt"
)

func main() {
	fmt.Println("Start parse files")
    start := time.Now()
	films := parser.Parse()
    elapsed := time.Since(start)

	fmt.Printf("Parse time: %s\nStarting server on :9090", elapsed)
	server.Start(films)
}
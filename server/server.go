package server

import (
	"github.com/isdenmois/remote-control/parser"
    // "github.com/gorilla/mux"
    "net/http"
)

func Start(films []parser.Film) {
    // router := mux.NewRouter()
    filmsHandler := FilmsHandler{ Films: films }
    // filmsHandler.Register(router)
    http.HandleFunc("/", filmsHandler.Serve)
    http.ListenAndServe(":9090", nil)
}

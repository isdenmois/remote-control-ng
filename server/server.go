package server

import (
	"github.com/isdenmois/remote-control/parser"
	// "github.com/gorilla/mux"
	"net/http"
)

func Start(films []parser.Film) {
	// router := mux.NewRouter()
	filmsHandler := FilmsHandler{Films: films}
  	fs := http.FileServer(http.Dir("static"))
	// filmsHandler.Register(router)
	http.Handle("/", fs)
	http.HandleFunc("/api/films", filmsHandler.Serve)
	http.ListenAndServe(":9090", nil)
}

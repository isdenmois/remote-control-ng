package server

import (
	// "github.com/gorilla/mux"
	"net/http"
)

func Start(films []Film) {
	// router := mux.NewRouter()
	filmsHandler := FilmsHandler{Films: films}
	fs := http.FileServer(http.Dir("static"))
	socket := SocketIOServer{Films: films}
	// filmsHandler.Register(router)
	http.HandleFunc("/api/films", filmsHandler.Serve)
	http.Handle("/socket.io/", socket.Subscribe())
	http.Handle("/", fs)
	http.ListenAndServe(":9090", nil)
}

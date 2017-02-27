package server

import (
	// "github.com/gorilla/mux"
	"net/http"
)

func Start(films []Film, serials []Film) {
	// router := mux.NewRouter()
	fs := http.FileServer(http.Dir("static"))
	socket := SocketIOServer{Films: films, Serials: serials}
	// filmsHandler.Register(router)
	http.Handle("/socket.io/", socket.Subscribe())
	http.Handle("/", fs)
	http.ListenAndServe(":9090", nil)
}

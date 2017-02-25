package server

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/isdenmois/remote-control/parser"
	"net/http"
)

type FilmsHandler struct {
	Films []parser.Film
}

func (h *FilmsHandler) Register(router *mux.Router) {
	router.HandleFunc("/", h.Serve)
}

func (h *FilmsHandler) Serve(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	js, _ := json.Marshal(h.Films)
	w.Write(js)
}

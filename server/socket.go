package server

import (
    "log"
    "github.com/googollee/go-socket.io"
    "github.com/go-vgo/robotgo"
    "encoding/json"
)

type SocketIOServer struct {
    Handler      *socketio.Server
	Films       []Film
}

type KeyboardMessage struct {
    Key         string      `json:key`
    Modifiers   []string    `json:modifiers`
}

func (s *SocketIOServer) Subscribe() *socketio.Server {
    if (s.Handler != nil) {
        return s.Handler;
    }

    handler, err := socketio.NewServer(nil)
    if err != nil {
        log.Fatal(err)
    }

    handler.On("connection", s.handleConnection)
    handler.On("error", s.handleError)

    s.Handler = handler
    return s.Handler
}

func (s SocketIOServer) handleConnection(so socketio.Socket) {
        log.Println("on connection")

        so.On("films_get", func(msg string) {
            log.Println("on films_get")
            so.Emit("films_send", s.Films)
        })

        so.On("keyboard", s.handleKeyboard)

        so.On("disconnection", func() {
            log.Println("on disconnect")
        })
}

func (s SocketIOServer) handleKeyboard(keyList string) {
    log.Println("on keyboard: ", keyList)

    var keys KeyboardMessage
    json.Unmarshal([]byte(keyList), &keys)

    if len(keys.Modifiers) > 0 {
        robotgo.KeyTap(keys.Key, keys.Modifiers)
    } else {
        robotgo.KeyTap(keys.Key)
    }
}

func (SocketIOServer) handleError(so socketio.Socket, err error) {
        log.Println("error:", err)
}

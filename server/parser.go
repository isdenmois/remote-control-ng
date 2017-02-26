package server

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
)

type torrentItem struct {
	Name      string
	Hash      string
	Save_path string
}

type File struct {
	Name string
	Path string
}

type Film struct {
	Name  string
	Hash  string
	Path  string
	Files []File
}

func request(url string, result interface{}) {
	resp, _ := http.Get(url)
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	json.Unmarshal([]byte(body), &result)
}

func Parse() []Film {
	var result []torrentItem
	request("http://127.0.0.1:3310/query/torrents?category="+url.QueryEscape("Фильмы"), &result)

	var films []Film
	for _, item := range result {
		film := Film{}
		film.Name = item.Name
		film.Hash = item.Hash
		film.Path = item.Save_path

		var files []File
		request("http://127.0.0.1:3310/query/propertiesFiles/"+film.Hash, &files)

		for _, fileItem := range files {
			if !strings.Contains(fileItem.Name, "unwanted") {
				film.Files = append(film.Files, File{
					Name: fileItem.Name,
					Path: film.Path + fileItem.Name,
				})
			}
		}

		films = append(films, film)
	}

	return films
}

package main

import (
	"fmt"
	"html/template"
	"os"
	"path/filepath"
	"runtime"
)

const tpl = `
<head>
<meta charset="utf-8">
</head>

<body>
<ul>
{{ range $key, $value := . }}
<li><a href="/{{ $key }}/">{{ $value }}</a></li>
{{ end }}
</ul>
</body>
`

func main() {
	dirs := map[string]string{
		"video_test": "MediaStreamを使ったWebcam表示テスト",
	}

	_, file, _, _ := runtime.Caller(0)
	root := filepath.Dir(filepath.Dir(file))
	fmt.Println(root)

	fileBuf, err := os.Create(filepath.Join(root, "index.html"))
	if err != nil {
		panic(err)
	}
	defer fileBuf.Close()

	t, err := template.New("").Parse(tpl)
	if err != nil {
		panic(err)
	}
	if err := t.Execute(fileBuf, dirs); err != nil {
		panic(err)
	}
}

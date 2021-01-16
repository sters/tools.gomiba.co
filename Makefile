
.PHONY: serve
serve:
	php -S localhost:8000

.PHONY: index
index:
	go run .create_index/main.go

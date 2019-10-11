# mruv-protos
This repository contains protocol buffer files for MruV gRPC API.

## Installation
```
$ git config core.hooksPath .githooks
```

## Generating protobuf files
Type
```
$ docker-compose up
```

## Inspiration
The way this project looks is inspired by [great article from namely-labs](https://medium.com/namely-labs/how-we-build-grpc-services-at-namely-52a3ae9e7c35)

## TODO:
KOD JEST GENEROWANY DO INNYCH REPOZYTORIÓW POPRZEZ TRAVISA (NA POCZĄTEK RĘCZNIE)
Z INNYCH REPOZYTORIÓW TEŻ ODPALANE SĄ TRAVISY, KTÓRE GENERUJĄ ODPOWIEDNI KOD (C# - NUGET PACKAGE)

PIPELINE:
1. Wygeneruj kod za pomocą protoc
2. Wgraj kod na osobne repozytoria (zależne od języka)
3. Wygeneruj odpowiednie paczki za pomocą .travisa
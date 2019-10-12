
# mruv-protos

This repository contains protocol buffer files for MruV gRPC API.
If you searching for generated Mruv gRPC API packages, you can find them in theese repositories:

* [Go package](https://github.com/MruV-RP/mruv-pb-go)
* [C# package](https://github.com/MruV-RP/mruv-pb-csharp)
* [Node.JS package](https://github.com/MruV-RP/mruv-pb-node)
* [Web package](https://github.com/MruV-RP/mruv-pb-web)
* [Swagger files](https://github.com/MruV-RP/mruv-pb-swagger)
* [Documentation](https://github.com/MruV-RP/mruv-pb-docs)

## Generating protobuf files

```sh
> docker-compose up
```

## Propagating generated files

```sh
> ./propagate.sh
```

## Hooks

This repository uses git hooks for executing the generate & propagate process before pushing changes.
To use this functionality, type:

```sh
> git config core.hooksPath .githooks
```

## How this works

KOD JEST GENEROWANY DO INNYCH REPOZYTORIÓW POPRZEZ TRAVISA (NA POCZĄTEK RĘCZNIE)
Z INNYCH REPOZYTORIÓW TEŻ ODPALANE SĄ TRAVISY, KTÓRE GENERUJĄ ODPOWIEDNI KOD (C# - NUGET PACKAGE)

PIPELINE:

1. Wygeneruj kod za pomocą kontenerów namely/protoc-all do folderu ./gen/
2. Wgraj kod na osobne repozytoria z folderów ./gen/* o nazwach mruv-[folder]
3. Wygeneruj odpowiednie paczki za pomocą .travis'a w w.w. repozytoriach

## Inspiration

The way this project looks is inspired by [great article from namely-labs](https://medium.com/namely-labs/how-we-build-grpc-services-at-namely-52a3ae9e7c35)

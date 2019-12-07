
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

1. Generate code using namely/protoc-all docker image to `./gen/` directory. (docker-compose up)
2. Merge and push new generated files from `./gen/*` to language specific repositories. Repository naming convention: `mruv-[directory]` (propagate.sh)
3. On language specific repositories, automatically generate packages and draft releases

## Inspiration

The way this project looks is inspired by [great article from namely-labs](https://medium.com/namely-labs/how-we-build-grpc-services-at-namely-52a3ae9e7c35)

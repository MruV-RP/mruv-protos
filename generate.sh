#!/bin/bash
set -e

mkdir -p /gen/swagger
mkdir -p /gen/pb-go

for x in /protos/**/*.proto; do protoc -I/opt/include --proto_path=/protos --swagger_out=logtostderr=true:/gen/swagger --go_out=plugins=grpc,paths=source_relative:/gen/pb-go $x; done
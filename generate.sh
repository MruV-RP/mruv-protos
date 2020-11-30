#!/bin/bash
set -e

mkdir -p /gen/pb-docs
mkdir -p /gen/pb-swagger
mkdir -p /gen/pb-go

for x in /defs/**/*.proto; do protoc -I/opt/include --proto_path=/defs --go_out=plugins=grpc,paths=source_relative:/gen/pb-go --go_opt paths=source_relative --grpc-gateway_opt paths=source_relative --grpc-gateway_out /gen/pb-go --grpc-gateway_opt logtostderr=true --validate_out=lang=go,paths=source_relative:/gen/pb-go --openapiv2_out=logtostderr=true:/gen/pb-swagger $x; done

protoc -I/opt/include --proto_path=/defs --doc_opt=markdown,docs.md --doc_out=/gen/pb-docs /defs/**/*.proto

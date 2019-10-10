#!/bin/bash
set -euo pipefail

protoc -I/opt/include -I/protos/ --swagger_out=logtostderr=true:/swagger --doc_out=/docs --doc_opt=markdown,docs.md /protos/*.proto

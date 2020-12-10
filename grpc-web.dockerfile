FROM namely/protoc-all:1.33_0

RUN sed -i 's/grpcwebtext/grpcweb/' /usr/local/bin/entrypoint.sh
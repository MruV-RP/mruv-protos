FROM namely/protoc-all:latest

COPY generate.sh /generate.sh
RUN chmod +x /generate.sh

ENTRYPOINT ["/generate.sh"]

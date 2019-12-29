FROM namely/protoc-all:1.26_0

COPY generate.sh /generate.sh
RUN chmod +x /generate.sh

ENTRYPOINT ["/generate.sh"]

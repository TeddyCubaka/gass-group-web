#!/bin/bash
set -e

docker stop gass-group || true
docker rm gass-group || true

docker build -t gass-group-img .

docker stop gass-group || true
docker rm gass-group || true

docker run -d -p 3000:3000 --name gass-group gass-group-img

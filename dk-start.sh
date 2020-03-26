#!/bin/bash

docker run -it --name  ionic-toolkit\
    --rm \
    -w /application/ \
    -v ${PWD}:/application/ \
    -p 4200:4200 \
    -p 4201:4201 \
    -p 4202:4202 \
    ionic-toolkit sh

#!/bin/bash
echo $TRAVIS_TAG
if [[ $TRAVIS_TAG =~ "@grimtim/prova" ]]; then
 echo "cacio"
 cd ./packages/prova/build
fi

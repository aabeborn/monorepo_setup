#!/bin/bash
echo $TRAVIS_TAG
if [[ $TRAVIS_TAG =~ "@grimtim/prova" ]] | [[ $TRAVIS_BRANCH =~ "master" ]]; then
 echo "cacio"
 cd ./packages/prova/build
fi

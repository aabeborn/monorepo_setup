#!/bin/bash
echo $TRAVIS_TAG
if [[ $TRAVIS_TAG =~ "@grimtim/prova" ]]; then
  cd packages/prova/build
fi

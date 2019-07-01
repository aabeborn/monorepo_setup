#!/bin/bash
echo $TRAVIS_TAG
if [[ $TRAVIS_TAG =~ "@grimtim/prova" ]]; then
  ls -latr
  cd ./packages/prova/build
fi

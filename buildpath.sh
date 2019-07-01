#!/bin/bash
echo $TRAVIS_TAG
if [[ $TRAVIS_TAG =~ "@grimtim/prova" ]]; then
 pwd
fi

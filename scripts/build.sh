#!/usr/bin/env bash
rm -rf ./dist
babel --extensions ".ts,.js" src -d ./dist

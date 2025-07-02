#!/bin/bash
docker-compose -f production.yml down && docker-compose -f production.yml up -d --build --remove-orphans

#!/bin/bash

set -xu

echo "Building Docker image"
docker-compose --project-name "task-automation-games" build --no-cache automation-playwright
docker-compose --project-name "task-automation-games" run automation-playwright 

EXIT=$?
docker-compose --project-name "e2e-convo-voice-tests" down --rmi local --volumes
exit $EXIT
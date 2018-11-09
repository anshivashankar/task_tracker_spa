export MIX_ENV=prod
export PORT=4798

cd /home/task-spa/task_tracker_spa

_build/prod/rel/task_tracker_spa/bin/task_tracker_spa stop
_build/prod/rel/task_tracker_spa/bin/task_tracker_spa start

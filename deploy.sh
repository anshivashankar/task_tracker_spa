export MIX_ENV=prod
export PORT=4798

cd /home/task-spa/task_tracker_spa

_build/prod/rel/task_tracker_spa/bin/task_tracker_spa stop

mix deps.get
cd assets 
npm install
cd ..
mix ecto.create
mix ecto.migrate

cd assets
node_modules/.bin/webpack --mode production
cd ..

mix phx.digest
mix compile
mix release --env=prod

_build/prod/rel/task_tracker_spa/bin/task_tracker_spa start

defmodule TaskTrackerSpaWeb.Router do
  use TaskTrackerSpaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", TaskTrackerSpaWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/new-task", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", TaskTrackerSpaWeb do
    pipe_through :api

    resources "/sessions", SessionController, only: [:create]
    
    resources "/users", UserController, except: [:edit]
    resources "/tasks", TaskController
  end
end

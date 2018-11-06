# inspired by: https://github.com/NatTuck/husky_shop_spa/commit/0fbecf892b0c87febc901882515008546fbee365


defmodule TaskTrackerSpaWeb.SessionController do
  use TaskTrackerSpaWeb, :controller

  action_fallback TaskTrackerSpaWeb.FallbackController

  alias TaskTrackerSpa.Users.User

  def create(conn, %{"email" => email, "password" => password}) do
    with %User{} = user <- TaskTrackerSpa.Users.get_and_auth_user(email, password) do
      resp = %{
        data: %{
          token: Phoenix.Token.sign(TaskTrackerSpaWeb.Endpoint, "user_id", user.id),
          user_id: user.id,
          user_name: user.name
        }
      }
      conn
      |> put_resp_header("content-type", "application/json; charset=utf-8")
      |> send_resp(:created, Jason.encode!(resp))
    end
  end
end

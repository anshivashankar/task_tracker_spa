defmodule TaskTrackerSpa.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  # password_
  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    has_many :tasks, TaskTracker.Tasks.Task

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password_hash])
    |> validate_required([:name, :email, :password_hash])
  end
end

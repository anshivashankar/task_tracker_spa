defmodule TaskTrackerSpa.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  # password_
  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    has_many :tasks, TaskTrackerSpa.Tasks.Task
    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> put_pass_hash()
    |> validate_required([:name, :email, :password_hash])
  end

  # Password validation
  # From Comeonin docs
  def put_pass_hash(%Ecto.Changeset{
        valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Comeonin.Argon2.add_hash(password))
  end
  def put_pass_hash(changeset), do: changeset


end

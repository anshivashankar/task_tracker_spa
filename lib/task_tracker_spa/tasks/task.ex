defmodule TaskTrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completion, :boolean, default: false
    field :description, :string
    field :time, :integer, default: 0
    field :title, :string
    belongs_to :assigned_user, TaskTrackerSpa.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    IO.inspect("ALSO COMES HERE")
    task
    |> cast(attrs, [:title, :description, :time, :completion, :assigned_user_id])
    |> validate_required([:title, :description, :time])
  end
end

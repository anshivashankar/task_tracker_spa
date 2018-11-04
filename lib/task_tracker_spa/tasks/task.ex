defmodule TaskTrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completion, :boolean, default: false
    field :description, :string
    field :time, :integer, default: 0
    field :title, :string
    field :assigned_user, :id
    #belongs_to: :assigned_user, TaskTracker.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :time, :completion])
    |> validate_required([:title, :description, :time, :completion])
  end
end

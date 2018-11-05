defmodule TaskTrackerSpa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string, null: false
      add :description, :string
      add :time, :integer, null: false
      add :completion, :boolean, default: false, null: false
      add :assigned_user_id, references(:users, on_delete: :nilify_all)

      timestamps()
    end

    create index(:tasks, [:assigned_user_id])
  end
end

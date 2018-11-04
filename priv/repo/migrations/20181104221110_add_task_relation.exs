defmodule TaskTrackerSpa.Repo.Migrations.AddTaskRelation do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :tasks, references(:tasks, on_delete: :nilify_all)
    end

    create index(:users, [:tasks])
  end
end

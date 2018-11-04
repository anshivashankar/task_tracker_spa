defmodule TaskTrackerSpa.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string, null: false
      add :email, :string, null: false
      add :password_hash, :string, null: false
      #add :tasks, references(:tasks, on_delete: :nilify_all)

      timestamps()
    end

    #create index(:users, [:tasks])
  end
end

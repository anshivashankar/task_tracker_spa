defmodule TaskTrackerSpaWeb.PageController do
  use TaskTrackerSpaWeb, :controller

  # inspired by http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html
  def index(conn, _params) do
    # we usually want to list tasks first.
    tasks = TaskTrackerSpa.Tasks.list_tasks()
    |> Enum.map(&(Map.take(&1, [:title, :description, :completion, :time, :assigned_user_id])))
    render conn, "index.html", tasks: tasks
  end
end

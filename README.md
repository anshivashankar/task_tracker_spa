# Design Choices

I had to make a lot of design choices that make this app different from tasks1. For example, we no longer go onto a different page to edit each task - instead, simply click on each icon or text to edit it. This makes the app more intuitive, easy to use, and saves on adding more Routes.

Additionally, another choice I made was to prevent the addition and deletion of tasks without logging in. However, I do allow the editing of tasks, such as marking as complete, editing time, and assigned user. This is because they are non-destructive, whereas adding and removing tasks can be.

# TaskTrackerSpa

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

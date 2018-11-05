# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTrackerSpa.Repo.insert!(%TaskTrackerSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


alias TaskTrackerSpa.Repo
alias TaskTrackerSpa.Users.User
alias TaskTrackerSpa.Tasks.Task

pwhash = Argon2.hash_pwd_salt("password")
pwhash2 = Argon2.hash_pwd_salt("password2")

# Users
ashwin = Repo.insert!(%User{email: "shivashankar.a@husky.neu.edu", name: "Ashwin ShivaShankar", password_hash: pwhash})
testing = Repo.insert!(%User{email: "testing@email.com", name: "Testing Person", password_hash: pwhash2})


# Tasks
Repo.insert!(%Task{title: "Complete SPA", description: "Single Page Application", time: 900, completion: true, assigned_user: ashwin})
Repo.insert!(%Task{title: "Complete Final Project", description: "Basically impending doom", time: 9000, completion: false})



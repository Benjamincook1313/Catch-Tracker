insert into users(FirstName, LastName, Email, Hash)
values ($1, $2, $3, $4)
returning;
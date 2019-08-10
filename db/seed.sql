create table users(
	user_id serial primary key,
	first_name varchar(200),
	last_name varchar(200),
	email varchar(200),
	Hash varchar
)

create table catch(
	Catch_id serial primary key,
	user_id int references users(user_id),
	River varchar(200),
	Species varchar(200),
	Fly varchar(200),
	Wheather varchar(200),
	Image varchar,
	Date varchar(10),
	TOD varchar
)
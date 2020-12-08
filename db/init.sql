
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL
);

create table if not exists Posts (
    post_id serial primary key,
    user_id int references users(user_id),
    text,
    p_time date
);
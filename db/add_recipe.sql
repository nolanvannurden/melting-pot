create table if not exists Posts (
    post_id serial primary key,
    user_id int references users(user_id),
    text varchar(250),
    p_time date
);
INSERT INTO Posts (user_id, text, p_time) VALUES ($1, $2, $3);

SELECT * FROM Posts
WHERE user_id = $1;
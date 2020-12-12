UPDATE Posts
SET text = $2
WHERE post_id = $1;

SELECT * FROM Posts;


UPDATE Posts
SET post_id = $1
WHERE text = $2;

SELECT * FROM Posts;


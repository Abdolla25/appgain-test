CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    OrderStatus INT NOT NULL,
    uid INT NOT NULL,
    FOREIGN KEY (uid) REFERENCES users(id)
);
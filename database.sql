CREATE TABLE users(
    _id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    lastname VARCHAR(255),
    emai VARCHAR(255),
    password VARCHAR(255),
    gender VARCHAR(255),
    date DATE NOT NULL,
    number VARCHAR(255),
    avatar VARCHAR(255),
    role VARCHAR(255)
)
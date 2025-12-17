CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT
);

INSERT INTO users (name, age) VALUES
  ('Arjun Kumar', 22),
  ('Priya Sharma', 21),
  ('Rohit Verma', 23),
  ('Sneha Iyer', 24),
  ('Amit Patel', 25),
  ('Neha Gupta', 22),
  ('Karthik Raj', 26),
  ('Pooja Singh', 23),
  ('Vikram Rao', 27),
  ('Ananya Das', 21),
  ('Rahul Mehta', 24),
  ('Divya Nair', 22),
  ('Suresh Babu', 28),
  ('Kavya Reddy', 23),
  ('Manoj Kumar', 26),
  ('Swathi Menon', 25),
  ('Nikhil Jain', 24),
  ('Lakshmi Priya', 22),
  ('Deepak Yadav', 27),
  ('Meera Joshi', 21);

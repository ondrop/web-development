CREATE DATABASE university;
USE university;
CREATE TABLE faculty (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE groups (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    faculty_id INT NOT NULL,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id)
);
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    group_id INT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES groups(id) 
);
INSERT INTO faculty(name)
VALUES 
    ('Faculty of Information Technologies and Computer Engineering'),
    ('Faculty of Radio Engineering'),
    ('Faculty of Social Studies');
INSERT INTO groups(name, faculty_id)
VALUES
    ('PS-11', 1), 
    ('PS-12', 1),
    ('PS-13', 1),
    ('Radio Engineering', 2),
    ('Control in Engineering Systems', 2),
    ('Electronics and Nanotechnics', 2),
    ('Social Work', 3),
    ('Service', 3),
    ('Tourism', 3);  
INSERT INTO students(first_name, last_name, age, group_id)
VALUES 
    ('Ivan', 'Ivanov', 19, 1),
    ('Andrey', 'Okunev', 19, 1),
    ('Petr', 'Petrov', 19, 1),
    ('Andrey', 'Petrov', 19, 1),
    ('Ivan', 'Okunev', 19, 1),
    ('Ivan', 'Ivanov', 19, 2),
    ('Andrey', 'Okunev', 19, 2),
    ('Petr', 'Petrov', 19, 2),
    ('Andrey', 'Petrov', 19, 2),
    ('Ivan', 'Okunev', 19, 2),
    ('Ivan', 'Ivanov', 19, 3),
    ('Andrey', 'Okunev', 19, 3),
    ('Petr', 'Petrov', 19, 3),
    ('Andrey', 'Petrov', 19, 3),
    ('Ivan', 'Okunev', 19, 3),
    ('Ivan', 'Ivanov', 19, 4),
    ('Andrey', 'Okunev', 19, 4),
    ('Petr', 'Petrov', 19, 4),
    ('Andrey', 'Petrov', 19, 4),
    ('Ivan', 'Okunev', 19, 4),
    ('Ivan', 'Ivanov', 19, 5),
    ('Andrey', 'Okunev', 19, 5),
    ('Petr', 'Petrov', 19, 5),
    ('Andrey', 'Petrov', 20, 5),
    ('Ivan', 'Okunev', 20, 5),
    ('Ivan', 'Ivanov', 20, 6),
    ('Andrey', 'Okunev', 19, 6),
    ('Petr', 'Petrov', 19, 6),
    ('Andrey', 'Petrov', 19, 6),
    ('Ivan', 'Okunev', 19, 6),
    ('Ivan', 'Ivanov', 19, 7),
    ('Andrey', 'Okunev', 19, 7),
    ('Petr', 'Petrov', 19, 7),
    ('Andrey', 'Petrov', 19, 7),
    ('Ivan', 'Okunev', 20, 7),
    ('Ivan', 'Ivanov', 19, 8),
    ('Andrey', 'Okunev', 19, 8),
    ('Petr', 'Petrov', 19, 8),
    ('Andrey', 'Petrov', 19, 8),
    ('Ivan', 'Okunev', 19, 8),
    ('Ivan', 'Ivanov', 20, 9),
    ('Andrey', 'Okunev', 19, 9),
    ('Petr', 'Petrov', 19, 9),
    ('Andrey', 'Petrov', 19, 9),
    ('Ivan', 'Okunev', 19, 9);
SELECT 
    * 
FROM 
    students
WHERE 
    age = 19; 

SELECT 
    * 
FROM 
    students
WHERE
    group_id = 1;

SELECT
    students.* 
FROM
    students
JOIN 
    groups ON students.group_id = groups.id
JOIN 
    faculty ON groups.faculty_id = faculty.id
WHERE 
    faculty.id = 1;

SELECT
    faculty.id AS 'faculty_id',
    faculty.name AS 'faculty_name',
    students.* 
FROM 
    students
JOIN 
    groups ON students.group_id = groups.id
JOIN 
    faculty ON groups.faculty_id = faculty.id
WHERE 
    faculty.id = 1;
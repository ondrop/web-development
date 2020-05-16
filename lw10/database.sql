CREATE DATABASE university;
USE university;
CREATE TABLE faculty (
    faculty_id      INT AUTO_INCREMENT  NOT NULL,
    faculty_name    VARCHAR(255)        NOT NULL,
    PRIMARY KEY (faculty_id)
);
CREATE TABLE faculty_group (
    group_id    INT AUTO_INCREMENT  NOT NULL,
    group_name  VARCHAR(255)        NOT NULL,
    faculty_id  INT                 NOT NULL,
    PRIMARY KEY (group_id),
    FOREIGN KEY (faculty_id) REFERENCES faculty(faculty_id)
);
CREATE TABLE student (
    student_id  INT AUTO_INCREMENT  NOT NULL,
    first_name  VARCHAR(255)        NOT NULL,
    last_name   VARCHAR(255)        NOT NULL,
    age         INT                 NOT NULL,
    group_id    INT                 NOT NULL,
    PRIMARY KEY (student_id),
    FOREIGN KEY (group_id) REFERENCES faculty_group(group_id) 
);
INSERT INTO faculty(faculty_name)
VALUES 
    ('Faculty of Information Technologies and Computer Engineering'),
    ('Faculty of Radio Engineering'),
    ('Faculty of Social Studies');
INSERT INTO faculty_group(group_name, faculty_id)
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
INSERT INTO student(first_name, last_name, age, group_id)
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
    student
WHERE 
    age = 19; 

SELECT 
    s.* 
FROM 
    student s
    JOIN faculty_group g ON g.group_id = s.group_id
WHERE
    g.group_name = 'PS-11';

SELECT
    s.* 
FROM
    student s
    JOIN faculty_group g ON s.group_id = g.group_id
    JOIN faculty f ON g.faculty_id = f.faculty_id
WHERE 
    f.faculty_name = 'Faculty of Social Studies';

SELECT
    f.faculty_id,
    f.faculty_name,
    s.* 
FROM 
    student s
    JOIN faculty_group g ON s.group_id = g.group_id
    JOIN faculty f ON g.faculty_id = f.faculty_id
WHERE 
    f.faculty_name = 'Faculty of Social Studies';
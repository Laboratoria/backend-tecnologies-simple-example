using System;
using System.Collections.Generic;
using System.Linq;
					
public class Student
{
    private string name;
    private List<Course> courses;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public List<Course> Courses
    {
        get { return courses; }
        set { courses = value; }
    }

    public Student(string name, List<Course> courses)
    {
        this.name = name;
        this.courses = courses;
    }
}

public class Course
{
    private string name;
    private int score;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Score
    {
        get { return score; }
        set { score = value; }
    }

    public Course(string name, int score)
    {
        this.name = name;
        this.score = score;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        List<Student> data = new List<Student>
        {
            new Student("Juan", new List<Course>
            {
                new Course("Matematicas", 15),
                new Course("Historia", 10),
                new Course("Ciencias", 18),
                new Course("Ingles", 12)
            }),
            new Student("Maria", new List<Course>
            {
                new Course("Matematicas", 19),
                new Course("Historia", 13),
                new Course("Ciencias", 8),
                new Course("Ingles", 16)
            }),
            new Student("Pedro", new List<Course>
            {
                new Course("Matematicas", 11),
                new Course("Historia", 14),
                new Course("Ciencias", 7),
                new Course("Ingles", 20)
            }),
            new Student("Ana", new List<Course>
            {
                new Course("Matematicas", 9),
                new Course("Historia", 17),
                new Course("Ciencias", 5),
                new Course("Ingles", 18)
            })
        };

        foreach (var student in data)
        {
            Console.WriteLine("Usuario: " + student.Name + "\n");

            var approved = student.Courses.Where(course => course.Score >= 11).ToList();
            var reproved = student.Courses.Where(course => course.Score < 11).ToList();

            Console.WriteLine(" -> Aprobados: " + string.Join(", ", approved.Select(course => course.Name)) + "\n");
            Console.WriteLine(" —> Reprobados: " + string.Join(", ", reproved.Select(course => course.Name)) + "\n");
            Console.WriteLine(" —> Promedio: " + student.Courses.Average(course => course.Score) + "\n");
        }
    }
}

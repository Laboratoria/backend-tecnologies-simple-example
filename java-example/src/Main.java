import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Student> students = getStudents();
        for(Student student: students){
            System.out.println("Usuario: " + student.getName());
            System.out.println(
                    "   -> Aprobados : " +
                            getApprovedCourses(student.getCourses()).stream()
                                    .map(Course::getName)
                                    .collect(Collectors.joining(", "))
            );
            System.out.println(
                    "   -> Reprobados : " +
                            getReprovedCourses(student.getCourses()).stream()
                                    .map(Course::getName)
                                    .collect(Collectors.joining(", "))
            );
            System.out.println(
                    "   -> Promedio : " +
                            student.getCourses().stream()
                                    .mapToDouble(Course::getScore)
                                    .average()
                                    .orElse(0)

            );
        }

    }

    public static List<Student> getStudents() {
        Student juan = new Student("Juan", List.of(
                new Course("Matemática", 15),
                new Course("Historia", 10),
                new Course("Ciencias", 18),
                new Course("Inglés", 12)
        ));
        Student maria = new Student("María", List.of(
                new Course("Matemática", 19),
                new Course("Historia", 13),
                new Course("Ciencias", 8),
                new Course("Inglés", 16)
        ));
        Student pedro = new Student("Pedro", List.of(
                new Course("Matemática", 11),
                new Course("Historia", 14),
                new Course("Ciencias", 7),
                new Course("Inglés", 20)
        ));
        Student ana = new Student("Ana", List.of(
                new Course("Matemática", 9),
                new Course("Historia", 17),
                new Course("Ciencias", 5),
                new Course("Inglés", 18)
        ));

        List<Student> students = new ArrayList<>();
        students.add(juan);
        students.add(maria);
        students.add(pedro);
        students.add(ana);
        return students;
    }

    public static List<Course> getReprovedCourses(List<Course> courses) {
        return courses.stream().filter(course -> course.getScore() < 11).collect(Collectors.toList());
    }

    public static List<Course> getApprovedCourses(List<Course> courses) {
        return courses.stream().filter(course -> course.getScore() >= 11).toList();
    }
}

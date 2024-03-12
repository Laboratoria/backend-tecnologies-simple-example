# Instrucciones para desarrollar en C#

## Instalación de .NET
1. Descargar e instalar el SDK de .NET desde [dotnet.microsoft.com](https://dotnet.microsoft.com/download).
2. Verificar la instalación ejecutando `dotnet --version` en la terminal. Debería mostrar la versión instalada.

## Instalación de Visual Studio Code
1. Descargar e instalar Visual Studio Code desde [code.visualstudio.com](https://code.visualstudio.com/download).
2. Instalar la extensión "C#" para Visual Studio Code desde la pestaña de extensiones.

## Crear un Proyecto de Consola en C# en VS Code
1. Abrir Visual Studio Code.
2. Crear un nuevo directorio para tu proyecto.
3. Abrir una terminal en Visual Studio Code.
4. Navegar al directorio del proyecto y ejecutar el siguiente comando:

   ```bash
   dotnet new console
   ```

## Explicación del Código en `Program.cs`

En este Proyecto que tiene como objetivo obtener las calidicaciones de estudiantes, se definen tres clases: Student, Course, y Program. La clase Student representa un estudiante con nombre y cursos, la clase Course representa un curso con nombre y calificación, y la clase Program tiene el método Main. El código crea una lista de estudiantes, itera para imprimir información sobre cada uno, y calcula cursos aprobados, reprobados y el promedio. En resumen, ofrece una estructura básica para trabajar con objetos en C# y destaca el uso de listas y LINQ para procesar datos.

### Clase `Student`
- Representa a un estudiante con un nombre y una lista de cursos.
- Propiedades: `Name` (nombre del estudiante) y `Courses` (lista de cursos).
- Constructor: Inicializa el objeto con el nombre y la lista de cursos.

### Clase `Course`
- Representa un curso con un nombre y una calificación.
- Propiedades: `Name` (nombre del curso) y `Score` (calificación del curso).
- Constructor: Inicializa el objeto con el nombre y la calificación del curso.

### Clase `Program`
- Contiene el método `Main`, que es el punto de entrada del programa.
- Se crea una lista de estudiantes (`data`) con diferentes nombres y cursos.
- Utiliza un bucle `foreach` para iterar sobre cada estudiante e imprimir información relevante.
- Calcula y muestra los cursos aprobados, reprobados y el promedio de calificaciones para cada estudiante.


const data = [
	{
		name: "Juan",
		courses: [
			{ name: "Matemáticas", score: 15 },
			{ name: "Historia", score: 10 },
			{ name: "Ciencias", score: 18 },
			{ name: "Inglés", score: 12 },
		],
	},
	{
		name: "María",
		courses: [
			{ name: "Matemáticas", score: 19 },
			{ name: "Historia", score: 13 },
			{ name: "Ciencias", score: 8 },
			{ name: "Inglés", score: 16 },
		],
	},
	{
		name: "Pedro",
		courses: [
			{ name: "Matemáticas", score: 11 },
			{ name: "Historia", score: 14 },
			{ name: "Ciencias", score: 7 },
			{ name: "Inglés", score: 20 },
		],
	},
	{
		name: "Ana",
		courses: [
			{ name: "Matemáticas", score: 9 },
			{ name: "Historia", score: 17 },
			{ name: "Ciencias", score: 5 },
			{ name: "Inglés", score: 18 },
		],
	},
]

for (let i = 0; i < data.length; i++) {
  console.log("Usuario : " + data[i].name);
  const approved = data[i].courses.filter((course) => course.score >= 11);
  const reproved = data[i].courses.filter((course) => course.score < 11);
  console.log(" -> Aprobados : " + approved.map((course) => course.name).join(", "));
  console.log(" -> Reprobados : " + reproved.map((course) => course.name).join(", "));
  console.log(" -> Promedio : " + data[i].courses.reduce((a, b) => a + b.score, 0) / data[i].courses.length + "\n");
}

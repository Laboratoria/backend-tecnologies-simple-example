const data = [
    {
        "name": "Juan",
        "courses": [
            {
                "name": "Matematicas",
                "score": 15
            },
            {
                "name": "Historia",
                "score": 10
            },
            {
                "name": "Ciencias",
                "score": 18
            },
            {
                "name": "Ingles",
                "score": 12
            }
        ]
    },
    {
        "name": "Maria",
        "courses": [
            {
                "name": "Matematicas",
                "score": 19
            },
            {
                "name": "Historia",
                "score": 13
            },
            {
                "name": "Ciencias",
                "score": 8
            },
            {
                "name": "Ingles",
                "score": 16
            }
        ]
    },
    {
        "name": "Pedro",
        "courses": [
            {
                "name": "Matematicas",
                "score": 11
            },
            {
                "name": "Historia",
                "score": 14
            },
            {
                "name": "Ciencias",
                "score": 7
            },
            {
                "name": "Ingles",
                "score": 20
            }
        ]
    },
    {
        "name": "Ana",
        "courses": [
            {
                "name": "Matematicas",
                "score": 9
            },
            {
                "name": "Historia",
                "score": 17
            },
            {
                "name": "Ciencias",
                "score": 5
            },
            {
                "name": "Ingles",
                "score": 18
            }
        ]
    }
];

for (let i = 0; i < data.length; i++) {
    console.log("Usuario : " + data[i].name + "\n");
    const approved = data[i].courses.filter((course) => course.score >= 11);
    const reproved = data[i].courses.filter((course) => course.score < 11);
    console.log(" -> Aprobados : " + approved.map((course) => course.name).join(", ")) + "\n";
    console.log(" —> Reprobados : " + reproved.map((course) => course.name).join(", ")) + "\n";
    console.log(" —> Promedio : " + data[i].courses.reduce((a, b) => a + b.score, 0) / data[i].courses.length + "\n");
}

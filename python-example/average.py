data = [
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
]

for user in data:
    print("Usuario:", user["name"], "\n")
    approved = [course["name"] for course in user["courses"] if course["score"] >= 11]
    reproved = [course["name"] for course in user["courses"] if course["score"] < 11]
    print(" -> Aprobados:", ", ".join(approved))
    print(" —> Reprobados:", ", ".join(reproved))
    average_score = sum(course["score"] for course in user["courses"]) / len(user["courses"])
    print(" —> Promedio:", average_score, "\n")

const fs = require('node:fs/promises');

const FILE_OUTPUT ='./output.txt';

function printAndWrite(message){
	console.log(message);
	fs.writeFile(FILE_OUTPUT, message, { flag: 'a+' }, err => console.error(err));
}

async function average() {
	try {
		const text = await fs.readFile('./data.json', { encoding: 'utf8' });
		const data = JSON.parse(text);
		for (let i = 0; i < data.length; i++) {
			const message1 = "Usuario : " + data[i].name + "\n";
			printAndWrite(message1);

			const approved = data[i].courses.filter((course) => course.score >= 11);
			const reproved = data[i].courses.filter((course) => course.score < 11);

			const message2 = " -> Aprobados : " + approved.map((course) => course.name).join(", ")+ "\n";
			printAndWrite(message2);

			const message3 = " —> Reprobados : " + reproved.map((course) => course.name).join(", ")+ "\n";
			printAndWrite(message3);
			
			const message4 = " —> Promedio : " + data[i].courses.reduce((a, b) => a + b.score, 0) / data[i].courses.length + "\n";
			printAndWrite(message4);
		}

	} catch (err) {
		console.log(err);
	}
}
average();


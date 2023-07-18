const getSum = (a, b, c) => {
	const sum = a + b + c;
	return sum;
};

const getStudentsFromDB = () => {
	const students = [];
	const student1 = {
		name: "garry",
		attendance: 74,
	};
	const student2 = {
		name: "mary",
		attendance: 85,
	};
	const student3 = {};

	students.push(student1);
	students.push(student2);
    students.push( student3 );
    return students;
};

const startExec = async () => {
	let totalAttendance = 0;

	const students = await getStudentsFromDB();

	for (let student of students) {
		if (student && student.attendance) totalAttendance += student.attendance;
	}

	let avgAttendance = totalAttendance / students.length;

	let isTotalAttendance70 = false;

	if (totalAttendance == 70) isTotalAttendance70 = true;

	return totalAttendance;
};

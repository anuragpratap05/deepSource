const getSum = (a, b, c) => {
	const sum = a + b + c;
	return sum;
};

const startExec = async () => {
	const student1 = {
		name: "garry",
		attendance: 74,
	};
	const student2 = {
		name: "mary",
		attendance: 85,
	};
	const student3 = {
		name: "Martina",
	};

	let attendance1 = 0;
	let attendance2 = 0;
	let attendance3 = 0;

	if (student1 && student1.attendance) attendance1 = student1.attendance;
	if (student2.attendance) attendance2 = student2.attendance;
	if (student3.attendance) attendance3 = student3.attendance;

	let attendanceStatus;

	const attendanceSum = await getSum(attendance1, attendance2, attendance3);
	if (attendanceSum == 50) attendanceStatus = "attendanceSum is 50";

	const avgAttendance = attendanceSum / 3;
	return attendanceSum;
};

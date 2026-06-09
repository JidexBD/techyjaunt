// create student ojects

const students = [
  {
    id: 1,
    name: "Urek Mazino",
    age: 25,
    grades: [98, 99, 99],
  },
  {
    id: 2,
    name: "Jahad King",
    age: 28,
    grades: [95, 98, 99],
  },
  {
    id: 3,
    name: "Enyruu Messenger",
    age: 25,
    grades: [99, 98, 99],
  },
  {
    id: 4,
    name: "khun Edan",
    age: 29,
    grades: [99, 97, 97],
  },
  {
    id: 6,
    name: "Ari Hon",
    age: 29,
    grades: [99, 98, 97],
  },
];

// calculate average
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);

  return Number((total / grades.length).toFixed(2));
}

const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: calculateAverage(student.grades),
  };
});

console.log(studentsWithAverage);

// filter students by pass mark
function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log(passing);

// call back
function processStudents(students, callback) {
  return students.map(callback);
}

function addLetterGrade(student) {
  let letterGrade;

  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade,
  };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);

console.log(studentsWithGrades);

function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? "Pass" : "Fail",
  };
}

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

console.log(studentsWithStatus);

// find student
function findStudentById(students, id) {
  return students.find((student) => student.id === id) || null;
}

const student = findStudentById(studentsWithAverage, 3);

console.log(student);

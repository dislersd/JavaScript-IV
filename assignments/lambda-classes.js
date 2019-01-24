// CODE here for your Lambda Classes


class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(iAttributes) {
    super(iAttributes);
    this.specialty = iAttributes.specialty;
    this.favLanguage = iAttributes.favLanguage;
    this.catchPhrase = iAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  }

  gradeHammer(student) {
    if (student.grade) {
    let random = (Math.floor((Math.random()*10)+1));
    let plusOrMinus = Math.round(Math.random()) * 2 - 1;
    student.grade += random * plusOrMinus;
    }
  }
}

class Student extends Person {
  constructor(sAttributes) {
    super(sAttributes);
    this.previousBackground = sAttributes.previousBackground;
    this.className = sAttributes.className;
    this.favSubjects = sAttributes.favSubjects;
    this.grade =sAttributes.grade;
  }

  listsSubjects() {
    console.log(`${this.favSubjects[0]} ${this.favSubjects[1]} ${this.favSubjects[2]}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade < 70) {
      console.log(this.grade);
      return Josh.gradeHammer(this);
    } else if (this.grade > 70) {
      console.log(`YOU GRADUATE`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(insAttributes) {
    super(insAttributes);
    this.gradClassName = insAttributes.gradClassName;
    this.favInstructor = insAttributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel} "@${channel} standy times!"`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}


const Josh = new Instructor({
  name: 'Josh',
  age: '35',
  location: 'Lambdaville',
  gender: 'M'
})

Josh.speak();

const Dylan = new Student({
  name: 'Dylan',
  age: '27',
  location: 'Seattle',
  gender: 'M',
  previousBackground: 'Sales',
  className: 'web17',
  favSubjects: ['JS', 'HTML', 'CSS'],
  grade: 30
})

Dylan.listsSubjects();
console.log(Dylan.grade); 

const Michael = new ProjectManager({
  name: 'Michael',
  age: '21',
  location: 'New Jersey',
  gender: 'M',
  className: 'web17',
  favSubjects: ['JS', 'HTML', 'React'],
  gradClassName: 'web14',
  favInstructor: 'Big Knell',
})

Michael.debugsCode(Dylan, 'JS');
Michael.standUp('mygroup');

for (let i = 0; i < 100; i++) {
  Dylan.graduate();
}




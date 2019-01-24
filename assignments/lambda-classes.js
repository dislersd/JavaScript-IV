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
}
class Student extends Person {
  constructor(sAttributes) {
    super(sAttributes);
    this.previousBackground = sAttributes.previousBackground;
    this.className = sAttributes.className;
    this.favSubjects = sAttributes.favSubjects;
  }

  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
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





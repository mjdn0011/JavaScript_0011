function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet(){
  return `Hi, ${this.name}`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study(){
  return `${this.name} is studying.`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Jay')
console.log(me.greet())
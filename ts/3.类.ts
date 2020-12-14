class Person {
  name: string

  age: number

  static country: string = 'China'

  static planet: string = 'Earth'

  info(): void {
    console.log(`${this.name} - ${this.age} - ${Person.country} - ${Person.planet}`)
  }

  static staticInfo(): void {
    // 静态方法只能使用静态变量
    console.log(`${this.country} - ${this.planet}`)
  }
}

const person = new Person();
person.name = 'Jane'
person.age = 18
person.info()
Person.staticInfo()

// ts中的继承
class Student extends Person {

  studentNo: string

  schoolName: string

  studentInfo(): void {
    console.log(`${this.schoolName} - ${this.studentNo}`)
  }

  info(): void {
    super.info();
  }
}

const student = new Student()
student.name = 'Sam'
student.age = 19
student.studentNo = '200129312301'
student.schoolName = '麻省理工学院'
student.studentInfo()
student.info()

// 属性的访问控制符
// public: 当前类, 子类, 外部类均能访问, 不写默认为public
// protected: 当前类, 子类才能访问
// private: 只有在当前类中才能访问
class Man extends Student {

  private gender: string = '男'

  public height: number

  protected penisLength: number

  changeGender(): void {
    // private属性只有在当前类中才能访问
    this.gender = '女'
    console.log(this.gender)
  }

}

const man = new Man();
// 只能访问public的属性, 其他的属性访问编译会出错
man.height = 180
man.changeGender()

class Boy extends Man {

  access(): void {
    // 子类能访问父类的protected属性
    this.penisLength = 20
    console.log(`${this.height} - ${this.penisLength}`)
  }
}
const boy = new Boy()
boy.height = 140
boy.access()
// 抽象类(和Java的一致)
abstract class Animal {
  abstract work():void
}

class Dog extends Animal {
  work() {
    console.log('看门')
  }
}

class Cat extends Animal {
  work() {
    console.log('抓老鼠')
  }
}

const dog = new Dog()
dog.work()
const cat = new Cat();
cat.work()

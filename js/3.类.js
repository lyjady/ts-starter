class Person {
    info() {
        console.log(`${this.name} - ${this.age} - ${Person.country} - ${Person.planet}`);
    }
    static staticInfo() {
        // 静态方法只能使用静态变量
        console.log(`${this.country} - ${this.planet}`);
    }
}
Person.country = 'China';
Person.planet = 'Earth';
const person = new Person();
person.name = 'Jane';
person.age = 18;
person.info();
Person.staticInfo();
// ts中的继承
class Student extends Person {
    studentInfo() {
        console.log(`${this.schoolName} - ${this.studentNo}`);
    }
    info() {
        super.info();
    }
}
const student = new Student();
student.name = 'Sam';
student.age = 19;
student.studentNo = '200129312301';
student.schoolName = '麻省理工学院';
student.studentInfo();
student.info();
// 属性的访问控制符
// public: 当前类, 子类, 外部类均能访问, 不写默认为public
// protected: 当前类, 子类才能访问
// private: 只有在当前类中才能访问
class Man extends Student {
    constructor() {
        super(...arguments);
        this.gender = '男';
    }
    changeGender() {
        // private属性只有在当前类中才能访问
        this.gender = '女';
        console.log(this.gender);
    }
}
const man = new Man();
// 只能访问public的属性, 其他的属性访问编译会出错
man.height = 180;
man.changeGender();
class Boy extends Man {
    access() {
        // 子类能访问父类的protected属性
        this.penisLength = 20;
        console.log(`${this.height} - ${this.penisLength}`);
    }
}
const boy = new Boy();
boy.height = 140;
boy.access();
// 抽象类(和Java的一致)
class Animal {
}
class Dog extends Animal {
    work() {
        console.log('看门');
    }
}
class Cat extends Animal {
    work() {
        console.log('抓老鼠');
    }
}
const dog = new Dog();
dog.work();
const cat = new Cat();
cat.work();
class Zerg {
    // 简化getter setter方法
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set speed(speed) {
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }
}
const zerg = new Zerg();
zerg.name = 'ZergLink';
zerg.speed = 34;
console.log(zerg);
class Terran {
    // 直接将成员变量定义在构造方法中, 等价于直接定义在类中
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const terran = new Terran('Jack', 23);
console.log(terran.name);

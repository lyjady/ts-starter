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

// 导入别的文件的命名空间, 使用和基本使用一样
// import {A} from './6.命名空间'
// 泛型方法
function method1<T>(value: T): T {
  return value
}

console.log(method1(1));
console.log(method1('abc'));

// 泛型类
class MinClass<T> {

  values: T[] = []

  add(value: T): void {
    this.values.push(value)
  }

  min(): T {
    let min = this.values[0]
    for (let i = 1; i < this.values.length; i++) {
      if (this.values[i] < min) {
        min = this.values[i]
      }
    }
    return min
  }
}

const minClass = new MinClass<number>()
minClass.add(5)
minClass.add(3)
minClass.add(6)
minClass.add(7)
minClass.add(2)
console.log(minClass.min())

const minClass2 = new MinClass<string>()
minClass2.add('a')
minClass2.add('b')
minClass2.add('c')
minClass2.add('e')
minClass2.add('f')
console.log(minClass2.min())

// 泛型接口
interface Inter {
  <T>(name: T): T
}

const method: Inter = function<T> (name: T): T {
  return name
}

console.log(method(2));
console.log(method('abcd'));

interface Inter2<T> {
  (name: T): T
}

function method2<T>(name: T): T {
  return name
}

const method22:Inter2<string> = method2

console.log(method22('adsd'));

// const person = new A.Persion()
// person.name = 'Rose'
// person.getName()

// 声明多泛型
function attack<T, K>(name: T, value: K): K {
  return value
}

console.log(attack<string, number>('Jack', 12));

// 泛型结合继承
interface Skill {
  name: string
  consume: number
}
// 表明使用的泛型必须是Skill接口的子类(不一定是接口也可以是抽象类或者普通的类)
function release<T extends Skill>(skill: T): void {
  console.log(skill)
}
release({name: '炎爆术', consume: 100})

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

// ts中有命名空间的概念, 有点类似Java中的package用于隔离两个相同名字的类或者方法
export namespace A {
  export class Persion {
    name: string
    getName(): string {
      return this.name
    }
  }
}

namespace B {
  export class Person {
    nickname: string
    getNickname(): string {
      return this.nickname
    }
  }
}

// 命名空间内的类只能在命名空间内使用, 如果要在命名空间外使用那么需要将类或者方法导出
// 一个ts里面的命名空间可以在其他ts中引入, 前提是需要将这个命名空间先进行export导出
// 在5.泛型.ts中导入命名空间A
// 命名空间与模块不同, 模块是将可能重复使用的代码进行封装提高代码的复用性, 命名空间则是将不同的方法或者类进行隔离
const pA = new A.Persion()
pA.name = 'Jack'
const pB = new B.Person()
pB.nickname = 'Baba'
console.log(pA.getName());
console.log(pB.getNickname());

// 属性接口, 定义一个属性或者一个对象的来明确一个方法的入参规范
interface Fullname {
  firstName: string
  secondName: string
  // 表示可传可不传
  other?: string
}

// 该方法的入参定义为Fullname类型, 那么传入的参数必须和接口中定义的一致, 不一致会编译错误
function showYourName(name: Fullname): void {
  console.log(`${name.firstName} - ${name.secondName}`)
}

showYourName({firstName: '乔治', secondName: '华盛顿'})

// 函数接口, 定义函数的入参与返回值
interface Decrypt {
  (value: string): string
}

const md: Decrypt = function (value: string) {
  return `解密: ${value}`
}

console.log(md('密文'));

// 可索引接口(对数组约束)
interface Arr {
  // 数组只能是string类型
  [index: number]: string
}

const arr: Arr = ['1', '2', '3', '4', '5']

// 可索引接口(对对象约束)
interface Obj {
  [index: string]: string
}
const obj: Obj = {name: '1'}

class MyWorker {

  name: string

  constructor(name) {
    this.name = name
  }

  work(): string {
    return `${this.name}开始工作`
  }
}

// 类类型接口(属性类型接口与函数类型接口的组合, 与Java的接口概念一样)
interface Adapter {
  adaptation(name: string): string
}

// 继承组合实现
class EngineAdapter extends MyWorker implements Adapter {

  constructor(name) {
    super(name);
  }

  adaptation(name: string): string {
    return `引擎适配器对${name}进行适配`
  }
}

const engine = new EngineAdapter('MyWorker');
console.log(engine.adaptation('虚幻'));
console.log(engine.work())

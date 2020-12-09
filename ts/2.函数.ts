// ts中定义函数需要指定参数的类型与函数的返回值类型, 没有返回值则使用void
function tsMethod(a: number, b: string): void {
  console.log(`执行tsMethod函数${a}-${b}`)
}

tsMethod(25, 'Jane')

function tsMethod2(a: number, b: number): number {
  return a + b
}

console.log(tsMethod2(23, 56))

// 可选参数, 可传可不传, 可选参数需要放在最后一个
function tsMethod3(a: string, b?: number): void {
  console.log(`${a}==${b}`)
}

tsMethod3('Uint16Array', 2020)
tsMethod3('Int16Array')

// 默认参数, 同样需要放在最后一个
function tsMethod4(a: string, b: number = 9): void {
  console.log(`${a}++${b}`)
}

tsMethod4('dfff')
tsMethod4('dfff', 67)

// 剩余参数, 三点运算符, 接受传递传递过来的剩下的全部参数
function tsMethod5(...nums: number[]): number {
  return nums.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log(tsMethod5(1, 2, 4, 6, 14))

function tsMethod6(a: number, b: number, ...nums: number[]): number {
  return a + b + nums.reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(tsMethod6(1, 2, 4, 6, 14, 3))

// 函数重载, 和Java中的重载不同需要先定义重载函数的定义, 然后进行总的处理
function overload(a: number, b: string): string;
function overload(a: boolean): boolean;
function overload(a: number | boolean, b?: string): any {
  if (typeof a === 'number') {
    return b + a
  } else {
    return a
  }
}

console.log(overload(1, 's'))
console.log(overload(true))

const f = (a: number, b: string): any => {
  return a + b
}
console.log(f(2, '3'))

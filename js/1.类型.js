// ts中将类型分为number, string, boolean, array, any, null, undefined, never, tuple(元祖类型), enum
// ts中定义变量不想js中声明变量直接赋值, 需要指定变量的类型, 一旦变量指定了类型就只能赋予指定类型的值
const num = 2;
const str = 'abc';
const bool = true;
// 指定多个类型, 指定变量为多种可能的类型, 允许将变量赋值为这些指定的类型中的一个
let arg = 2;
arg = '2';
arg = true;
// 定义数组
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
// 元祖类型属于数组的一种, 指定数组中有多个类型额元素, 元素的个数必须与定义的类型数量一致, 顺序也要匹配
const arr3 = [1, 's', false];
// 枚举类型, 如果没有给枚举元素指定值并且前一个元素的值为number类型, 那么会以前一个元素的值+1作为当前元素的值
// 如果第一个元素没有指定则值默认为0
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
console.log(Color.red);
console.log(Color.blue);
console.log(Color.green);
var Result;
(function (Result) {
    Result[Result["success"] = 0] = "success";
    Result[Result["fail"] = 1] = "fail";
    Result[Result["unknown"] = 2] = "unknown";
})(Result || (Result = {}));
console.log(Result.success);
console.log(Result.fail);
console.log(Result.unknown);
// any表示任意类型, 声明为这个类型的变量可以赋值为任意类型的值
// 声明为null与undefined的变量只能使用null和undefined赋值

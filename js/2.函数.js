// ts中定义函数需要指定参数的类型与函数的返回值类型, 没有返回值则使用void
function tsMethod(a, b) {
    console.log(`执行tsMethod函数${a}-${b}`);
}
tsMethod(25, 'Jane');
function tsMethod2(a, b) {
    return a + b;
}
console.log(tsMethod2(23, 56));
// 可选参数, 可传可不传, 可选参数需要放在最后一个
function tsMethod3(a, b) {
    console.log(`${a}==${b}`);
}
tsMethod3('Uint16Array', 2020);
tsMethod3('Int16Array');
// 默认参数, 同样需要放在最后一个
function tsMethod4(a, b = 9) {
    console.log(`${a}++${b}`);
}
tsMethod4('dfff');
tsMethod4('dfff', 67);
// 剩余参数, 三点运算符, 接受传递传递过来的剩下的全部参数
function tsMethod5(...nums) {
    return nums.reduce((previousValue, currentValue) => previousValue + currentValue);
}
console.log(tsMethod5(1, 2, 4, 6, 14));
function tsMethod6(a, b, ...nums) {
    return a + b + nums.reduce((previousValue, currentValue) => previousValue + currentValue);
}
console.log(tsMethod6(1, 2, 4, 6, 14, 3));
function overload(a, b) {
    if (typeof a === 'number') {
        return b + a;
    }
    else {
        return a;
    }
}
console.log(overload(1, 's'));
console.log(overload(true));
const f = (a, b) => {
    return a + b;
};
console.log(f(2, '3'));

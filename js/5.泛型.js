// 泛型方法
function method1(value) {
    return value;
}
console.log(method1(1));
console.log(method1('abc'));
// 泛型类
class MinClass {
    constructor() {
        this.values = [];
    }
    add(value) {
        this.values.push(value);
    }
    min() {
        let min = this.values[0];
        for (let i = 1; i < this.values.length; i++) {
            if (this.values[i] < min) {
                min = this.values[i];
            }
        }
        return min;
    }
}
const minClass = new MinClass();
minClass.add(5);
minClass.add(3);
minClass.add(6);
minClass.add(7);
minClass.add(2);
console.log(minClass.min());
const minClass2 = new MinClass();
minClass2.add('a');
minClass2.add('b');
minClass2.add('c');
minClass2.add('e');
minClass2.add('f');
console.log(minClass2.min());
const method = function (name) {
    return name;
};
console.log(method(2));
console.log(method('abcd'));
function method2(name) {
    return name;
}
const method22 = method2;
console.log(method22('adsd'));

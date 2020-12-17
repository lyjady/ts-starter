// 装饰器可以用于修饰类、方法、属性与参数
// 用于动态扩展他们的功能, 装饰器本质就是一个方法
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器修饰在类上, param表示装饰的类对象(该方式不可传参)
// 如果返回一个类并且继承了target即被修饰的类, 那么返回的类将作为子类替换修饰的类
function Component(target) {
    console.log(this);
    console.log(target);
    // 为类的原型对象上挂载属性与方法
    target.prototype.race = '神族';
    target.prototype.action = () => {
        console.log('开始折越');
    };
    console.log('class 1');
    // return class extends target {
    //   type: string = '我重写了'
    //   attack(): void {
    //     console.log('重新集结舰队')
    //   }
    // }
}
// 返回一个方法的形式是装饰器工厂, 该方式可以传参param就是传的参数, 返回的高阶函数里面的参数就是非装饰器工厂时传的参数
// 如果返回值是修饰类的子类, 那么返回的那个类
function Service(param) {
    console.log('class 2');
    return (target) => {
        // 非装饰器工厂模式下传的是类对象, 那么target就表示类对象
        target.prototype.duty = param;
    };
}
// 属性装饰器
function Autowired(param) {
    console.log('field 1');
    return (target, attr) => {
        // param表示传入的参数
        // target表示如果是静态变量target表示类对象, 成员变量表示原型对象
        // attr表示变量的名称
        target[attr] = param;
    };
}
// 方法装饰器
function Injection(param) {
    console.log('method 1');
    return (target, methodName, desc) => {
        // param表示传入的参数
        // target表示如果是静态方法target表示类对象, 成员方法表示原型对象
        // methodName方法名称
        // desc表示方法的描述
        console.log(param);
        console.log(target);
        console.log(methodName);
        console.log(desc);
        // 修改当前方法
        const oMethod = desc.value;
        desc.value = () => {
            console.log('攻击前的准备');
            oMethod.apply(this);
            console.log('攻击后的收尾');
        };
    };
}
function Param(param) {
    console.log('param 1');
    return (target, methodName, index) => {
        // param表示传入的参数
        // target表示如果是静态方法target表示类对象, 成员方法表示原型对象
        // methodName方法名称
        // index表示参数的索引
        console.log(param);
        console.log(target);
        console.log(methodName);
        console.log(index);
        target.sd = '2323';
    };
}
let Protoss = class Protoss {
    attack() {
        console.log(`${this.type}发动了${this.skill}`);
    }
    static dead(time) {
        console.log('dead');
    }
};
__decorate([
    Autowired('default')
], Protoss.prototype, "type", void 0);
__decorate([
    Injection('injection')
], Protoss.prototype, "attack", null);
__decorate([
    __param(0, Param('cancel'))
], Protoss, "dead", null);
Protoss = __decorate([
    Component,
    Service('光复艾尔')
], Protoss);
const protoss = new Protoss();
protoss.type = '黑暗圣堂武士';
protoss.skill = '暗影潜行';
console.log(Protoss.sd);
protoss.attack();
console.log(protoss);
// 他们的执行顺序是属性 -> 方法 -> 参数 -> 类(如果一个类型上有多个装饰器按照从下往上的顺序执行)

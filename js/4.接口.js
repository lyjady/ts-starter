// 该方法的入参定义为Fullname类型, 那么传入的参数必须和接口中定义的一致, 不一致会编译错误
function showYourName(name) {
    console.log(`${name.firstName} - ${name.secondName}`);
}
showYourName({ firstName: '乔治', secondName: '华盛顿' });
const md = function (value) {
    return `解密: ${value}`;
};
console.log(md('密文'));
const arr = ['1', '2', '3', '4', '5'];
const obj = { name: '1' };
class MyWorker {
    constructor(name) {
        this.name = name;
    }
    work() {
        return `${this.name}开始工作`;
    }
}
// 继承组合实现
class EngineAdapter extends MyWorker {
    constructor(name) {
        super(name);
    }
    adaptation(name) {
        return `引擎适配器对${name}进行适配`;
    }
}
const engine = new EngineAdapter('MyWorker');
console.log(engine.adaptation('虚幻'));
console.log(engine.work());

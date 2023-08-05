/*
// let声明变量，const声明常量
// 常量：一旦声明，不可修改
let variable = 10
const constant = 20
variable = 20
constant = 30 // webstorm会报错
console.log(variable); // 20
console.log(chang); // 30
*/

// 数字number、字符串string、布尔bool、符号symbol、空 ndefined、空null、对象object

// 字符串
let userName = '张三'
let phoneNumber = '12345678901'
console.log(userName.length); // 2
console.log(userName[0]); // 张
console.log(phoneNumber); // 12345678901
// 通过substring截取字符串
console.log(phoneNumber.substring(7, 11)); // 8901


// 数字
let num1 = 10 // 整数
let num2 = 0.1 // 小数
let num3 = 1e10 // 科学计数法
let num4 = 0b1010 // 二进制
let num5 = Infinity // 无穷大
let num6 = NaN // 非数字
let n1 = '你好'-1 // NaN
let n2 = 0/0 // NaN
console.log(n1)
console.log(n2)
console.log(Number.MAX_VALUE); // 最大值
console.log(0.1+0.2); // js数字精度问题
// 字符串转数字
let phoneNum = Number(phoneNumber)
console.log(phoneNum);
// 数字运算
let add = num1 + num2
let sub = num1 - num2
let mul = num1 * num2
let div = num1 / num2
let mod = num1 % num2
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);


// 布尔型
// 布尔型只有两个值：true和false
let flag1 = true
console.log(flag1) // true
let flag2 = false
console.log(flag2) // false
// js中定义了五个false值，即相当于false的值
// 0、NaN、undefined、null、''
if(!undefined){
    console.log('undefined为false值'); // undefined为false值
}

if(!NaN){
    console.log('NaN为false值'); // NaN为false值
}

if(!null){
    console.log('null为false值'); // null为false值
}

if(!0){
    console.log('0为false值'); // 0为false值
}

if(!''){
    console.log('""为false值'); // ""为false值
}



// 符号 symbol
// 符号是ES6新增的数据类型
// 符号的作用是防止对象属性名冲突



// 未定义 undefined（控制台里面显示灰色）
let a
console.log(a) // undefined


// 空对象 null
let b = null
console.log(b) // null


// 对象——键值对的集合
// 常用于描述一个事物
let user = {
    name: '张三',
    age: 18,
    hobby: ['吃饭', '睡觉', '打豆豆'],
    address: {
        city: '北京',
        street: '天安门'
    }
}
// 对象的操作
// 1.获取对象中的属性
// 通过.获取属性 能够获取到对象中的属性或方法
const name = user.name
console.log(name); // 张三
// .一个不存在的属性，会返回undefined
console.log(user.money); // undefined
// 通过[]获取属性
console.log(user['name']); // 张三
// 获取对象的所有的key值
console.log(Object.keys(user)); // [ 'name', 'age', 'hobby', 'address' ]

// 2.修改对象中的属性
// 通过“对象名.属性名=新值”修改对象中的属性
user.name = '李四'
console.log(user.name); // 李四

// 3.添加对象中的属性
// 通过“对象名.属性名=值”添加对象中的属性
user.money = 100
console.log(user.money); // 100

// 4.删除对象中的属性
// 通过“delete 对象名.属性名”删除对象中的属性
// 删除key会连同value一起删除
delete user.money
console.log(user.money); // undefined


// 原型
// 原型是一个对象，每个对象都有原型
// 原型的作用是共享方法
// 原型的本质是一个对象
let obj = {
    a: 1,
}

console.log(obj);

// 打印一个没有定义的属性
console.log(obj.toString);

// 
console.log(obj.__proto__);

// hasOwnProperty()方法用来检测一个对象是否含有特定的自身属性
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('toString')); // false
// in运算符用来检测一个对象是否含有某个属性 
console.log('toString' in obj); // true

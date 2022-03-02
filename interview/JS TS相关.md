## 1. 介绍一下原型和原型链
- 原型是一个对象变量——是定义函数由 JS 自动分配到 函数对象空间一个名字叫 prototype 的对象变量，它指向的对象空间叫原型对象空间
- 原型链——从函数对象空间 或 函数创建出来的实例对象会都默认有一个__proto__属性 [[prototype]]， 当使用函数对象空间  或  函数创建出来的实例对象 中不存在的属性和方法时，对象会通过__proto__向上查找它继承的原型，如果找到就停下来输出，没有找到，再通过__proto__向上查找，一直找到Object.prototype 中的之后，如果还没有找到，再继续沿着Object.prototype中的__proto__查找，但此时已经为null，这样由多个__proto__形成一条有终点的查找链条就称为原型链

## 2. __proto__ vs prototype
- The `__proto__` is an object within every object that points out (references) the prototype that has been set for that object. `__proto__` is the actual object that is used in the lookup chain to resolve methods, etc.  
- The prototype property is only present for functions and is a property that’s set only if you’re using the ‘new’ keyword when creating objects with this (constructor) function.

- **Example**
```
// Method 1: We'll define a constructor functoin and create an object using the new keyword. Then, we'll create another object and see how we can access its peoperties using the first object
function Person (name, age) {
	this.name = name;
	this.age = age;
}

var person1 = new Person ("Mark", 25) // defined an object called person1 using the Person constructor function above
var person2 = {nationality: "Australian"} // defines a simple object literal with a nationality key
// Now to let person1 access person2's nationality, we can use the same setPrototypeOf method:
Object.setPrototypeOf(person1, person2) // same as the cat and dog example above
person1.nationality // returns 'Australian' as expected

// Method 2: If we do the same thing but instead, we set the prototype of the constructor function to person2's prototype, we can now only access it via the constructor object:
var person1 = new Person ("Mark", 25)
var person2 = {nationality: "Australian"}
Object.setPrototypeOf(Person, person2) // we've replaced person1 with Person

person1.nationality // returns 'undefined', because person1 can access person2's properties only via the constructor object, as follows:
person1.constructor.nationality // returns "Australian"
person1.__proto__ === person1.constructor.prototype //returns "true"
```
- **it’s not person one that has access to the prototype property of Person, but rather, it’s constructor (function).**
- person1.hasOwnProperty(‘prototype’) // returns false
- person1.constructor.hasOwnProperty(‘prototype’) // returns true

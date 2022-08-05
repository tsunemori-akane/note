/* super作为对象调用
** 在子类的原型方法中调用，super指向父类的原型，this指向子类的实例(先找实例，再找原型，再找父类)
** 在子类的静态方法中调用，super指向父类的构造函数，this指向子类的构造函数
*/
class Foo {
    x = 'X' //父类实例
    
    m() {
        console.log(this.o)
        console.log("Foo m")
    }
    o() {
        console.log("父类 O")
    }
    static n() {
        console.log(this)
        console.log("Foo n")
    }
}
Foo.prototype.x = 'XXXX'

class Bar extends Foo {
    constructor() {
        // super 作为函数调用 (仅能在构造方法中)
        super()
        //this.o = 'bar o'
        this.x = 2
        super.x = 3 //赋值 this 指向子类
        console.log(super.x) // 相当于获取Foo.prototype.x = undefined
        console.log(this.x) // 3
    }
    //原型方法
    m() {
        super.m()
    }
    o() {
        console.log("原型O")
    }
    //静态方法
    static n() {
        super.n()
    }
}

const bar = new Bar()
console.log('************')
bar.o()
bar.m()
Bar.n()

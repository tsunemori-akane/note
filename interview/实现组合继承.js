function Super(){
    this.a = [1,2,3]
}

Super.prototype.say = function() {
    console.log('hello')
}

function Sub() {
    Super.call(this)
}

Sub.prototype = new Super()

var sub1 = new Sub()
var sub2 = new Sub()

sub1.a.push(4)
console.log(sub1.a)
console.log(sub2.a)
sub1.say()

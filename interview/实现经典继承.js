function Super(){
    this.a = [1,2,3]
}

Super.prototype.say = function() {
    console.log('hello')
}

function Sub() {
    Super.call(this)
}

//Sub.prototype = new Super()
if(!Object.create()) {
  //兼容方案
  Object.create = function(proto) {
    function F(){}
    F.prototype = proto
    return new F()
  }
}
Sub.prototype = Object.create(Super.prototype)

var sub1 = new Sub()
var sub2 = new Sub()

sub1.a.push(4)
console.log(sub1.a)
console.log(sub2.a)
sub1.say()

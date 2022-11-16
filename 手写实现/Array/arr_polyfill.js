/**
 * 数组方法polyfill
 * 扁平化操作
 */

Array.prototype.myForEach = function(fn) {
  if(typeof fn !== "function") throw new Error("参数错误");
  const len = this.length;
  for(let i = 0; i < len; i++) {
    fn.call(this, this[i], i);
  }
}

//使用myForEach
// const oldArr = [1, 2, 3, 4, 5];

// oldArr.myForEach((item, index) => {
//   console.log(item, index);
// });

Array.prototype.myFilter = function(cb) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    if(cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

//使用myFilter
// const arr = [1, 2, 3, 4, 5];

// let newArr = arr.myFilter(item => item > 3);
// console.log(newArr);

Array.prototype.myMap = function(cb) {
  const newArr = [];
  for(let i = 0; i < this.length; i++) {
    const newItem = cb(this[i]);
    newArr.push(newItem);
  }
}

Array.prototype.myReduce = function(reducer, initialValue) {
  let previous = initialValue;
  for(let i = 0; i < this.length; i++) {  
    if(previous) {
      previous = reducer(previous, this[i], i, this);
    } else {
      previous = reducer(this[i], this[i+1], i, this);
      i++;
    }
  }
  return previous;
}
//使用myReduce
// const arr = [1, 2, 3, 4, 5,6];

// const val = arr.myReduce((pre, cur)=> pre + cur);
// console.log(val);

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true // 只要有一个元素符合
    }
  }
  return false
}

// every 实现原理
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false // 有一个元素错误即失败
    }
  }
  return true
}

// splice 实现
Array.prototype.mySplice = function(start, deleteCount, ...args) {
  if(start < 0) {
    if(Math.abs(start) > this.length) {
      start = 0
    } else {
      start += this.length
    }
  }

  if (typeof deleteCount === 'undefined') {
    deleteCount = this.length - start
  }

  const delArr = this.slice(start, start+deleteCount);
  const right = this.slice(start+deleteCount);
  let addIndex = start
  args.concat(right).forEach((item) => {
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex
  return delArr;
}

// let arr = [1,3,5,7,9]
// arr.mySplice(1, 2, 0, 0, 0)
// console.log(arr);

//flatten array
function flatten(arr) {
  return arr.reduce((pre, cur) => 
    Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur)
  , [])
}

// const arr = [[[[[7, 6, 5], 4], 3], 2], 1];
// console.log(flatten(arr));


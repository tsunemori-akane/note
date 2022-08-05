function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        console.log('cloneTarget:', cloneTarget)
        return cloneTarget;
    } else {
        console.log('target:', target)
        return target;
    }
};

const t = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
t.target = t;

var c = clone(t)
//console.log(c)

/*
target: 1
target: undefined
target: child
cloneTarget: {child: 'child'}
target: 2
target: 4
target: 8
cloneTarget: (3) [2, 4, 8]
cloneTarget: {field1: 1, field2: undefined, field3: {…}, field4: Array(3), target: {…}}
*/

// 作者：ConardLi
// 链接：https://juejin.cn/post/6844903929705136141

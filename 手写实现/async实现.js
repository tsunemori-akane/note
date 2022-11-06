// 请参考co库的实现

const {readFile} = require('fs/promises')
const path = require('path')
const classFile = path.join(__dirname,"name.txt")

function  * read() {
    // let filepath = yield readFile(classFile, 'utf8')
    return yield readFile(classFile, 'utf8')
}

function co(it) {
    return new Promise((resolve, reject) => {
        let next = function(data) {
            console.log('data:', data)
            let {value, done} = it.next(data)
            if(done) {
                console.log('value_done:', value)
                resolve(value)
            } else {
                console.log('value:', value)
                Promise.resolve(value).then(res => {
                    console.log('res:', res)
                    next(res)
                })
            }
        }
        next()
        
    })
}

let res = co(read())
res.then(res => {
    console.log('end:', res)
})

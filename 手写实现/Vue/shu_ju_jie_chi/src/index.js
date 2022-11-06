import Vue from 'vue'


let vm = new Vue({
    el: '#app',
    data() {
        return {
            title:'学生列表',
            classNum: 1,
            total: 2,
            teacher: ['zhangsan', 'lisi'],
            students: [
                {
                    id: 1,
                    name: 'xiaohong'
                },
                {
                    id: 2,
                    name: 'xiaoming'
                }
            ]
        }
    }
})
console.log(vm)
console.log(vm.teacher.push('wangwu'))
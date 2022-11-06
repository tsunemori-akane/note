function proxyData(vm, target, key) {
    Object.defineProperty(vm, key, {
        get() {
            //this.xx -> vm.xx -> vm._data.xx
            return vm[target][key];
        },
        set(newValue) {
            vm[target][key] = newValue
        }
    })
}

export default proxyData;
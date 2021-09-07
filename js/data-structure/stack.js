function stack() {
    const prop = stack.prototype
    prop.stack = []
    return prop
}


stack.prototype.push = function (val) {
    this.stack.push(val)
}

stack.prototype.isEmpty = function () {
    return !this.stack.length
}

stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1]
}

stack.prototype.pop = function () {
    if (this.isEmpty()) {
        return false
    }
    return this.stack.pop()
}

const s = stack()
s.push(5)
s.push(56)
s.push(59)
s.pop()
console.log(s.peek());
function Queue() {
    this.queue = []
}

Queue.prototype.enqueue = function (value) {
    this.queue.push(value)
}

Queue.prototype.dequeue = function () {
    return this.queue.shift()
}

Queue.prototype.peek = function () {
    if (this.isEmpty()) return false
    return this.queue[0]
}

Queue.prototype.isEmpty = function () {
    return !this.queue.length
}

const q = new Queue()
q.enqueue(5)
q.enqueue(56)
q.enqueue(59)
q.dequeue()
console.log(q.peek());
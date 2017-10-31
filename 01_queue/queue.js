function Queue(){
    this.arr = [];
    this.front = 0;
    this.len = 0;
    this.arrSize = 0;
}

Queue.prototype.enqueue = function(elem){
    this.arr[this.arrSize] = elem;
    this.arrSize++;
    this.len++;
};

Queue.prototype.dequeue = function(){
    if (this.len === 0) {
        return undefined;
    }

        var el = this.arr[this.front];
        this.front++;
        this.len--; // decrease size
        return el;

};

Queue.prototype.size = function(){
    return this.len;
};
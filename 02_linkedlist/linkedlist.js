function LinkedList(){

    this.head = null;
    this.tail = null;

    this.addToTail = function (val){
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            var oldTail = this.tail;
            oldTail.next = node;
            node.previous = oldTail;
            this.tail = node;
        }
    };

    this.addToHead = function(val){
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            var oldHead = this.head;
            node.next = oldHead;
            oldHead.previous = node;
            this.head = node;
        }
    }

    this.removeHead = function(){
        var oldHead = this.head;
        if (!this.head) {
            return undefined;
        } else if (oldHead.next === null){
            this.head = null;
            this.tail = null;
            return oldHead.value;
        }
        var oldHeadVal = oldHead.value;
        var newHead = oldHead.next;
        newHead.previous = null;
        this.head = newHead;
        return oldHeadVal;
    };

    this.removeTail = function() {
        var oldTail = this.tail;
        if (!oldTail) {
            return undefined;
        } else if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
            return oldTail.value;
        }
        var oldTailVal = oldTail.value;
        var newTail = oldTail.previous;
        newTail.next = null;
        this.tail = newTail;
        return oldTailVal;
    }

    this.search = function(val){
        var currentNode = this.head;
        while (currentNode.value !== val){
            if (currentNode === this.tail && currentNode.value !== val){
                return null;
            }
            if (currentNode.value === val){
                return val;
            }else{
                currentNode = currentNode.next;
            }
        }
    };
}

function Node (val) {
    this.value = val;
    this.next = null;
    this.previous = null;
}
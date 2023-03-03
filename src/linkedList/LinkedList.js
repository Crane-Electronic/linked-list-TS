"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0;
    }
    /**
     * Returns the head of the list
     * @constructor
     */
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    /**
     * Returns the tail of the list
     * @constructor
     */
    LinkedList.prototype.getTail = function () {
        return this.tail;
    };
    /**
     * Returns the current node
     * @constructor
     */
    LinkedList.prototype.getCurrent = function () {
        return this.current;
    };
    /**
     *  Returns the length of the list
     * @constructor
     */
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    /**
     * Adds a new node to the end of the list
     * @param value
     */
    LinkedList.prototype.push = function (value) {
        var newNode = new Node_1.Node(value, this);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        }
        else if (this.tail != null) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    };
    /**
     * Removes the last node from the list
     */
    LinkedList.prototype.pop = function () {
        if (this.tail == null) {
            return;
        }
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.current = null;
        }
        else if (this.tail.prev != null) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    };
    /**
     * Removes the first node from the list
     */
    LinkedList.prototype.shift = function () {
        if (this.head == null) {
            return;
        }
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.current = null;
        }
        else if (this.head.next != null) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
    };
    /**
     * Adds a new node to the beginning of the list
     * @param value
     */
    LinkedList.prototype.unshift = function (value) {
        var newNode = new Node_1.Node(value, this);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    };
    /**
     * Adds a new node to the list at the specified index
     * @param value
     * @param index
     */
    LinkedList.prototype.insertAtIndex = function (value, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        else if (index == 0) {
            this.unshift(value);
        }
        else if (index == this.length) {
            this.push(value);
        }
        else {
            var newNode = new Node_1.Node(value, this);
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return;
                currentNode = currentNode.next;
            }
            if (currentNode == null || currentNode.prev == null)
                return;
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            this.length++;
        }
    };
    /**
     * Removes a node from the list at the specified index
     * @param index
     */
    LinkedList.prototype.removeAtIndex = function (index) {
        if (index < 0 || index > this.length) {
            return;
        }
        else if (index == 0) {
            this.shift();
        }
        else if (index == this.length) {
            this.pop();
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null) {
                    return;
                }
                currentNode = currentNode.next;
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.prev) == null || (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) == null)
                    return;
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }
            this.length--;
        }
    };
    /**
     * Returns the node at the specified index
     * @param index
     */
    LinkedList.prototype.getAtIndex = function (index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return null;
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    };
    /**
     * Sets the value of the node at the specified index
     * @param value
     * @param index
     * @constructor
     */
    LinkedList.prototype.setAtIndex = function (value, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index == 0) {
            if (this.head != null)
                this.head.value = value;
            else {
                this.head = new Node_1.Node(value, this);
                this.tail = this.head;
                this.current = this.head;
            }
        }
        else if (index == this.length) {
            if (this.tail != null)
                this.tail.value = value;
            else {
                this.tail = new Node_1.Node(value, this);
                this.head = this.tail;
                this.current = this.tail;
            }
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return;
                currentNode = currentNode.next;
            }
            if (currentNode == null)
                return;
            currentNode.value = value;
        }
    };
    /**
     * Swaps the value of the node at the specified index with the value of the node at the index above it
     * @param index
     */
    LinkedList.prototype.swapUp = function (index) {
        if (index < 0 || index > this.length) {
            return;
        }
        else if (index == 0) {
            return;
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return;
                currentNode = currentNode.next;
            }
            if (currentNode == null || currentNode.prev == null)
                return;
            var temp = currentNode.prev.value;
            currentNode.prev.value = currentNode.value;
            currentNode.value = temp;
        }
    };
    /**
     * Swaps the value of the node at the specified index with the value of the node at the index below it
     * @param index
     */
    LinkedList.prototype.swapDown = function (index) {
        if (index < 0 || index > this.length) {
            return;
        }
        else if (index == this.length) {
            return;
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return;
                currentNode = currentNode.next;
            }
            if (currentNode == null || currentNode.next == null)
                return;
            var temp = currentNode.next.value;
            currentNode.next.value = currentNode.value;
            currentNode.value = temp;
        }
    };
    /**
     * Reverses the list
     */
    LinkedList.prototype.reverse = function () {
        if (this.head == null || this.head == this.tail) {
            return;
        }
        else {
            var currentNode = this.head;
            var tempNode = null;
            while (currentNode != null) {
                tempNode = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = tempNode;
                currentNode = currentNode.prev;
            }
            this.tail = this.head;
            if (tempNode != null)
                this.head = tempNode.prev;
        }
    };
    /**
     * Sets the current node to the node at the specified index
     * @param index
     * @constructor
     */
    LinkedList.prototype.setCurrent = function (index) {
        if (index < 0 || index > this.length) {
            return;
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                if (currentNode == null)
                    return;
                currentNode = currentNode.next;
            }
            if (currentNode == null)
                return;
            this.current = currentNode;
        }
    };
    /**
     * Sets the current node to the next node in the list
     */
    LinkedList.prototype.next = function () {
        if (this.current == null)
            return;
        if (this.current.next == null)
            return;
        this.current = this.current.next;
    };
    /**
     * Sets the current node to the previous node in the list
     */
    LinkedList.prototype.previous = function () {
        if (this.current == null)
            return;
        if (this.current.prev == null)
            return;
        this.current = this.current.prev;
    };
    /**
     * Returns list values as an array
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Returns list values as a string
     */
    LinkedList.prototype.toString = function () {
        var string = "";
        var currentNode = this.head;
        while (currentNode != null) {
            string += JSON.stringify(currentNode.value) + " ";
            currentNode = currentNode.next;
        }
        return string;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value, List) {
        this.value = value;
        this.List = List;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
exports.Node = Node;

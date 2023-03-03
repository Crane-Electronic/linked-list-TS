import {LinkedList} from "./LinkedList";
class Node{
    public value: object;
    public next: Node |  null;
    public prev: Node | null;
    public List: LinkedList;

    constructor(value: object, List: LinkedList){
        this.value = value;
        this.List = List;
        this.next = null;
        this.prev = null;
    }
}

export {Node}

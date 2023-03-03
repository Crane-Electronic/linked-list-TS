import { LinkedList } from "../src";

describe('LinkedList()', () => {
  test('When LinkedList() -> should create empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList).toBeDefined();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.current).toBeNull();
    expect(linkedList.length).toBe(0);
  });

});

describe('GetHead()', () => {
    test('When GetHead() -> should return null if list is empty', () => {
        const linkedList = new LinkedList();

        expect(linkedList.getHead()).toBeNull();
    });

    test('When GetHead() -> should return head of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        expect(linkedList.getHead()?.value).toEqual({ value: 1, key: 'One' });
    });
});

describe('GetTail()', () => {
    test('When GetTail() -> should return null if list is empty', () => {
        const linkedList = new LinkedList();

        expect(linkedList.getTail()).toBeNull();
    });

    test('When GetTail() -> should return tail of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        expect(linkedList.getTail()?.value).toEqual({ value: 5, key: 'Five' });
    });
});

describe('GetCurrent()', () => {
    test('When GetCurrent() -> should return null if list is empty', () => {
        const linkedList = new LinkedList();

        expect(linkedList.getCurrent()).toBeNull();
    });

    test('When GetCurrent() -> Initial returns head', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        expect(linkedList.getCurrent()?.value).toEqual({ value: 1, key: 'One' });
    });

    test('When GetCurrent() & next() -> should return current node of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        linkedList.next();

        expect(linkedList.getCurrent()?.value).toEqual({ value: 2, key: 'Two' });
    });

    test('When GetCurrent() & next() x4 -> should return current node of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        linkedList.next();
        linkedList.next();
        linkedList.next();
        linkedList.next();

        expect(linkedList.getCurrent()?.value).toEqual({ value: 5, key: 'Five' });
    });

    test('When GetCurrent() & setCurrent() -> should return current node of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        linkedList.setCurrent(3);

        expect(linkedList.getCurrent()?.value).toEqual({ value: 4, key: 'Four' });
    });
})

describe('GetLength()', () => {
    test('When GetLength() -> should return 0 if list is empty', () => {
        const linkedList = new LinkedList();

        expect(linkedList.getLength()).toBe(0);
    });

    test('When GetLength() -> should return length of the list', () => {
        const linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });

        expect(linkedList.getLength()).toBe(5);
    });
});

describe('Push()', () => {

  test('when Push() -> should add nodes to the list', () => {
    const linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });

    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
    expect(linkedList.current).toBeDefined();
    expect(linkedList.length).toBe(5);
  });

});

describe('Pop()', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('When Pop() -> should remove last node from list', () => {
    linkedList.pop();

    expect(linkedList.length).toBe(4);
    expect(linkedList.tail?.value).toEqual({ value: 4, key: 'Four' });
  });

  test('When Pop() -> should do nothing if list is empty', () => {
    linkedList = new LinkedList();
    linkedList.pop();

    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.current).toBeNull();
  });

  test('When Pop() & 1 Node -> Set all to null', () => {
      linkedList = new LinkedList();

      linkedList.push({ value: 1, key: 'One' });
      linkedList.pop();

      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.current).toBeNull();
  });

});

describe('Shift()', () => {

  let linkedList = new LinkedList();
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('When Shift() -> should remove first node from list', () => {
    linkedList.shift();

    expect(linkedList.length).toBe(4);
    expect(linkedList.head?.value).toEqual({ value: 2, key: 'Two' });
  });

  test('When Shift() -> should do nothing if list is empty', () => {
    linkedList = new LinkedList();
    linkedList.shift();

    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.current).toBeNull();
    });

    test('When Shift() & 1 Node -> Set all to null', () => {
        linkedList = new LinkedList();

        linkedList.push({ value: 1, key: 'One' });
        linkedList.shift();

        expect(linkedList.length).toBe(0);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
        expect(linkedList.current).toBeNull();
    });
});

describe('Unshift()', () => {

  test('When Unshift() -> should add node to the beginning of the list', () => {
    const linkedList = new LinkedList();
    linkedList.unshift({ value: 1, key: 'One' });
    linkedList.unshift({ value: 2, key: 'Two' });
    linkedList.unshift({ value: 3, key: 'Three' });
    linkedList.unshift({ value: 4, key: 'Four' });
    linkedList.unshift({ value: 5, key: 'Five' });

    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
    expect(linkedList.current).toBeDefined();
    expect(linkedList.length).toBe(5);
    expect(linkedList.head?.value).toEqual({ value: 5, key: 'Five' });
    expect(linkedList.tail?.value).toEqual({ value: 1, key: 'One' });
  });
});

describe('InsertAtIndex(n)', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('If n = 0 -> Insert as new head', () => {
    linkedList.insertAtIndex({ value: 10, key: 'test' }, 0);

    expect(linkedList.length).toBe(6);
    expect(linkedList.head?.value).toEqual({ value: 10, key: 'test' });
    expect(linkedList.getAtIndex(0)?.value).toEqual({ value: 10, key: 'test' });
  });

  test('When 0 < n > list length -> insert node at n', () => {
    linkedList.insertAtIndex({ value: 10, key: 'test' }, 2);

    expect(linkedList.length).toBe(6);
    expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 10, key: 'test' });
  });

  test('When n = list length -> Insert as new tail ', () => {
    linkedList.insertAtIndex({ value: 10, key: 'test' }, 5);

    expect(linkedList.length).toBe(6);
    expect(linkedList.tail?.value).toEqual({ value: 10, key: 'test' });
    expect(linkedList.getAtIndex(5)?.value).toEqual({ value: 10, key: 'test' });
  });

   test('When n > list length -> Do nothing ', () => {
       linkedList.insertAtIndex({ value: 10, key: 'test' }, 10);

       expect(linkedList.length).toBe(5);
   });

});

describe('RemoveAtIndex(n)', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('When n < List Length -> should delete node at n', () => {
    linkedList.removeAtIndex(2);

    expect(linkedList.length).toBe(4);
    expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 5, key: 'Five' });
  });

  test('When n = 0 -> should delete head node, n+1 should be new head', () => {
    linkedList.removeAtIndex(0);

    expect(linkedList.length).toBe(4);
    expect(linkedList.head?.value).toEqual({ value: 2, key: 'Two' });
    expect(linkedList.getAtIndex(0)?.value).toEqual({ value: 2, key: 'Two' });
  });

  test('When n = list length -> Should delete Tail, n-1 becomes new tail', () => {
      expect(linkedList.length).toBe(5);
    linkedList.removeAtIndex(5);

    expect(linkedList.length).toBe(4);
    expect(linkedList.tail?.value).toEqual({ value: 4, key: 'Four' });
    expect(linkedList.getAtIndex(3)?.value).toEqual({ value: 4, key: 'Four' });
  });

  test('When n is out of bounds -> should not delete anything', () => {
    linkedList.removeAtIndex(10);

    expect(linkedList.length).toBe(5);
  });

});

describe('GetAtIndex(n)', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('When n < list length -> should return node at position n', () => {

    const node = linkedList.getAtIndex(2);
    expect(node).toBeDefined();
    expect(node).not.toBeNull();
    expect(node?.value).toEqual({ value: 3, key: 'Three' });
  });

  test('When N out of bounds -> should return null if node by index is not found', () => {
    const node = linkedList.getAtIndex(10);
    expect(node).toBeNull();
  });

});

describe('SetAtIndex(n)', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('When n < list length -> should set node at position n', () => {
    linkedList.setAtIndex({ value: 10, key: 'test' }, 2);

    expect(linkedList.length).toBe(5);
    expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 10, key: 'test' });
  });

  test('When n = 0 -> should set head node', () => {
    linkedList.setAtIndex({ value: 10, key: 'test' }, 0);

    expect(linkedList.length).toBe(5);
    expect(linkedList.head?.value).toEqual({ value: 10, key: 'test' });
    expect(linkedList.getAtIndex(0)?.value).toEqual({ value: 10, key: 'test' });
  });

  test('When n = list length -> should set tail node', () => {
    linkedList.setAtIndex({ value: 10, key: 'test' }, 5);

    expect(linkedList.length).toBe(5);
    expect(linkedList.tail?.value).toEqual({ value: 10, key: 'test' });
    expect(linkedList.getAtIndex(4)?.value).toEqual({ value: 10, key: 'test' });
  });

  test('When n is out of bounds -> should not set anything', () => {
    linkedList.setAtIndex({ value: 10, key: 'test' }, 10);

    expect(linkedList.length).toBe(5);
    expect(linkedList.getAtIndex(10)).toBeNull();
  });

});

describe('swapUp()', () => {

    let linkedList = new LinkedList();

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });
    });

    test('When n < list length -> should swap node at position n with node at n-1', () => {
        linkedList.swapUp(2);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(1)?.value).toEqual({ value: 3, key: 'Three' });
        expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 2, key: 'Two' });
    });

    test('When n = 0 -> should not swap anything', () => {
        linkedList.swapUp(0);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(0)?.value).toEqual({ value: 1, key: 'One' });
    });

    test('When n = list length -> should not swap anything', () => {
        linkedList.swapUp(5);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(4)?.value).toEqual({ value: 5, key: 'Five' });
    });

    test('When n is out of bounds -> should not swap anything', () => {
        linkedList.swapUp(10);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(10)).toBeNull();
    });

});

describe('swapDown()', () => {

    let linkedList = new LinkedList();

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });
    });

    test('When n < list length -> should swap node at position n with node at n+1', () => {
        linkedList.swapDown(2);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 4, key: 'Four' });
        expect(linkedList.getAtIndex(3)?.value).toEqual({ value: 3, key: 'Three' });
    });

    test('When n = list length -> should not swap anything', () => {
        linkedList.swapDown(5);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(4)?.value).toEqual({ value: 5, key: 'Five' });
    });

    test('When n is out of bounds -> should not swap anything', () => {
        linkedList.swapDown(10);

        expect(linkedList.length).toBe(5);
        expect(linkedList.getAtIndex(10)).toBeNull();
    });
})

describe('Reverse()', () => {

  let linkedList = new LinkedList();

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push({ value: 1, key: 'One' });
    linkedList.push({ value: 2, key: 'Two' });
    linkedList.push({ value: 3, key: 'Three' });
    linkedList.push({ value: 4, key: 'Four' });
    linkedList.push({ value: 5, key: 'Five' });
  });

  test('reverse() -> Should reverse the list', () => {
    linkedList.reverse();

    expect(linkedList.length).toBe(5);
    expect(linkedList.head?.value).toEqual({ value: 5, key: 'Five' });
    expect(linkedList.tail?.value).toEqual({ value: 1, key: 'One' });
    expect(linkedList.getAtIndex(0)?.value).toEqual({ value: 5, key: 'Five' });
    expect(linkedList.getAtIndex(1)?.value).toEqual({ value: 4, key: 'Four' });
    expect(linkedList.getAtIndex(2)?.value).toEqual({ value: 3, key: 'Three' });
    expect(linkedList.getAtIndex(3)?.value).toEqual({ value: 2, key: 'Two' });
    expect(linkedList.getAtIndex(4)?.value).toEqual({ value: 1, key: 'One' });
  });

})

describe('setCurrent()', () => {

    let linkedList = new LinkedList();

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push({ value: 1, key: 'One' });
        linkedList.push({ value: 2, key: 'Two' });
        linkedList.push({ value: 3, key: 'Three' });
        linkedList.push({ value: 4, key: 'Four' });
        linkedList.push({ value: 5, key: 'Five' });
    });

    test('LinkedList -> Should have default current node of head', () => {
      expect(linkedList.current?.value).toEqual({ value: 1, key: 'One' });
    });

    test('setCurrent(n) -> Should set current to List[n]', () => {
      linkedList.setCurrent(0);

      expect(linkedList.current?.value).toEqual({ value: 1, key: 'One' });
    });

    test('setCurrent(n) -> Should set current to List[n]', () => {
      linkedList.setCurrent(2);

      expect(linkedList.current?.value).toEqual({ value: 3, key: 'Three' });
    });

    test('setCurrent(OutOfBounds) -> Should do nothing', () => {
      linkedList.setCurrent(10);

      expect(linkedList.current?.value).toEqual({ value: 1, key: 'One' });
    });

    test('setCurrent(OutOfBounds) -> Should do nothing', () => {
      linkedList.setCurrent(-1);

      expect(linkedList.current?.value).toEqual({ value: 1, key: 'One' });
    });

    test('setCurrent(OutOfBounds) -> Should do nothing', () => {
      linkedList.setCurrent(3);
      linkedList.setCurrent(10);

      expect(linkedList.current?.value).toEqual({ value: 4, key: 'Four' });
    });
});

describe('next()', () => {

        let linkedList = new LinkedList();

        beforeEach(() => {
            linkedList = new LinkedList();
            linkedList.push({ value: 1, key: 'One' });
            linkedList.push({ value: 2, key: 'Two' });
            linkedList.push({ value: 3, key: 'Three' });
            linkedList.push({ value: 4, key: 'Four' });
            linkedList.push({ value: 5, key: 'Five' });
        });

        test('next() -> Should set current to next node', () => {
        linkedList.setCurrent(0);
        linkedList.next();

        expect(linkedList.current?.value).toEqual({ value: 2, key: 'Two' });
        });

        test('next() -> Should set current to next node', () => {
        linkedList.setCurrent(2);
        linkedList.next();

        expect(linkedList.current?.value).toEqual({ value: 4, key: 'Four' });
        });

        test('next() -> Should set current to next node', () => {
        linkedList.setCurrent(4);
        linkedList.next();

        expect(linkedList.current?.value).toEqual({ value: 5, key: 'Five' });
        });

        test('next() -> Should set current to next node', () => {
        linkedList.setCurrent(4);
        linkedList.next();
        linkedList.next();

        expect(linkedList.current?.value).toEqual({ value: 5, key: 'Five' });
        });
});

describe('previous()', () => {

        let linkedList = new LinkedList();

        beforeEach(() => {
            linkedList = new LinkedList();
            linkedList.push({ value: 1, key: 'One' });
            linkedList.push({ value: 2, key: 'Two' });
            linkedList.push({ value: 3, key: 'Three' });
            linkedList.push({ value: 4, key: 'Four' });
            linkedList.push({ value: 5, key: 'Five' });
        });

        test('previous() & no previous -> Should do nothing', () => {
        linkedList.setCurrent(0);
        linkedList.previous();

        expect(linkedList.current?.value).toEqual({ value: 1, key: 'One' });
        });

        test('previous() -> Should set current to previous node', () => {
        linkedList.setCurrent(2);
        linkedList.previous();

        expect(linkedList.current?.value).toEqual({ value: 2, key: 'Two' });
        });

        test('previous() -> Should set current to previous node', () => {
        linkedList.setCurrent(4);
        linkedList.previous();

        expect(linkedList.current?.value).toEqual({ value: 4, key: 'Four' });
        });

        test('previous() -> Should set current to previous node', () => {
        linkedList.setCurrent(4);
        linkedList.previous();
        linkedList.previous();

        expect(linkedList.current?.value).toEqual({ value: 3, key: 'Three' });
        });
});

describe('toArray()', () => {

        let linkedList = new LinkedList();

        beforeEach(() => {
            linkedList = new LinkedList();
            linkedList.push({ value: 1, key: 'One' });
            linkedList.push({ value: 2, key: 'Two' });
            linkedList.push({ value: 3, key: 'Three' });
            linkedList.push({ value: 4, key: 'Four' });
            linkedList.push({ value: 5, key: 'Five' });
        });

        test('toArray() -> Should return an array of the list', () => {
            expect(linkedList.toArray()).toEqual([
                { value: 1, key: 'One' },
                { value: 2, key: 'Two' },
                { value: 3, key: 'Three' },
                { value: 4, key: 'Four' },
                { value: 5, key: 'Five' },
            ]);
        });
});

describe('toString()', () => {

            let linkedList = new LinkedList();

            beforeEach(() => {
                linkedList = new LinkedList();
                linkedList.push({ value: 1, key: 'One' });
                linkedList.push({ value: 2, key: 'Two' });
                linkedList.push({ value: 3, key: 'Three' });
                linkedList.push({ value: 4, key: 'Four' });
                linkedList.push({ value: 5, key: 'Five' });
            });

            test('toString() -> Should return a string of the list', () => {
                expect(linkedList.toString()).toEqual(
                    "{\"value\":1,\"key\":\"One\"} {\"value\":2,\"key\":\"Two\"} {\"value\":3,\"key\":\"Three\"} {\"value\":4,\"key\":\"Four\"} {\"value\":5,\"key\":\"Five\"} "
                );
            });
});

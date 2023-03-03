# Linked List
A TypeScript LinkedList data type implementation with a current node tracking function


## Getters
``` typescript
getHead() 
getTail()
getCurrent()
getLenght()
```

## List Manipulation
```typescript
push(value: object)
```
Pushes a JSON object on to the bottom of the list

``` typescript
pop()
```
Removes the last node from the list

```typescript
shift()
```
Removes the first node from the list

```typescript
unshift(value: object)
```
Pushes a JSON object into the top of the list

```typescript
insertAtIndex(value: object, index: number)
```
Pushes a JSON object at the index supplied

```typescript
removeAtIndex(index: number)
```
Removes node at index

```typescript
getAtIndex(index:number)
```
Returns the JSON of node at index

```typescript
setAtIndex(value: object, index: number)
```
Replaces the JSON of node at index

```typescript
reverse()
```
Reverses the order of the list

## Current Node Tracking
By default, the current node will be set as the head of the list
``` typescript
setCurrent(index:number)
```
Set the current node as the node at index

```typescript
next()
previous()
```
Sets the current node to the next or previous node in the list, does nothing if it is null

## Output
``` typescript
toArray()
toString()
```
Return the values of all nodes in the list as an array or a stringified json

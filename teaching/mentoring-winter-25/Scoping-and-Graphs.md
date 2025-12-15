---
layout: article
title: Programming Notes
date: 2025-12-14
author: Aryan Kumar
---
<style>
    img {
        width: 50%;
        height: auto;
    }
</style>

# Programming and Algorithms Notes

## Contents

- [Programming and Algorithms Notes](#programming-and-algorithms-notes)
  - [Contents](#contents)
  - [Python Scoping](#python-scoping)
    - [Global Code](#global-code)
    - [Local Code](#local-code)
    - [Nested Function Code](#nested-function-code)
    - [Graphs](#graphs)
    - [Search Algorithms](#search-algorithms)
      - [Basic terminology](#basic-terminology)
      - [Video Resources:](#video-resources)
      - [Single Search Implementation for DFS and BFS](#single-search-implementation-for-dfs-and-bfs)


## Python Scoping

LEGB: Local, Enclosing, Global, Built-in Scopes.

1. Local: inside functions / lambdas
2. Enclosing / nonlocal: nested functions ... scope of enclosing function
3. Global: top-most, module-level scope
4. Built-in: Scope containing Python standard library ... `print()`, `len()`, etc. [https://docs.python.org/3/library/builtins.html#module-builtins](https://docs.python.org/3/library/builtins.html#module-builtins)

```py
x = "global"                # global
def outer() -> None:
    x = "enclosing"         # enclosing / nonlocal

    def inner() -> None:
        x = "local"         # local
        print(x)  # prints "local"

    inner()
    print(x) # prints "enclosing"

outer()
print(x)  # prints "global"
```

| Action | Global Code | Local Code | Nested Function Code |
|--------|-------------|-----------|----------------------|
| Access names in the global scope | Yes | Yes | Yes |
| Modify names in the global scope | Yes | No (unless declared global) | No (unless declared global) |
| Access names in the local scope | No | Yes (in its own local scope), No (in another local scope) | Yes (in its own local scope), No (in another local scope) |
| Override names in the built-in scope | Yes | Yes (during function execution) | Yes (during function execution) |
| Access names in their enclosing scope | N/A | Yes | Yes |
| Modify names in their enclosing scope | N/A | No (unless declared global) | No (unless declared nonlocal) |

Ref: realpython [https://realpython.com/python-scope-legb-rule/](https://realpython.com/python-scope-legb-rule/)

### Global Code

```py
glbl = 10  # global variable

# * Access global variable
print(glbl)  # Output: 10
# * Modify global variable
glbl = 20
print(glbl)  # Output: 20

# * Override built-in function
len = 5
print(len)  # Output: 5
```

### Local Code

```py
glbl = 10  # global variable
# * Access global variable
def my_function() -> None:
    print(glbl)  # Output: 20

# * Modify global variable
def modify_global() -> None:
    global glbl
    glbl = 30
    print(glbl)  # Output: 30
modify_global()
print(glbl)  # Output: 30

def modify_global_fail(val: int) -> None:
    glbl = val  # This creates a new local variable, does not modify global glbl
    print(glbl)  # Output: 40

print(glbl)  # Output: 30
modify_global_fail(40)
print(glbl)  # Output: 30
```

### Nested Function Code

```py
glbl = 10  # global variable

# * Access global and enclosing variable
def outer_function() -> None:
    encl = 20  # enclosing variable

    def inner_function() -> None:
        print(encl)  # Access enclosing variable, Output: 20
        print(glbl)  # Access global variable, Output: 10

    inner_function()

# * Modify enclosing variable
def modify_enclosing() -> None:
    encl = 20  # enclosing variable
    def inner_modify() -> None:
        nonlocal encl
        encl = 50
        print(encl)  # Output: 50
    inner_modify()
    print(encl)  # Output: 50
```


### Graphs

Representations:
- Adjacency Matrix
- Adjacency List
- Edge Set


```
A
|   \
B----C
|   /   \
D ------- E
          |
          |
          F
```


```py
EDGE_SET = {
    ("A", "B"),
    ("A", "C"),
    ("B", "C"),
    ("B", "D"),
    ("C", "D"),
    ("C", "E"),
    ("D", "E"),
    ("E", "F"),
}

def is_edge(u: str, v: str) -> bool:
    return (u, v) in EDGE_SET or (v, u) in EDGE_SET

# * Adjacency Matrix
adj_matrix = [
    [
        1 if is_edge(u, v) else 0
        for u in "ABCDEF"
    ]
    for v in "ABCDEF"
]
'''
Full list:
[
    [0, 1, 1, 0, 0, 0],  # A
    [1, 0, 1, 1, 0, 0],  # B
    [1, 1, 0, 1, 1, 0],  # C
    [0, 1, 1, 0, 1, 0],  # D
    [0, 0, 1, 1, 0, 1],  # E
    [0, 0, 0, 0, 1, 0],  # F
]
'''

# * Adjacency List
adj_list = {
    u: [
        v for v in "ABCDEF" if is_edge(u, v)
    ]
    for u in "ABCDEF"
}
'''
Full list:
{
    "A": ["B", "C"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "D", "E"],
    "D": ["B", "C", "E"],
    "E": ["C", "D", "F"],
    "F": ["E"],
}
'''
```

### Search Algorithms


#### Basic terminology

- Node: A point in the graph (e.g., A, B, C, etc.)
  - start node: where the search begins
- Neighbor: A node directly connected to another node by an edge
- Frontier: The set of nodes that are next in line to be explored
- Explored: The set of nodes that have already been visited
- UnExplored: The set of nodes that have not yet been visited

<figure>
    <img src="https://artint.info/2e/html2e/x227.png" alt="A generic search algorithm illustration"/>
    <figcaption>Generic Searching Algorithm: <a href="https://artint.info/2e/html2e/ArtInt2e.Ch3.S4.html">Foundations of computational agents</a></figcaption>
</figure>


- Depth-First Search (DFS)
  - Pick a starting node, and explore as far as possible along each branch before backtracking.
  - exploration order captured by a stack (LIFO)

- Breadth-First Search (BFS)
  - Pick a starting node, and explore all its neighbors before moving to the next level of neighbors.
  - exploration order captured by a queue (FIFO)

#### Video Resources:

Quick Visualization (Short):
{% include youtube.html id="L1vGm2_cPU0" %}

In-Depth Visualization (DFS):
{% include youtube.html id="PMMc4VsIacU" %}

In-Breadth Visualization (BFS):
{% include youtube.html id="xlVX7dXLS64" %}

#### Single Search Implementation for DFS and BFS

```py
from collections import deque
from typing import List, Literal, Dict

def traverse(
    adj_list: Dict[str, List[str]],
    search_type: Literal["DFS", "BFS"],
    start: str,
) -> None:
    explored = set()
    frontier = deque([start])

    visited_order = []
    get_neighbor = (
        frontier.pop if search_type == "DFS" else frontier.popleft
    )
    while frontier:
        curr = get_neighbor()
        if curr not in explored:
            visited_order.append(curr)
            explored.add(curr)
            for neighbor in adj_list[curr]:
                if neighbor not in explored:
                    frontier.append(neighbor)
    print(" -> ".join(visited_order))
```

Let's check the graph again:
```
A
|   \
B----C
|   /   \
D ------- E
          |
          |
          F
```

It is easy to see the BFS order from A is: `A -> B -> C -> D -> E -> F`
This is exactly what we get from traverse:
```
>>> traverse(adj_list, "BFS", "A")
A -> B -> C -> D -> E -> F
```

The DFS order from A is however not so obvious.
It depends on the order of neighbor selection from the stack.
Following is one valid DFS order:
```
>>> traverse(adj_list, "DFS", "A")
A -> C -> E -> F -> D -> B
```

Another possible order is: `A -> B -> D -> E -> F -> C`
Notice that the underlying idea is preserved:
explore as far as possible along each branch before backtracking.

# %%
from collections import deque
from typing import Dict, List, Literal

# https://www.youtube.com/shorts/uehCDW1fxUw
edge_set = {
    ("A", "B"),
    ("A", "C"),
    ("B", "C"),
    ("B", "D"),
    ("C", "D"),
    ("C", "E"),
    ("D", "E"),
    ("E", "F"),
}


def is_edge(u, v) -> bool:
    return (u, v) in edge_set or (v, u) in edge_set


adj_list = {
    u: [v for v in "ABCDEF" if is_edge(u, v)] for u in "ABCDEF"
}


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


# %%

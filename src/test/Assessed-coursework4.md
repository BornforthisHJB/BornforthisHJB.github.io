---
title: Assessed coursework 4 for Algorithms and Machine Learning (MATH20017), Autumn 2023
date: 2023-11-24 23:09:13
author: AI悦创
isOriginal: true
category: 
    - 英国-布里斯托尔
tag:
    - 英国-布里斯托尔
icon: MathOperations
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## Introduction

This document contains the questions for Part 3 of your assessed coursework for the unit Algorithms and Machine Learning (MATH20017). The marks for this coursework will count 10% towards your final grade.

Please contact henry.reeve@bristol.ac.uk with any questions regarding this document. Whilst I am unable to provide solutions in advance of all work being handed in, I can provide clarification.

The contents of this document should **not** be distributed without permission.

There are 5 sections to this coursework and you are encouraged to attempt to complete all sections.



## Handing in your coursework

How you present your coursework is important. You should complete your coursework using either Google Colab, a Jupyter notebook, or an Rmarkdown. Whichever approach you take you must submit both (1) the notebook itself (typically either a .ipynb file or a .rmd file) and (2) an HTML file in which all of the blocks of code have been run. If in doubt, use the the suggested approach described in Assessed Coursework 1.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## Section A (20 marks)

We begin with by implementing an adjacency list data structure for representing a graph.

```python
class GraphNode:
    # simple graph node class for adjacency list representation
    def __init__(self, name):
        self.name = name
        self.adjacency_list = []
    def __lt__(self, other):
        return True
    def __le__(self, other):
        return True
    
class GraphEdge:
    # graph edge class with from and to nodes
    def __init__(self, from_node, to_node):
        self.from_node = from_node
        self.to_node = to_node
        
class Graph:
    # simple graph class for adjacency list representation
    def __init__(self):
        self.num_nodes = 0
        self.num_edges = 0
        self.node_array = []
        self.node_dictionary = {}
    def add_node(self,name):
        new_node = GraphNode(name)
        self.node_array.append(new_node)
        self.node_dictionary[name] = new_node
        self.num_nodes += 1
        
    def print_nodes(self):
        if self.num_nodes == 0:
            print("Empty graph")
            
        for i in range(self.num_nodes):
            print(self.node_array[i].name)
            
    def add_edge_by_node(self, from_node, to_node):
        from_node.adjacency_list.append(GraphEdge(from_node,to_node))
        self.num_edges += 1
        
    def add_edge(self, from_name, to_name):
        from_node = self.node_dictionary[from_name]
        to_node = self.node_dictionary[to_name]
        self.add_edge_by_node(from_node, to_node)
        
    def print_graph(self):
        if self.num_nodes == 0:
            print("Empty graph")
            return
        print("The graph structure is:")
        
        for i in range(self.num_nodes):
            node = self.node_array[i]
            print("{node} : {direct_descendants}".format(node=node.name, direct_descendants=[edge.to_node.name for edge in node.adjacency_list]))
```

We also introduce a function `graph_from_adjacency_matrix` which takes as input a length $n$ list of strings called `names_array` and an $n \times n$  matrix `adjacency_matrix` represented as a two-dimensional NumPy array where all entries are either 0 or 1. We view `names_array` as a list of names for nodes in a graph and `adjacency_matrix` an adjacency matrix for that graph. Hence, `adjacency_matrix[i,j]=1` if there is an edge between the node names `names_array[i]` and that with name `names_array[j]`, and `adjacency_matrix[i,j]=0` if there is no such edge. The function takes `names_array` and `adjacency_matrix` as inputs and return the corresponding graph data structure as an object belonging to the Graph class.

```python
import numpy as np

def graph_from_adjacency_matrix(names_array:list, adjacency_matrix:np.array):
    # function which takes as input a name vector and an adjacency matrix
    # and returns a Graph with adjacency list representation
    
    # check inputs
    n = len(names_array)
    if adjacency_matrix.shape != (n, n):
        print("Incongruent inputs")
        return None
    # initialise graph
    G = Graph()
    
    # add nodes with names given in name vector
    for name in names_array:
        G.add_node(str(name))
        
    # add edges based upon adjacency matrix
    for i in range(len(names_array)):
        for j in range(len(names_array)):
            if adjacency_matrix[i, j] > 0:
                G.add_edge(str(names_array[i]), str(names_array[j]))
    return G
```

We then check performance based upon the test cases:

```python
import numpy as np
np.random.seed(2023) # set random seed

adj_mat = np.random.choice([0, 1], size=(5,5), p=[1./3, 2./3])
names_v = ("Alpha", "Beta", "Gamma", "Delta", "Epsilon")

G = graph_from_adjacency_matrix(names_v, adj_mat)
G.print_graph()
```

```python
## The graph structure is:
## Alpha : ['Beta', 'Gamma']
## Beta : ['Alpha', 'Gamma', 'Delta', 'Epsilon']
## Gamma : ['Alpha', 'Beta', 'Gamma', 'Epsilon']
## Delta : ['Beta', 'Delta']
## Epsilon : ['Alpha', 'Delta']
```

Recall that by default, the Graph class represents directed graphs. However, we can also use objects from this class to represent undirected graphs. 

Recall that for an undirected graph $G=(V,E)$ each edge $e=\{x,y\}$ corresponds to a set of two distinct nodes $x,y \in V$ . Unlike directed graphs, for undirected graphs there is no ordering between the nodes for a specific edge. We can represent an undirected graph $G=(V,E)$ via an associated directed graph $\tilde{G}=(\tilde{V}, \tilde{E})$ with the same set of nodes $\tilde{V}=V$ and for each undirected edge $e=\{x,y\}=\{y,x\} \in E$ we include both of the corresponding directed edges $\tilde{e}_0=(x,y)$ (from $x$ to $y$) and $\tilde{e}_1=(y,x)$ (from $y$ to $x$) in the set $\tilde{E}$. As an example, consider an undirected graph $G=(V,E)$ with $V=\{a,b,c,d\}$ and $E=\{\{a,b\},\{b,c\},\{a,c\}\}$. We can represent $G$ via the directed graph $\tilde{G}=(\tilde{V},\tilde{E})$ where $\tilde{V}=V$ and $\tilde{E}=\{(a,b),(b,a),(b,c),(c,b),(a,c),(c,a)\}$.Note that this representation doubles the number of edges. We use the adjacency list representation within the class Graph for the associated graph $\tilde{G}=(\tilde{V},\tilde{E})$ to represent the undirected graph $G=(V,E)$.

Note that graphs of this form correspond to symmetric adjacency matrices with zeros along the diagonal (since there are no self-edges in an undirected graph). The following code can be used to create a random adjacency matrix of this form:

```python
def generate_random_symmetric_matrix_zero_diagonal(n:int, prob:float) -> np.array:
    vect = np.random.choice([0, 1], size=(n*(n-1)//2), p=[1-prob,prob])
    out_mat = np.zeros((n,n))
    k = 0
    for i in range(n):
        for j in range(i+1, n):
            out_mat[i, j] = vect[k]
            out_mat[j, i] = vect[k]
            k += 1
    return out_mat
```

Hence, we can generate a representation for a random undirected graph as follows:

```python
import numpy as np
np.random.seed(2023) # set random seed

num_nodes = 6
symmetric_adj_mat = generate_random_symmetric_matrix_zero_diagonal(num_nodes, 0.4)
names_v = [chr(ord('A') + i) for i in range(num_nodes)]
print(symmetric_adj_mat)
```

```python
## [[0. 0. 1. 0. 0. 0.] 
## [0.0.0.0.1.0.] 
## [1.0.0.0.0.0.] 
## [0.0.0.0.0.0.] 
## [0.1.0.0.0.0.] 
## [0. 0. 0. 0. 0. 0.]]
```

```python
G = graph_from_adjacency_matrix(names_v, symmetric_adj_mat)
G.print_graph()
```

```python
## The graph structure is:
## A : ['C']
## B : ['E']
## C : ['A']
## D : []
## E : ['B']
## F : []
```

We now consider the problem of computing the number of connected components in an undirected graph.

Recall that given an undirected graph $G=(V,E)$, and given a node $u \in V$ , the connected component $S(u)$ is the set of all nodes $w \in V$ such that there is a path from $u$ to $w$.

**(Q1)** Write a function called `number_connected_components_bfs` which adapts ideas from the breadth-first-search algorithm to compute the number of connected components in an undirected graph. Your function should take as input the graph object $G$ belonging to the Graph class implemented corresponding to an undirected graph. In particular, this means that given any pair of nodes $x,y \in V$ there exists an edge from $x$ to $y$ if and only if there is an edge from $y$ to $x$. Your function should return an integer corresponding to the number of distinct connected components.

You are encouraged to make use of the Python deque data structure.

```python
from collections import deque
```

You can use the following incomplete code as a starting point.

```python
def number_connected_components_bfs(graph:Graph, print_val:bool=False) -> int:
    # initialisation
    num_connected_components = 0
    for node in graph.node_array:
        node.visited = False
    current_connected_components_lists = []
    
    # iterate over node array
    for node in graph.node_array:
        ### remove pass and add in details
        pass
    return num_connected_components
```

Apply your function to the graph generated previously.

```python
print("The number of connected components is "+ str(number_connected_components_bfs(G)))
```

```python
## The number of connected components is 4
```

**(Q2)** write a function called `number_connected_components_dfs` which adapts ideas from the depth-first-search algorithm to compute the number of connected components in an undirected graph.

```python
def number_connected_components_dfs(graph:Graph, print_val:bool=False) -> int:
    pass ### remove pass and add in details
```

Apply your function to the graph generated previously.

```python
print("The number of connected components is "+ str(number_connected_components_dfs(G)))
```

```python
## The number of connected components is 4
```

**(Q3)** In the final task in this question is to create a function `compute_number_lakes`. Your function will take as input an $n \times n$ NumPy matrix consisting of zeroes and ones called `grid_map` and output an non-negative integer.

For each $(i,j) \in {0,...,n-1}$, `grid_map[i,j]` corresponds to square metre on a map with the interpretation 













::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

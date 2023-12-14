class ALGraph {
  constructor(len) {
    this.length = len;
    this.list = new Array(this.length).fill(0);
  }

  addVertex(v) {
    if (!this.list[v]) {
      this.list[v] = [];
    }
  }

  addEdge(v, e) {
    this.addVertex(v);
    this.addVertex(e);
    this.list[v].push(e);
    this.list[e].push(v);
  }

  bfs(v, target) {
    const visited = new Array(this.length).fill(false);
    const path = new Array(this.length).fill(false);

    visited[v] = true;

    const queue = [v];

    while (queue.length) {
      const current = queue.shift();

      if (target === current) break;

      const edges = this.list[current];

      for (let edge = 0; edge < edges.length; edge++) {
        let n = edges[edge];

        if (edges[edge] === 0) continue;
        if (visited[n]) continue;

        visited[n] = true;
        path[n] = current;
        queue.push(n);
      }
    }

    return path;
  }

  dfs(v, target) {
    const visited = new Array(this.length).fill(false);
    const path = [];

    this._dfs(v, target, visited, path);

    return path;
  }

  _dfs(v, target, visited, path) {
    if (visited[v]) return false;

    visited[v] = true;

    path.push(v);

    if (v === target) return true;

    const edges = this.list[v];

    for (let edge = 0; edge < edges.length; edge++) {
      if (this._dfs(edges[edge], target, visited, path)) {
        return true;
      }
    }

    path.pop();

    return false;
  }

  print() {
    for (let i = 0; i < this.length; i++) {
      const vertex = i;
      const edges = this.list[vertex];
      let cout = "";

      if (edges) {
        edges.forEach((edge) => {
          cout += edge + ", ";
        });
      }
      console.log(`${vertex} => ${cout}`);
    }
  }

  removeEdge(v, e) {
    this.list[v] = this.list[v].fiilter((edge) => edge !== e);
    this.list[e] = this.list[e].fiilter((edge) => edge !== v);
  }

  isEdge(v, e) {
    return this.list[v].includes(e);
  }
}

const graph = new ALGraph(5);

graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(1, 3);
// console.log(graph.bfs(1, 3));
console.log(graph.dfs(0, 2));

graph.print();

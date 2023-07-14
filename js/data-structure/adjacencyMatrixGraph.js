class AMGraph {
  constructor(len) {
    this.length = len;
    this.matrix = [];

    for (let i = 0; i < this.length; i++) {
      this.matrix.push(new Array(this.length).fill(0));
    }
  }

  addEdge(u, v) {
    this.matrix[u][v] = 1;
    this.matrix[v][u] = 1;
  }

  removeEdge(u, v) {
    this.matrix[u][v] = 0;
    this.matrix[v][u] = 0;
  }

  isEdge(u, v) {
    return this.matrix[u][v] === 1;
  }

  bfs(v, target) {
    const seen = new Array(this.length).fill(false);
    const prev = new Array(this.length).fill(-1);

    seen[v] = true;

    const queue = [v];

    while (queue.length) {
      const current = queue.shift();

      if (current === target) break;

      const edges = this.matrix[current];

      for (let i = 0; i < edges.length; i++) {
        if (edges[i] === 0) continue;

        if (seen[i]) continue;

        seen[i] = true;
        prev[i] = current;
        queue.push(i);
      }
    }

    if (prev[target] === -1) return;

    let current = target;

    const out = [];

    while (prev[current] !== -1) {
      out.push(current);
      current = prev[current];
    }

    if (out.length) {
      return [v].concat(out.reverse());
    }

    return null;
  }

  dfs(v, target) {
    const seen = new Array(this.length).fill(false);
    const path = [];

    this._dfs(v, target, seen, path);

    return path;
  }

  _dfs(v, target, seen, path) {
    if (seen[v]) return false;

    seen[v] = true;

    path.push(v);

    if (v === target) return true;

    const edges = this.matrix[v];

    for (let i = 0; i < edges.length; i++) {
      if (this._dfs(edges[i], target, seen, path)) {
        return true;
      }
    }

    path.pop();

    return false;
  }

  print() {
    console.log(this.matrix);
  }
}

const graph = new AMGraph(6);

graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(1, 3);
console.log(graph.bfs(1, 2));
console.log(graph.dfs(1, 0));

// graph.print();

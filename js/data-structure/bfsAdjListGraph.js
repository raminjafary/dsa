class Graph {
  constructor(len) {
    this.length = len;
    this.list = new Array(len).fill(0);

    // for(let i = 0; i < this.list.length; i++)
    // this.list[i] = [];
  }

  addEdge(v, e) {
    if (!this.list[v]) {
      this.list[v] = [];
    }
    this.list[v].push(e);
  }

  dfs(v, target) {
    const visited = new Array(this.length).fill(false);
    const path = new Array(this.length).fill(false);

    visited[v] = true;

    const q = [v];

    do {
      const current = q.shift();

      // if(target === current) break

      console.log(current);

      const list = this.list[current];

      for (let i = 0; i < list.length; i++) {
        if (list[i] === 0) continue;

        if (visited[list[i]]) continue;

        visited[list[i]] = true;
        path[list[i]] = current;
        q.push(list[i]);
      }
    } while (q.length);

    // console.log(path);
    return path;
  }
}

const graph = new Graph(5);

graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.dfs(0, 3);

console.log(graph);

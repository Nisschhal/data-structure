/*
    GRAPH{
        -initalized the graph with the empty adjacenyList OBJECT
    
    -- addVertex(vertex):
        - check if the vertex exist in list
            - if no then create vertex item in list object
            - return true
        - return false
    
    -- addEdges(vertexA, vertexB):
        - check if both vertices exist 
            -- if yes then add the vertex/Node in each other list 
            -- return true
        return false
    }

    -- removeEdges(vertexA, vertexB):
        - check if both vertices exist
            -- if yes then filter out the either vertices from each other list
                -- take the vertexA list and filter out the vertexB and vice verca
            -- return true
        return false

    -- removeVertex(vertex):
        - check if vertex exist
            -- while vertex's list exist:
                -- if yes, then pop the item from the vertex's list into temp
                -- take the temp and remove the vertex from temp's list, calling removeEdges(temp, vertex)
            -- once the loop compelete delete the vertex/node from the list
            -- return the list
*/

class Graph {
  constructor() {
    this.adajencyList = {};
  }
  addVertex(vertex) {
    if (!this.adajencyList[vertex]) {
      this.adajencyList[vertex] = [];
      return true;
    }
    return false;
  }
  addEdges(vertexA, vertexB) {
    if (this.adajencyList[vertexA] && this.adajencyList[vertexB]) {
      this.adajencyList[vertexA].push(vertexB);
      this.adajencyList[vertexB].push(vertexA);
      return true;
    }
    return false;
  }
  removeEdges(vertexA, vertexB) {
    if (this.adajencyList[vertexA] && this.adajencyList[vertexB]) {
      this.adajencyList[vertexA] = this.adajencyList[vertexA].filter(
        (v) => v != vertexB
      );
      this.adajencyList[vertexB] = this.adajencyList[vertexB].filter(
        (v) => v != vertexA
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adajencyList[vertex]) {
      while (this.adajencyList[vertex].length) {
        let temp = this.adajencyList[vertex].pop();
        this.removeEdges(temp, vertex);
      }
    }
    delete this.adajencyList[vertex];
    return this;
  }
}

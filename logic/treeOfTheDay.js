//date - lista krawędzi
function convertData(data) {
    const graph = {
        nodes: [],
        links: [],
      };

    for (const edge of data) {
        let {u, v} = edge
        if (!graph.nodes.some(node => node.name === u)) {
            graph.nodes.push({ name: u });
        }
        if (!graph.nodes.some(node => node.name === v)) {
            graph.nodes.push({ name: v })
        }
        graph.links.push({ source : u, target : v })
        graph.links.push({ source : v, target : u })
    }
    return graph;
}

//date - data "day.month.year"
function createDrzewko(date) {
    const nums = new Set([...Array(10).keys()]); // Create a set of numbers from 0 to 9

    let dateSep = date.split(".").join('').split(''); // Remove dots

    const edges = dateSep.map(num => ({ u : num, v : '-1' })); // Create edges

    const id = new Set();

    for (let i = 0; i < dateSep.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (!dateSep.slice(i).includes(j.toString()) && !id.has(j)) {
                edges[i].v = j.toString();
                id.add(j);
                break
            }
        }
        // dateSep = dateSep.slice(1); // Remove the first character
    }

    const lastNodes = [...nums].filter(num => !id.has(num)).map(num => num.toString())
    edges.push({u: lastNodes[0],v: lastNodes[1]})
    return convertData(edges);
}

export default createDrzewko
//date - lista krawędzi
function convertData(data) {
    const graph = {
        nodes: [],
        links: [],
      };

    for (const edge of data) {
        let {u, v} = edge
        console.log('u '+u+' v '+v)
        if (!graph.nodes.some(node => node.name === u)) {
            graph.nodes.push({ name: u });
        }
        if (!graph.nodes.some(node => node.name === v)) {
            graph.nodes.push({ name: v })
        }
        graph.links.push({ source : u, target : v })
        graph.links.push({ source : v, target : u })
    }
    console.log(graph)
    return graph;
}

//date - data "dzien.miesiac.rok"
function createDrzewko(date) {
    const nums = new Set([...Array(10).keys()]); // Create a set of numbers from 0 to 9
    // for (const item of nums) {
    //     console.log(item);
    // }
    let dateSep = date.split(".").join('').split(''); // Remove dots
    // console.log(dateSep)
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
    console.log(dateSep)
    const lastNodes = [...nums].filter(num => !id.has(num)).map(num => num.toString())
    edges.push({u: lastNodes[0],v: lastNodes[1]})
    // edges.push({source: lastNodes[1], target: lastNodes[0]})
    console.log(id)
    console.log('edges push'+[...nums].filter(num => !id.has(num)).map(num => num.toString()))
    return convertData(edges);
}

export default createDrzewko
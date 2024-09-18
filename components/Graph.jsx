import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as d3 from 'd3-force';

const { width, height } = Dimensions.get('window');

const Graph = ({ drzewko }) => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Convert nodes to a map by name for easier access in links
    const nodesByName = Object.fromEntries(
      drzewko.nodes.map((node) => [node.name, node])
    );

    const linksWithReferences = drzewko.links.map(link => ({
      source: nodesByName[link.source],
      target: nodesByName[link.target],
    }));

    // Create a simulation with forces
    const simulation = d3
      .forceSimulation(drzewko.nodes)
      .force('link', d3.forceLink(linksWithReferences).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.1))  // Force nodes to stay horizontally within bounds
      .force('y', d3.forceY(height / 2).strength(0.1)) // Force nodes to stay vertically within bounds
      .on('tick', () => {
        // On every tick, update the state with the new node positions
        setNodes([...drzewko.nodes]); // Update node positions
        setLinks([...linksWithReferences]); // Update links with new node references
      });

    // Clean up the simulation when the component is unmounted
    return () => {
      simulation.stop();
    };
  }, [drzewko]);

  return (
    <View>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Render links (edges) */}
        {links.map((link, index) => {
          const sourceNode = nodes.find(node => node.name === link.source.name);
          const targetNode = nodes.find(node => node.name === link.target.name);

          if (!sourceNode || !targetNode) return null; // Prevent errors if node not found

          return (
            <Line
              key={index}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="black"
              strokeWidth="2"
            />
          );
        })}

        {/* Render nodes (vertices) */}
        {nodes.map((node, index) => (
          <Circle
            key={index}
            cx={node.x} // X position
            cy={node.y} // Y position
            r={15}
            fill="red"
          />
        ))}
      </Svg>
    </View>
  );
};

export default Graph;

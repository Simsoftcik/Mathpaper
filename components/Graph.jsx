import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as d3 from 'd3-force';

const { width, height } = Dimensions.get('window');

const Graph = ({drzewko}) => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Konwersja węzłów na indeksy w tablicy
    const nodesByName = Object.fromEntries(
      drzewko.nodes.map((node, index) => [node.name, node])
    );

    const linksWithReferences = drzewko.links.map(link => ({
      source: nodesByName[link.source],
      target: nodesByName[link.target],
    }));

    // Symulacja grafu przy użyciu d3-force
    const simulation = d3
      .forceSimulation(drzewko.nodes)
      .force('link', d3.forceLink(linksWithReferences).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', () => {
        setNodes([...drzewko.nodes]); // Aktualizacja pozycji węzłów
        setLinks([...drzewko.links]); // Aktualizacja linków
      });

    // Zatrzymanie symulacji przy odmontowaniu komponentu
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <View>
      <Svg width={width} height={height}>
        {/* Linie (krawędzie grafu) */}
        {links.map((link, index) => {
          const sourceNode = nodes.find(node => node.name === link.source);
          const targetNode = nodes.find(node => node.name === link.target);

          if (!sourceNode || !targetNode) return null; // Zabezpieczenie przed błędami

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

        {/* Węzły (nody grafu) */}
        {nodes.map((node, index) => (
          <Circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={15}
            fill="red"
          />
        ))}
      </Svg>
    </View>
  );
};

export default Graph;

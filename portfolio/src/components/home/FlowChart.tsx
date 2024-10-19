import { ReactFlow, MiniMap, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Flowchart = () => {
  // Define nodes
  const nodes = [
    {
      id: "1",
      data: { label: "Papion Business System" },
      position: { x: 250, y: 0 },
      style: { background: "#fafafa" },
    },
    {
      id: "2",
      data: { label: "Inventory Management" },
      position: { x: 100, y: 130 },
      style: { background: "#e0f7fa" },
    },
    {
      id: "3",
      data: { label: "Sales Tracking" },
      position: { x: 250, y: 190 },
      style: { background: "#ffe0b2" },
    },
    {
      id: "4",
      data: { label: "Order Logs" },
      position: { x: 100, y: 300 },
      style: { background: "#d1c4e9" },
    },
    {
      id: "5",
      data: { label: "Expenses Tracking" },
      position: { x: 40, y: 50 },
      style: { background: "#ffccbc" },
    },
    {
      id: "6",
      data: { label: "Customer Management" },
      position: { x: 400, y: 300 },
      style: { background: "#c8e6c9" },
    },
    {
      id: "7",
      data: { label: "User Role-Based Access" },
      position: { x: 450, y: 130 },
      style: { background: "#bbdefb" },
    },
  ];

  // Define edges with correct relationships
  const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true }, // Papion to Inventory
    { id: "e2-4", source: "2", target: "3", animated: true }, // Inventory to Order Logs
    { id: "e3-5", source: "5", target: "2", animated: true }, // Sales to Expenses
    { id: "e3-6", source: "3", target: "6", animated: true }, // Sales to Customers
    { id: "e4-1", source: "3", target: "4", animated: true }, // Order Logs back to Papion
    { id: "e1-7", source: "1", target: "7", animated: true }, // Papion to User Role-Based Access
  ];

  // Render the React Flow component
  return (
    <div style={{ height: "450px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        zoomOnScroll={false} // Disable zoom on scroll
        panOnScroll={false} // Disable panning on scroll
        draggable={false} // Disable dragging of nodes
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;

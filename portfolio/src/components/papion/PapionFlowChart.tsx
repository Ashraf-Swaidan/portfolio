import { ReactFlow, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const PapionFlowchart = () => {
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
    // Inventory Nodes
    { id: "8", data: { label: "Basic Items" }, position: { x: -100, y: 180 }, style: { background: "#fff9c4" } },
    { id: "9", data: { label: "Chocolate & Sweets" }, position: { x: -100, y: 220 }, style: { background: "#fff9c4" } },
    { id: "10", data: { label: "Balloons" }, position: { x: -100, y: 260 }, style: { background: "#fff9c4" } },
    { id: "11", data: { label: "Prints" }, position: { x: -100, y: 300 }, style: { background: "#fff9c4" } },
    { id: "12", data: { label: "Flex & Vinyl" }, position: { x: -100, y: 340 }, style: { background: "#fff9c4" } },
    { id: "13", data: { label: "Laser Cut" }, position: { x: -100, y: 380 }, style: { background: "#fff9c4" } },
    { id: "14", data: { label: "Helium" }, position: { x: -100, y: 420 }, style: { background: "#fff9c4" } },
    { id: "15", data: { label: "Stands" }, position: { x: -100, y: 460 }, style: { background: "#fff9c4" } },
    // Order Type Nodes
    { id: "16", data: { label: "Instant" }, position: { x: 90, y: 350 }, style: { background: "#ffe0b2" } },
    { id: "17", data: { label: "Due Date" }, position: { x: 90, y: 400 }, style: { background: "#ffe0b2" } },
    { id: "18", data: { label: "Events" }, position: { x: 90, y: 450 }, style: { background: "#ffe0b2" } },
    // Customer Type Nodes
    { id: "19", data: { label: "Walkins" }, position: { x: 450, y: 350 }, style: { background: "#c8e6c9" } },
    { id: "20", data: { label: "Retail" }, position: { x: 450, y: 400 }, style: { background: "#c8e6c9" } },
    { id: "21", data: { label: "Wholesale" }, position: { x: 450, y: 450 }, style: { background: "#c8e6c9" } },
  ];

  // Define edges with correct relationships
  const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true }, // Papion to Inventory
    { id: "e2-4", source: "2", target: "3", animated: true }, // Inventory to Sales
    { id: "e3-5", source: "5", target: "2", animated: true }, // Sales to Expenses
    { id: "e3-6", source: "3", target: "6", animated: true }, // Sales to Customers
    { id: "e4-1", source: "3", target: "4", animated: true }, // Order Logs back to Papion
    { id: "e1-7", source: "1", target: "7", animated: true }, // Papion to User Role-Based Access

    // Connect inventory nodes to Inventory Management
    { id: "e2-8", source: "2", target: "8", animated: true }, // Inventory to Basic Items
    { id: "e2-9", source: "2", target: "9", animated: true }, // Inventory to Chocolate & Sweets
    { id: "e2-10", source: "2", target: "10", animated: true }, // Inventory to Balloons
    { id: "e2-11", source: "2", target: "11", animated: true }, // Inventory to Prints
    { id: "e2-12", source: "2", target: "12", animated: true }, // Inventory to Flex & Vinyl
    { id: "e2-13", source: "2", target: "13", animated: true }, // Inventory to Laser Cut
    { id: "e2-14", source: "2", target: "14", animated: true }, // Inventory to Helium
    { id: "e2-15", source: "2", target: "15", animated: true }, // Inventory to Stands

    // Connect order type nodes to Order Logs
    { id: "e4-16", source: "4", target: "16", animated: true }, // Order Logs to Online Orders
    { id: "e4-17", source: "4", target: "17", animated: true }, // Order Logs to In-store Orders
    { id: "e4-18", source: "4", target: "18", animated: true }, // Order Logs to Wholesale Orders

    // Connect customer type nodes to Customer Management
    { id: "e6-19", source: "6", target: "19", animated: true }, // Customer Management to Regular Customers
    { id: "e6-20", source: "6", target: "20", animated: true }, // Customer Management to New Customers
    { id: "e6-21", source: "6", target: "21", animated: true }, // Customer Management to VIP Customers
  ];

  // Render the React Flow component
  return (
    <div style={{ height: "600px", pointerEvents: "none" }}> {/* Adjusted height for additional nodes */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        zoomOnScroll={false} // Disable zoom on scroll
        panOnScroll={false} // Disable panning on scroll
        draggable={false} // Disable dragging of nodes
        style={{ pointerEvents: "none" }} // Also disable pointer events on the ReactFlow component
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default PapionFlowchart;

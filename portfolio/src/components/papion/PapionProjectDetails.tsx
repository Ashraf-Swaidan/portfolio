import React from "react";
import PapionFlowchart from "./PapionFlowChart";

const PapionProjectDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Papion Business System
      </h1>

      {/* Overview Section */}
      <section className="mb-16 p-10 bg-pink-50 shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Overview</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Papion Business System is a web application designed to streamline the
          workflow of an Event Decorations Company. Tailopink specifically for
          the business, it caters to the needs of the entire hierarchy of
          company members, from owners, managers, and inventory personnel to
          sales representatives.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-600">
          Initially connecting eight different inventories (Basic Items,
          Chocolate & Sweets, Balloons, Prints, Flex & Vinyl, Laser Cut, Helium,
          and Stands) with ongoing sales, the system evolved to distinguish
          between different types of orders (Instant, Due Date, Event) and
          various customer types (Wholesale, Retail, Walk-in). It also includes
          a complete expenses tracker and provides valuable insights through
          sales analytics.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-600">
          The goal of the system was to interconnect all users, inventories, and
          sales types with comprehensive insights and reports that were
          previously unattainable, making business operations more efficient.
        </p>
        <div className="mt-10">
          <PapionFlowchart />
        </div>
      </section>

      {/* Insights Section */}
      <section className="mb-16 p-10 bg-white shadow-md rounded-xl flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Sales & Insights
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            The system offers a rich set of insights across sales, customer
            profiles, expenses, and more. Some of the highlights include:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mt-6 text-gray-600 space-y-3">
            <li>Today's Stats Cards for Revenue, Profit, and Cost</li>
            <li>Sales Distribution Over Time with interactive filters</li>
            <li>AOV Card, Total Revenue, Profit, and Cost</li>
            <li>
              Pie Charts for Revenue/Profit distribution by Customer Types
              (Wholesale, Retail, Walk-in)
            </li>
            <li>Sales Categories Distribution Bar Charts</li>
            <li>Top Customers by Order Value</li>
            <li>Customer Type and Order Value Distributions</li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="/salesStats.png"
            alt="Sales Insights Example"
          />
        </div>
      </section>

      {/* Sales Process */}
      <section className="mb-16 p-10 bg-pink-50 shadow-lg rounded-xl flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Sales Tracking Process
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            The sales process in Papion Business System allows handling
            different inventories, customer types, and order types with ease.
            The system supports:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mt-6 text-gray-600 space-y-3">
            <li>Selection of different inventories and order types</li>
            <li>
              Customer type filtering and quick creation of customer profiles
            </li>
            <li>
              Smart handling of various item types including special inventory
              logic for Stands, Custom Items, and Balloon Arcs
            </li>
            <li>
              Dynamic calculation of prices based on item types, rental periods,
              and discounts
            </li>
            <li>Support for partial payments and unpaid order tracking</li>
            <li>Automatic updates to inventories and insights</li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="/salesTrack.png"
            alt="Sales Tracking"
          />
        </div>
      </section>

      {/* Inventory Management */}
      <section className="mb-16 p-10 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Inventory Management
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          The system handles eight different inventories, each with unique
          characteristics. It offers advanced controls for managing stock,
          restocking limits, and approval processes for new items. Some key
          features include:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mt-6 text-gray-600 space-y-3">
          <li>Item creation, approval, and management by inventory managers</li>
          <li>Smart handling of special inventories like Laser Cuts and Balloons</li>
          <li>Renting management for Stands inventory</li>
          <li>Helium consumption tracking based on balloon fills</li>
        </ul>
        <div className="flex flex-col sm:flex-row mt-8 space-y-8 sm:space-x-4 sm:space-y-0">
          <img
            className="w-full sm:w-1/2 h-auto rounded-lg shadow-md object-contain"
            src="/papionInv.png"
            alt="Inventory Management Process"
          />
          <img
            className="w-full sm:w-1/2 h-auto rounded-lg shadow-md object-contain"
            src="/basicInv.png"
            alt="Inventory Management Process"
          />
        </div>
      </section>

      {/* Customer & Expenses Management */}
      <section className="mb-16 p-10 bg-pink-50 shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Customer & Expenses Management
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          The system also provides advanced customer and expenses management
          functionalities:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mt-6 text-gray-600 space-y-3">
          <li>Customer profile creation and management</li>
          <li>
            Insights on total revenue, profit, AOV, and purchase categories per
            customer
          </li>
          <li>
            Expenses tracking with detailed reports on categories, pending
            payments, and upcoming expenses
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row mt-8 space-y-8 sm:space-x-4 sm:space-y-0">
          <img
            className="w-full sm:w-1/2 h-auto rounded-lg shadow-md object-contain"
            src="/expense.png"
            alt="Customer & Expenses Management"
          />
          <img
            className="w-full sm:w-1/2 h-auto rounded-lg shadow-md object-contain"
            src="/customers.png"
            alt="Customer & Expenses Management"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="p-10 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Conclusion</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          With the Papion Business System, the Event Decorations Company now has
          complete control over its inventories, sales, customers, and expenses.
          It transformed business operations by providing real-time insights,
          enhancing customer service, and making inventory management more
          efficient.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-600">
          Developing the Papion Business System was a rewarding experience that
          presented numerous technical challenges. Through effective
          problem-solving and the use of modern technologies, I was able to
          deliver a comprehensive solution that met the unique needs of the
          Event Decorations Company, facilitating enhanced operations and
          strategic insights.
        </p>
      </section>
    </div>
  );
};

export default PapionProjectDetails;

import React from 'react';
import flowDiagramImg from '../../assets/FlowDiagram.png';
import { Link } from "react-router-dom";

function FlowDiagram() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 p-8 gap-12">
      <Link to="/" className="absolute top-4 left-4">
  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-xl hover:from-indigo-500 hover:to-purple-600 hover:scale-110 transform transition-all duration-300 ease-out active:scale-95 active:shadow-md">
    Home
  </button>
</Link>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Flow Diagram</h1>
        <img
          src={flowDiagramImg}
          alt="Flow Diagram"
          className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200"
        />
      </div>
      
      {/* Terms Section */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Terms Used</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Action</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              An action is an event, like a button click, with additional information wrapped in a block.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Slice</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A slice contains the logic to manage state for specific features in an application.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Reducers</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Reducers are functions inside a slice that define how state changes.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Store</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The store is the single source of truth that holds all application state.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">State</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              State is the data inside the store that updates and reflects changes in the UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowDiagram;

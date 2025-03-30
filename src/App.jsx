import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-gray-800">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Learning Redux Toolkit</h1>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Steps to use Redux Toolkit</h2>
        <p className="text-gray-600 text-left leading-relaxed border-l-4 border-blue-500 pl-4 mb-6">
          <strong>Step 1:</strong> Create a file named <code className="bg-gray-200 px-1 rounded">store.js</code>.<br />
          <strong>Step 2:</strong> Wrap the <code className="bg-gray-200 px-1 rounded">App</code> component inside the store provider in <code className="bg-gray-200 px-1 rounded">main.jsx</code> so that the store is available throughout the app.<br />
          <strong>Step 3:</strong> Create a file called <code className="bg-gray-200 px-1 rounded">slice.js</code> containing reducers, the initial state, and function logic.<br />
          <strong>Step 4:</strong> Use the <code className="bg-gray-200 px-1 rounded">useSelector</code> hook to access the state and reflect changes in UI. <br/>.
          <strong>Step 5:</strong> Use the <code className="bg-gray-200 px-1 rounded">useDispatch</code> hook to send the  actions to update the state.
        </p>

        <h2 className="text-xl font-medium text-gray-700 mb-4">Click the button below to explore Redux in action</h2>

        {/* Centering the buttons */}
        <div className="flex justify-center space-x-4">
          <Link to='/example'>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Example
            </button>
          </Link>

          <Link to='/flowDiagram'>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Flow Diagram
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

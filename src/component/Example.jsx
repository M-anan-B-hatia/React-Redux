import React, { useState } from 'react';
import { decrementReducer, incrementByAmtReducer, incrementReducer, resetReducer } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Example() {
    const counter = useSelector((state) => state.counter.value);
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
  
    function handleIncrement() {
        dispatch(incrementReducer());
    }

    function handleDecrement() {
        dispatch(decrementReducer());
    }

    function reset() {
        dispatch(resetReducer());
        setAmount(0);
    }

    function incByAmt() {
        dispatch(incrementByAmtReducer(Number(amount)));
    }

    return (
        <div className='relative flex flex-col items-center bg-gray-100 min-h-screen justify-center p-6'>
    {/* Home button positioned at the top-left */}
    <Link to="/" className="absolute top-4 left-4">
  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-xl hover:from-indigo-500 hover:to-purple-600 hover:scale-110 transform transition-all duration-300 ease-out active:scale-95 active:shadow-md">
    Home
  </button>
</Link>


    <div className='bg-white p-6 rounded-xl shadow-lg text-center w-80'>
        <h2 className='text-2xl font-bold text-gray-700 mb-4'>Counter App</h2>
        <div className='flex items-center justify-center space-x-4 mb-4'>
        <button 
  onClick={handleDecrement} 
  className='bg-gradient-to-r from-red-500 to-red-700 text-white text-xl font-bold px-5 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-red-800 hover:scale-110 transition-transform duration-300 ease-in-out active:scale-95'
>
  -
</button>
<span className='text-4xl font-extrabold text-gray-900 mx-6'>{counter}</span>
<button 
  onClick={handleIncrement} 
  className='bg-gradient-to-r from-green-500 to-green-700 text-white text-xl font-bold px-5 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 hover:scale-110 transition-transform duration-300 ease-in-out active:scale-95'
>
  +
</button>

        </div>
        <button 
            onClick={reset} 
            className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 mb-4 w-full'
        >
            Reset
        </button>
        <div className='flex flex-col items-center space-y-3'>
            <input 
                type='number' 
                value={amount} 
                placeholder='Enter value' 
                onChange={(e) => setAmount(Number(e.target.value))} 
                className='border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button 
                onClick={incByAmt} 
                className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full'
            >
                Increment by Amount
            </button>
        </div>
    </div>
</div>

    );
}

export default Example;

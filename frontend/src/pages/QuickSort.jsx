// frontend/src/pages/QuickSort.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ArrayVisualizer from '../components/ArrayVisualizer';

const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const handleSort = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sort/quick', { array });
      setSortedArray(response.data);
    } catch (error) {
      console.error('Error sorting array:', error);
    }
  };

  const handleRefresh = () => {
    setArray([]);
    setSortedArray([]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quick Sort :-</h2>
      <p className="text-gray-600 mb-4 font-semibold">
        Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach. 
        It selects a 'pivot' element and partitions the array into elements less than and greater than 
        the pivot, recursively sorting the partitions. With an average time complexity of O(n log n), 
        it's suitable for large datasets.
      </p>
      <ArrayVisualizer array={array} setArray={setArray} />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleSort}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sort
        </button>
        <button
          onClick={handleRefresh}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Refresh
        </button>
      </div>
      <h3 className="text-lg font-semibold mt-6">Sorted Array:</h3>
      <ArrayVisualizer array={sortedArray} />
    </div>
  );
};

export default QuickSort;

import React from 'react';

const ArrayVisualizer = ({ array, setArray }) => {
  const handleChange = (e) => {
    setArray(e.target.value.split(',').map(Number));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={array.join(',')}
        onChange={handleChange}
        placeholder="Enter numbers separated by commas"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-2 items-end justify-center">
        {array.map((num, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white text-center"
            style={{ height: `${num * 10}px`, width: '20px' }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;

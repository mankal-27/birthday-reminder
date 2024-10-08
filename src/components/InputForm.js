import React, { useState } from 'react';

const InputForm = ({ addBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      addBirthday(name, date);
      setName('');
      setDate('');
    }
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full transition duration-300"
      >
        Add Birthday
      </button>
    </form>
  );
};

export default InputForm;

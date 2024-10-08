import React from 'react';

const BirthdayList = ({ birthdays }) => {
  const calculateDaysLeft = (date) => {
    const today = new Date();
    const birthday = new Date(date);
    birthday.setFullYear(today.getFullYear());
    if (birthday < today) birthday.setFullYear(today.getFullYear() + 1);
    const timeDiff = birthday - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="mt-6 space-y-4">
      {birthdays.map((birthday, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 rounded-lg border border-gray-200 transition duration-300 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-800">{birthday.name}</h2>
          <p className="text-gray-600 flex items-center">
            <span className="mr-2">🎉</span> 
            <span className="text-lg font-semibold sparkle">
              {calculateDaysLeft(birthday.date)} days left until birthday!
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BirthdayList;

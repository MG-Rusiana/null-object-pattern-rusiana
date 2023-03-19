import React, { useState } from 'react';

const NullPerson = { name: '', age: '', occupation: '' };

const people = [
  { name: 'Mark', age: 21, occupation: 'Programmer' },
  { name: 'Gil', age: 30, occupation: 'Hackerist' },
  { name: 'John', age: 25, occupation: 'Engineer' },
  { name: 'Mary', age: 30, occupation: 'Doctor' },
  { name: 'Bob', age: 35, occupation: 'Lawyer' },
  { name: 'Jane', age: 40, occupation: 'Teacher' }
];

const getPerson = (name) => {
  const person = people.find(p => p.name.toLowerCase() === name.toLowerCase());
  return person !== undefined ? person : NullPerson;
};

const PersonList = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const personToShow = getPerson(inputValue);

  return (
    <>
      <div className='flex fixed justify-center w-[100%] h-[60px] bg-[#242526] shadow-md'>
        <p className='font-[serif] font-[500] text-[40px] text-[#ffffff]'>Find People</p>
      </div>

      <div className='flex flex-col m-[30] justify-center items-center bg-[#18191A] w-screen h-screen'>
        <div className='flex flex-col p-[30px] gap-3 w-[280px] h-[300px] bg-[#242526] rounded-md'>
        <input className='h-[30px] outline-none pl-3 rounded-sm' type="text" value={inputValue} placeholder="search here..." onChange={handleInputChange} />
          <p className='text-[#ffffff] font-[serif] text-[20px] text-center'>Result</p>
          <div className='text-[#ffffff] font-[serif] text-[20px]'>Name: {personToShow.name}</div>
          <div className='text-[#ffffff] font-[serif] text-[20px]'>Age: {personToShow.age}</div>
          <div className='text-[#ffffff] font-[serif] text-[20px]'>Occupation: {personToShow.occupation}</div>
        </div>
      </div>

    </>
  );
};

export default PersonList;

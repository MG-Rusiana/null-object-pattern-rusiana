import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput]=useState()
  const [print, setPrint]=useState(false)
  const [msg, setMsg]=useState()
  const msgHandler = (e) =>{
    setInput(e.target.value)
  }
  const printMsg = ()=> {
    setPrint(true)
    setMsg(input)
  }

  return (
    <>

    <div className='flex fixed justify-center w-[100%] h-[60px] bg-[#242526] shadow-md'>
      <p className='font-[serif] font-[500] text-[40px] text-[#ffffff]'>Display message</p>
    </div>

    <div className='flex flex-row justify-center items-center m-[30] bg-[#18191A] w-screen h-screen'>

      <div className='flex flex-col p-8 gap-5 bg-[#242526] w-[300px] h-[400px] shadow-xl rounded-md '>
          <input 
            className='rounded-sm h-[35px] pl-[10px] outline-none' type='text' required placeholder='your message'
            onChange={msgHandler}
          />
        <button 
          className='bg-[#EB6100] rounded-sm h-[35px] text-[#ffffff] hover:opacity-80 active:scale-90'
          onClick={printMsg}
        >Print</button>
      {print &&
        <div>
          <p>{msg}</p>
        </div>
      }
      </div>

    </div>

    </>
  );
}

export default App;


import './todo.css'
import { useState } from 'react';

const Todo = () => {
  const[inp,setinput]=useState('');
  const [inpstoren,setinputstore]=useState([]);

  const handleInputChange=(e)=>{
    setinput(e.target.value);
  };

  const handleclick=()=>{
    if(inp.trim() !==''){
      setinputstore([...inpstoren,inp]);
      setinput('');
    }
  }
  
  const removehandle = (indexToRemove) => {
    console.log("Before remove:", inpstoren); // Debug: Check current state
    const updatedList = inpstoren.filter((_, index) => index !== indexToRemove);
    console.log("After remove:", updatedList); // Debug: Check new state
    setinputstore(updatedList);
  };

  return (
    <div>
      <h1 className='title'>To-Do App</h1>
      <div className='main-frame'>
        <div className='sub-main'>
          <input onChange={handleInputChange} className='input' type='text' name='input'  placeholder='Add the Event' value={inp} />
          <button className='btn' onClick={handleclick}>Add</button>
        </div>
      </div>
      <div className='events'>
        {inpstoren.map((item,index)=>(
          <div key={index} className='list-frame'>
              <div className='display'>{item}</div>
              <button className='remove-btn' onClick={()=>removehandle(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

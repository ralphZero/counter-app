import React, { useState } from 'react';
import './Content.css';

const Content = () => {
    const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const reset = () => setCount(0);
  const minus = () => {
    if(count <= 0) {
      reset();
    } else {
      setCount(count - 1);
    }
  }
  const addTen = () => setCount(count + 10);
  const removeTen = () => {
    let countBeforeUpdate = count - 10;
    if(count <= 0 || countBeforeUpdate < 0) {
      reset();
    } else {
      setCount(count - 10);
    }
  }
    return (
       <>
       <div className="screen-area">
            <div className='screen'>
                { count }
            </div>
       </div>
        
        <div className='buttons'>
            <button onClick={removeTen}>-10</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={add}>+</button>
            <button onClick={addTen}>+10</button>
        </div>
       </>
    );
}

export default Content;

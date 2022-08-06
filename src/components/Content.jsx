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
        <div className="button-group">
            <div className="button-reset-group">
                <button className='reset-button' onClick={reset}>reset</button>
                <div className='reset-button-text'>reset</div>
            </div>
            <div className='buttons'>
                <div style={{marginInlineEnd: 20}} className="button-row">
                    <button id="button-blue" className="counter-button" onClick={removeTen}>-10</button>
                    <button id="button-yellow" className="counter-button" onClick={addTen}>+10</button>
                </div>
                <div style={{position: 'relative', bottom: '50px'}} className="button-row">
                    <button id="button-green" className="counter-button" onClick={minus}>-</button>
                    <button id="button-red" className="counter-button" onClick={add}>+</button>
                </div>
            </div>
        </div>
        
       </>
    );
}

export default Content;

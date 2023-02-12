import React, { useState } from 'react'
import './addNew.css'

function AddNew() {
  const [pressed, setPressed] = useState(false);
  const newWordsArr = ['','','',''];

  const handleChange = () => {
    setPressed(!pressed);
  }
  const cancelEdit = () => {
    setPressed(!pressed);
  }

  return (
    <div>
      {pressed ? (<div className='wordItem'>
        {newWordsArr.map((elNew) => {
          return  <input key={elNew} className='word_input' type="text" value={elNew}/>
        })}
        <button className='button save'></button>
        <button className='button cancel' onClick={cancelEdit}></button>
      </div>) : (<div className='button new' onClick={handleChange}></div>
      )}
    </div>
  )
}

export default AddNew
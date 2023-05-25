import React from 'react';
import { useGlobalContext } from '../context';

function AddOrEditMed() {
  const { setShowAddOrEditMed, setShowDial, AddOrEdit } = useGlobalContext()
  return (
    <div className = "add-med--container" onClick={(setShowDial(false))}>
      <div className="top">
        <div>{AddOrEdit} Medicine</div>
        <div className='back' onClick={() => setShowAddOrEditMed(false)}>Back</div>
      </div>
      <form action="">
        <div className="med-input">
            <label htmlFor="">Medicine*</label>
            <input type="text" />
        </div>
        <div className="price-input">
            <label htmlFor="">Selling Price*</label>
            <input type="text" />
        </div>
        <div className="description-input">
            <label htmlFor="">Descriptions*</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button type='submit' onClick={() => setShowAddOrEditMed(false)}>Submit</button>
      </form>
    </div>
  )
}

export default AddOrEditMed

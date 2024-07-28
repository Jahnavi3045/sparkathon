import React from 'react'
import './Measure.css'

const Measure = () => {
  return (
    <div>
      <h3 className='headText' style={{position:'relative',top:'20px'}}>Give your size requirements</h3>
      <div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlInput1" class="form-label form-name">Height</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="height"/>
        </div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlInput1" class="form-label form-name">Waist length</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Waist length"/>
        </div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlInput1" class="form-label form-name">Bust length</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Bust length"/>
        </div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlInput1" class="form-label form-name">Shoulder length</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Shoulder length"/>
        </div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlInput1" class="form-label form-name">Sleeve length</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Sleeve length"/>
        </div>
        <div class="mb-3" className='form-input'>
            <label for="exampleFormControlTextarea1" class="form-label form-name">Description of the outfit</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <a href='/payment'><button type="button" class="btn btn-success button" style={{position:'relative',left:'50%'}}>Confirm</button></a>
    </div>
  )
}

export default Measure

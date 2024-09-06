import React from 'react'
import './form.css'

function Form() {

  return (
    <>
    <div className='ab'>FORM</div>
    <form>
        <label for="name" class="label1">Name</label>
        <input type="text" id="name" required></input><br/>
        <label for="password" class="label1">Password</label>
        <input type="password" id="password"  required></input><br/>
        <label for="date" class="label1">Date Of Birth</label>
        <input type="date" id="date"  required></input><br/>

        <label for="gender" class="label1">Gender</label>
        <input type="radio" id="male" name="gender"  required></input>
        <label for="male" style={{paddingRight:'20px'}}>Male</label> 
        <input type="radio" id="female" name="gender"  required ></input>
        <label for="female" style={{paddingRight:'20px'}}>Female</label> 
        <input type="radio" id="others" name="gender"  required></input>
        <label for="others">Others</label><br/>

        <label for="mobile" class="label1"  required>Mobile No</label>
        <input type="number" id="mobile"></input><br/>
        <label class="label1">Address</label>
        <textarea id="address"  required></textarea><br/>
       
        <input type='submit' class="btn"></input>
        <input type='reset' class="btn"></input>
        
    </form>
    </>
    
  )
}

export default Form
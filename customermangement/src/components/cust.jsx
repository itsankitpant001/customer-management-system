import React, { useState } from 'react'
import { Add, Delete, First, GetCustomer, Last, Modify, Next, Previous, Search } from './custbll'
import Displaycustomer from './displaycustomer'
import 'bootstrap/dist/css/bootstrap.css'

function Cust() {
    let[Id,setID]=useState('')
    let[Name,setName]=useState('')
    let[Address,setAddress]=useState('')
    let[Mobile,setMobile]=useState('')
    let[arrcus,setarrcus]=useState([])
    function Updatearray() 
    {
      let a= GetCustomer()
      setarrcus(a);
    }
    function set(a)
    {
        setID(a.Id)
        setName(a.Name)
        setAddress(a.Address)
        setMobile(a.Mobile)
        Updatearray() 
    }
    function Add_click()
    {
       Add(Id,Name,Address,Mobile);
       Updatearray() 
    }
    function Delete_click()
    {
        Delete(Id);
        Updatearray()   
    }

    function Modify_click()
    {
        Modify(Id,Name,Address,Mobile)
        Updatearray() 
    }

    function Search_click()
    {
        let a=Search(Id)
      set(a);
    }
    function First_click()
    {
        let a=First()
        set(a)
       
    }
    function Last_click()
    {
        let a=Last()
        set(a)
    }
    function Next_click()
    {
        let a=Next(Id)
        set(a);
    }
    function Previous_click()
    {
       let a=Previous(Id)
       set(a);
    }
    function onchange_ID(e)
    {
      setID(e.target.value)
    }
    function onchange_Address(e)
    {
        setAddress(e.target.value)
    }
    function onchange_Name(e)
    {
        setName(e.target.value)
    }
    function onchange_Mobile(e)
    {
        setMobile(e.target.value)
    }
    return (
        <>
        <div>
           Customer-ID <input type="number" value={Id}  onChange={onchange_ID} />
           <br></br><br></br>
           Customer-Name <input type="text" value={Name} onChange={onchange_Name} />
           <br></br><br></br>
           Customer-Address <input type="text" value={Address} onChange={onchange_Address} />
           <br></br><br></br>
           Customer-Mobile<input type="number" value={Mobile} onChange={onchange_Mobile} />
        </div>
        <div>
            <button onClick={Add_click}>Add</button>
            <button onClick={Delete_click}>Delete</button>
            <button onClick={Modify_click}>Modify</button>
            <button onClick={Search_click}>Search</button>
        </div>
        <div>
            <button onClick={First_click}>First</button>
            <button onClick={Last_click}>Last</button>
            <button onClick={Next_click}>Next</button>
            <button onClick={Previous_click}>Previous</button>
        </div>
        <div>
            <Displaycustomer arrcus={arrcus} Updatearray={Updatearray}/>
        </div>
        </>
    )
}

export default Cust

import React from 'react'
import { Delete } from './custbll'

function Displaycustomer(props) {

    function Delete_click(e)
    {
       Delete(e);
       props.Updatearray();
    }
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {props.arrcus.map((e,index)=>
 <tr>
 <th scope="row">{index+1}</th>
 <td>{e.Id}</td>
 <td>{e.Name}</td>
 <td>{e.Address}</td>
 <td>{e.Mobile}</td>
 <td>{<button onClick={()=>Delete_click(e.Id)} className='btn btn-danger'>Delete</button>}</td>
</tr>)}
  </tbody>
</table>
    )
}

export default Displaycustomer

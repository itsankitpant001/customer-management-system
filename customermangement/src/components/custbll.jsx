var arrcus=[];

export function Add(Id,Name,Address,Mobile)
{
   let a=arrcus.find(e=>e.Id==Id)
   if(a==undefined)
    {
        var arr={Id:Id,Name:Name,Address:Address,Mobile:Mobile};
        arrcus.push(arr);   
    }
    else
    {
         alert("Id is alredy exists")
    }
   
}
export function Delete(Id)
{
   let a=arrcus.find(e=>e.Id==Id)
   
    if(a==undefined)
        {
            alert("Id does not exists")
        }
        else
        {
            let b=arrcus.findIndex(e=>e.Id==Id)
            arrcus.splice(b,1)
            return b;
        }
   
           
           
}
export function Modify(Id,Name,Address,Mobile)
{
    let b=arrcus.find(e=>e.Id==Id)
    if(b==undefined)
        {
            alert("Id does not exists")
        }
        else
        {
        var arr={Id:Id,Name:Name,Address:Address,Mobile:Mobile}
        var a=Delete(Id)
        arrcus.splice(a,0,arr)
        }

}
export function GetCustomer()
{
    return [...arrcus];
}
export function Search(Id)
{
    let b=arrcus.find(e=>e.Id==Id)
    if(b==undefined)
    {
      alert("Id does not exists")
     }
     else{
        let a=arrcus.find(e=>e.Id==Id)
        return a; 
     }
}
export function First()
{
    let a=arrcus[0];
    if(a!=undefined)
    return arrcus[0];
    else
    alert("id does not exixts")
}
export function Last()
{
    let a=arrcus.length;
    if(a==0)
        alert("array is empty")
    else
    return arrcus[a-1];
}
export function Next(Id)
{
    let l=arrcus.length;
    let a=arrcus.findIndex(e=>e.Id==Id)
    if((a+1)==l)
        alert("you are on the last record")
    else
    return arrcus[a+1];
}
export function Previous(Id)
{
   
let a=arrcus.findIndex(e=>e.Id==Id)  
if(a==0)
    alert("you are on the first record")
else
return arrcus[a-1];
}



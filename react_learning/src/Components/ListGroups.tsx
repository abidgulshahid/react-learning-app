
function ListGroups(){
    const Lists  = ['Abid', 'Gul', 'Shahid', 'Marwat']
  
    return (
        <>
    <h1>List</h1>
<ul className="list-group">
    {Lists.map((items) => (<li>{items}</li>))}
</ul>
</>

    )
}

export default ListGroups
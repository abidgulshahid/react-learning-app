import Message from "./Message";
import ListGroups from "./Components/ListGroups";

function App(){
  const Lists  = ['Abid', 'Gul', 'Shahid', 'Marwat']

  return <div><ListGroups Lists={Lists} heading="{HELLO}"/></div>
}

export default App
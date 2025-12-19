import { useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [task, setTask] = useState("");
const [show, setShow] = useState(false);

return (
  <>
    <p>type your name :</p>
    <input onChange={(e) => setTask(e.target.value)} />
    <button onClick={() => setShow(task)}>Show</button>

    {show && <Child name={show} age={18} />}
  </>
);
}

export default App
import {useState} from "react";

function App(){
        const [task,setTask] = useState([])
        const [name , setName] = useState("");
        const [age , setAge] = useState("");
        const [show,setShow] = useState(false)

        function Pop(){
          setTask([name,age])
        }
        
        return(
          <div>
            <p>Enter your Name :</p>
          <input value={name} onChange={(t)=> setName(t.target.value)}/>
          <p>Enter your age :</p>
          <input value={age} onChange={(t)=> setAge(t.target.value)}/>
          <button onClick={Pop}>Click</button>
          <p>{task}</p>
          </div>
        );
}
export default App;
import {useState} from "react";

function App(){
        const [count , counts] = useState(0);

        function increment(){
          counts(count+1);
        }
        function decrement(){
          counts(count-1);
        }
        return(
          <div>
          <p>count {count}</p>
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
          </div>
        );
}
export default App;
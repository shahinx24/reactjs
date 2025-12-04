import { useState } from "react";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };
  document.body.className = darkTheme ? "dark" : "light";

  return (
    <>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </>
  );
}
export default App;
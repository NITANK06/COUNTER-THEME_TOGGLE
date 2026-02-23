import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "blue"));
  };

  return (
    <div className="app-container">
      <h1>Counter + Theme Toggle</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Counter />
    </div>
  );
}

export default App;

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;

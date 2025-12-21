import {useTheme} from "../context/ThemeContext.jsx";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className = "theme-btn" onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} mode
        </button>
    );
};

export default ThemeToggle;
import {useTheme} from "../context/ThemeContext";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className = "theme-btn"onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    );
};

export default ThemeToggle;
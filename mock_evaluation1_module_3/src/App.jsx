import { PostsProvider} from "./context/PostContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import PostList from "./components/PostList";
import ThemeToggle from "./components/themetoggle";
import "./App.css";

const AppContent = () => {

  const { theme } = useTheme();
  return (
    <div className= {`app ${theme}`}>
      <ThemeToggle />
      <PostList />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PostsProvider>
        <AppContent />
      </PostsProvider>
    </ThemeProvider>
  );
};


export default App;

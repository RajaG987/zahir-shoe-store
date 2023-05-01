import './App.css';
import { routes } from './routes';
import { useRoutes } from "react-router-dom";


function App() {
  const pages = useRoutes(routes);
  return <div className="App">{pages}</div>;
}

export default App;

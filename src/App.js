import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import './styles/App.css';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

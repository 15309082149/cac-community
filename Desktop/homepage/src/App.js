import { RouterProvider } from "react-router-dom"
import router from "./route/index"

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

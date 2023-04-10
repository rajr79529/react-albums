import AlbumContainer from "./components/AlbumContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AlbumContainer />
      <ToastContainer />
    </div>
  );
}

export default App;

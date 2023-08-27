import Forms from "./components/Forms/Forms";
import Home from "./components/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/form" element={<Forms/>} />
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

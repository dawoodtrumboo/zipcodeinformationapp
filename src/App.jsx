import Zipcode from "./components/zipcode/Zipcode";
import Location from "./components/Location/Location";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext";



function App() {
  return (
    <LocationProvider>
    <BrowserRouter>
    <div className="h-full">

      <Routes>
        <Route path="/" element={<Zipcode/>}/>
        <Route path="/location" element={<Location/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </LocationProvider>
  );
}

export default App;

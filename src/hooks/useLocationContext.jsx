import { useContext } from "react";
import LocationContext from "../context/LocationContext";

const useLocationContext = () =>{

    return useContext(LocationContext);
}

export default useLocationContext;
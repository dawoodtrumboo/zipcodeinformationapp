import { createContext, useState } from "react";

const LocationContext = createContext({});

export const LocationProvider = ({children}) => {

    
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputValue,setInputValue] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [showAlert, setShowAlert] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries,setCountries] = useState([
        {
            'country' : 'Argentina',
            'value' : 'AR'
        },
        {
            'country' : 'Australia',
            'value' : 'AU'
        },
        {
            'country' : 'Bangladesh',
            'value' : 'BD'
        },
        {
            'country' : 'France',
            'value' : 'FR'
        },
        {
            'country' : 'India',
            'value' : 'IN'
        },
        {
            'country' : 'Japan',
            'value' : 'JP'
        },
        {
            'country' : 'Spain',
            'value' : 'ES'
        },
        {
            'country' : 'United States',
            'value' : 'US'
        },
       
    ])

    return(
    <LocationContext.Provider
    value={{data,setData, loading, setLoading, error, setError, inputValue,setInputValue,hasSearched,setHasSearched, setSelectedCountry, countries, selectedCountry,showAlert, setShowAlert}}>
        {children}
    </LocationContext.Provider>
    )

    

}



export default LocationContext;
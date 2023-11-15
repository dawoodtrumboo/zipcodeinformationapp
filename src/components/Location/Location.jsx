import React,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { locationBg } from '../../assets'
import useLocationContext from '../../hooks/useLocationContext';



import MobileFrame from './MobileFrame';

const Location = () => {

    const navigate = useNavigate();

      // Destructing variables from the Location Context
    const { data,setData, setHasSearched, setInputValue, setSelectedCountry } = useLocationContext();
   
 
    // This useEffect is used for handling error on the location page
    useEffect(() => {
        if (!data) {
            navigate('/');
        }

        return () => {
            setHasSearched(false);
        };
    }, [data, navigate, setHasSearched]);

   

    
//  This function is handling the reset Button
    const handleReset = () => {
        setData(null)
        setSelectedCountry(null)
        setInputValue(null);
        navigate('/');
    }



  return (
    <>
    
    <div className='overflow-hidden relative h-screen flex flex-col gap-[30px] md:gap-[40px] xl:gap-[20px] 2xl:gap-[90px] justify-center items-center bg-cover bg-center'
    style={{backgroundImage: `url(${locationBg})`}}>
    <div className='bg-black w-full h-full bg-opacity-30 absolute top-0 left-0'></div>

        <MobileFrame/>

        <button
          className="bg-[#33c2cc] px-10 py-3 rounded-full font-noto-sans font-semibold text-3xl z-10 text-white animate-bounce"
          onClick={handleReset}
        >
          Reset
        </button>
    </div>
    </>
  )
}

export default Location
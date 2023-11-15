import React,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { locationBg } from '../../assets'
import useLocationContext from '../../hooks/useLocationContext';
import { gsap } from 'gsap';


import MobileFrame from './MobileFrame';

const Location = () => {

    const navigate = useNavigate();

      // Destructing variables from the Location Context
    const { data,setData, setHasSearched, setInputValue, setSelectedCountry } = useLocationContext();


    useEffect(() => {
      const tl = gsap.timeline();
    
      // Animate the Location component
      tl.fromTo('.LocationAnimationClass', 
        { opacity: 50, y: 1200 }, // From
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' } // To
      );
    
      // Animate the MobileFrame component
      tl.fromTo('.MobileFrameClass', 
        { x: '-600%', opacity: 20 }, 
        { x: '0%', opacity: 1, duration: 1.8, ease: 'bounce.out' }, 
        '+=0.2' 
      );

      tl.fromTo('.ButtonAnimationClass', 
    { y: '400%', opacity: 0 }, 
    { y: '0%', opacity: 1, duration: 1, ease: 'bounce.out' }, 
    '+=0.2'
  );
    }, []);
    
 
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
    
    <div className='LocationAnimationClass overflow-hidden relative h-screen flex flex-col gap-[30px] md:gap-[40px] xl:gap-[20px] 2xl:gap-[90px] justify-center items-center bg-cover bg-center'
    style={{backgroundImage: `url(${locationBg})`}}>
    <div className='bg-black w-full h-full bg-opacity-30 absolute top-0 left-0'></div>

      <div className='MobileFrameClass'>
         <MobileFrame/>
      </div>
       

        <button
          className="ButtonAnimationClass bg-[#33c2cc] px-10 py-3 rounded-full font-noto-sans font-semibold text-3xl z-10 text-white"
          onClick={handleReset}
        >
          Reset
        </button>
    </div>
    </>
  )
}

export default Location
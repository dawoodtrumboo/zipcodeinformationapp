import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { background } from '../../assets';
import useLocationContext from '../../hooks/useLocationContext';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { BiSearch } from 'react-icons/bi';
import DropDown from '../DropDown';
import { gsap } from 'gsap';

const Zipcode = () => {

  const navigate = useNavigate();


  // Destructuring variables from the Location Context
  const {
    inputValue,
    setInputValue,
    setLoading,
    setData,
    loading,
    data,
    hasSearched,
    setHasSearched,
    selectedCountry,
    showAlert,
    setShowAlert
  } = useLocationContext();

  
  


  // useEffect is called whenever there is a change in Loading State
  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(`https://api.zippopotam.us/${selectedCountry}/${inputValue}`);
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
          navigate('/location');
        }, 2000); 
      } catch (error) {
        setShowAlert(true)
        setLoading(false)  
      }
    };
  
    if (inputValue && loading) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, inputValue, navigate, setData, setLoading, selectedCountry]);




  // This useEffect is called when the data has been fetched and stored in the state
  useEffect(() => {
    if (!loading && data && hasSearched) {
      gsap.to('.ZipcodeAnimationClass', {
        duration: 1, // Duration of the animation
        opacity: 0, // Fading out
        y: -100, // Moving up
        ease: 'power3.inOut',
        onComplete: () => {
          navigate('/location'); // Navigate after animation completes
        },
      })
    }
  }, [loading, data, hasSearched, navigate]);



  // This function tracks the input of the search bar
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    const maxValue = value.slice(0, 6);
    setInputValue(maxValue);
  };




  // This function handles the search button
  const handleSearchClick = () => {
    if (inputValue) {
      setLoading(true);
      setHasSearched(true);
    }
  };



  return (
    <div
      className="ZipcodeAnimationClass h-screen w-full bg-cover bg-center flex flex-col items-center py-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="uppercase text-white font-noto-sans ">Location Finder</h1>

      <div className="w-[70%] md:w-[40%] space-y-3 mt-[30%] md:mt-[10%]">
        <h2 className='text-white'>Search Location</h2>
        <div>
        <div className="w-full flex items-center border-[1px] text-white rounded-full p-3">
          <BiSearch size={20} />
          <input
            type="number"
            placeholder="Enter Zipcode"
            maxLength="6"
            pattern="\d*"
            value={inputValue || ''}
            onChange={handleInputChange}
            className="w-full bg-transparent focus:outline-none pl-2 appearance-none"
          />
          {loading && (
            <ReactLoading type="spokes" color="#ffffff" height={20} width={20} />
          )}
        </div>
        {showAlert ? 
          selectedCountry?<span className='text-[12px] ml-5 text-red-600 font-poppins tracking-wider'>This pin does not exist in the selected country !</span>
          :<span className='text-[12px] ml-5 text-red-600 font-poppins tracking-wider'>Please select a country!</span>
          :''}

        </div>
        <div className='flex justify-between'>
          <button
            className="bg-[#2498a1] px-5 py-2 text-[12px] md:px-7 md:py-2 rounded-full font-semibold md:text-sm text-white"
            onClick={handleSearchClick}
          >
            Search
          </button>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Zipcode;

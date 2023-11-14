import React from 'react'
import {mobileBg } from '../../assets'
import {FaMapLocationDot}  from 'react-icons/fa6'
import {TbMapPinCode} from 'react-icons/tb';
import useLocationContext from '../../hooks/useLocationContext';
import { useNavigate } from 'react-router-dom';
import PlaceCard from './PlaceCard';

const MobileFrame = () => {

    const navigate = useNavigate();
    const { data } = useLocationContext();

    // This statement is used to handle error
    if (!data) {
        navigate('/');
        return null;
    }

      // Destructing key from data as there was spaces between words

    const {country, 'post code':postCode, 'country abbreviation': abbrevation} = data;



  return (
    <div className='flex flex-col z-10 shadow-gray-600 shadow-2xl items-center text-gray-700 font-noto-sans font-normal w-[300px] h-[600px] rounded-[50px] bg-cover border-[10px] border-black'
    style={{backgroundImage: `url(${mobileBg})`}}>
       <div className=' w-[35%] h-[30px] mt-[10px] bg-black rounded-[50px]'></div>

       <div className='w-full h-full flex flex-col items-center'>
       <div className='w-full flex justify-evenly text-[12px] mt-2 font-semibold'>
       <div className='bg-white border-[1px] rounded-md px-2 py-1 shadow-md flex items-center gap-1'><FaMapLocationDot/>{country} {abbrevation}</div>
           <div className='bg-white border-[1px] rounded-md px-2 py-1 shadow-md flex items-center gap-1'><TbMapPinCode/>{postCode}</div>
       </div>

       <div className='w-[90%] rounded-md bg-white shadow-md px-4 py-1 font-poppins font-semibold mt-[50px] mb-[20px]'>
           Places
       </div>
       <div className='flex flex-col items-center space-y-5 h-[74%] w-[80%] overflow-x-hidden'>
       {data.places.map((place,i) => (
                        <PlaceCard
                        key={i}
                        index={i}
                        name={place['place name']}
                        state={place.state}
                        abbreviation={place['state abbreviation']}
                        longitude={place.longitude}
                        latitude={place.latitude}
                        />
                    ) )}
        </div>

       </div>

   </div>
  )
}

export default MobileFrame
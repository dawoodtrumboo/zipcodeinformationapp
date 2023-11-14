import React from 'react'
import {MdLocationCity} from 'react-icons/md';
import {FaPlaceOfWorship} from 'react-icons/fa';
import {TbWorldLongitude} from 'react-icons/tb';
const PlaceCard = ({name,state,abbreviation,longitude,latitude,index}) => {
  return (
    // <div className='w-full text-start'>
    //                     <div className='relative flex text-[15px]  text-black'>
    //                    <span className='absolute -left-6'>{index+1}.</span> <h4 className='w-[20%]'>Place Name:</h4>
    //                     <p>{name}</p>
    //                     </div>
    //                     <div className='text-[12px]'>
    //                         <div className='flex'>
    //                             <p className='w-[15%]'>State:</p>
    //                             <p>{state} {abbreviation}</p>
    //                         </div>
    //                         <div className='flex'>
    //                             <p className='w-[15%]'>Longitude:</p>
    //                             <p>{longitude}</p>
    //                         </div>
    //                         <div className='flex'>
    //                             <p className='w-[15%]'>Latitude:</p>
    //                             <p>{latitude}</p>
    //                         </div>
    //                     </div>
    //                 </div>

    <div className='w-[90%] bg-white shadow-md h-[100px] rounded-2xl font-poppins flex flex-col gap-2 justify-center px-4 py-2'>
           <div className='flex gap-2 items-center'>
           <MdLocationCity/>
           <span className='text-sm font-semibold'>{name}</span>
           </div>
           <div className='text-[10px]'>
               <div className='flex items-center gap-1'>
               <FaPlaceOfWorship/>
               <p className=' truncate'>{state} {abbreviation}</p>
               </div>
               <div className='flex items-center gap-1'>
                   <TbWorldLongitude/>
                   <p>Logitude : {longitude}</p>
               </div>
               
               <div className='flex items-center gap-1'>
                   <TbWorldLongitude/>
                   <p>Latitude : {latitude}</p>
               </div>
           </div>
       </div>
  )
}

export default PlaceCard
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import useLocationContext from '../hooks/useLocationContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {

    const [selectedOption, setSelectedOption] = useState("Select Country")
    const { countries, setSelectedCountry, selectedCountry, setShowAlert } = useLocationContext();
    console.log(countries)

    const handleSelect = (country) => {   

        setSelectedOption(country.country);
        setSelectedCountry(country.value);
        setShowAlert(false);

    }

    console.log(selectedCountry)

    
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[#2498a1] px-5 py-2 text-[12px] md:px-7 md:py-2 md:text-sm font-semibold text-white shadow-sm hover:bg-[#3ba8b0]">
          {selectedOption}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 h-[150px] origin-top-right rounded-md bg-transparen shadow-xl ring-1 ring-white ring-opacity-20 focus:outline-none overflow-x-scroll">
          <div>

            {countries.map((country,i) => (
                
                <Menu.Item key={i}>
                {({ active }) => (
                  <option
                    onClick={()=>handleSelect(country)}
                    value={country.value}
                    className={classNames(
                      active ? 'bg-[#2498a1] text-white' : 'text-white',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {country.country}
                  </option>
                )}
              </Menu.Item>

            ))}
           
            

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

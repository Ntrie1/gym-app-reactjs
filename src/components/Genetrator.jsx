import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier';

const Header = (props) => {
  const { index, title, description } = props;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-xl sm:texct-base mx-auto'>{description}</p>
    </div>
  )
}



export default function Genetrator() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  

  return ( 
    <SectionWrapper
      header={"generate your workout"}
      title={['It\'s', 'Huge', 'o\'clock']}>

      <Header index={'01'}
        title={'Pick your poison'}
        description={'Select your workout'}
      />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

        {Object.keys(WORKOUTS).map((type, typeIndex) => {

          return (
            <button className='bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'}
        title={'Lock on targets'}
        description={'Select the muscles judged for annihilation'}
      />

      <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
       
          <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
            <p>Select muscles group</p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
        

        {showModal && (
          <div>
            Modal
          </div>
        )}
      </div>

    </SectionWrapper>
  )
}

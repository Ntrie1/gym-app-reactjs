import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout({ workout }) {
  return (
    <SectionWrapper
    id={'workout'}
      header={"Welcome to"}
      title={['The', 'DAMGER', 'zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
         return (
           <ExerciseCard 
           exercise={exercise}
           index={i}
           key={i}
           />
          )
        })}
      </div>
    </SectionWrapper>
  )
}

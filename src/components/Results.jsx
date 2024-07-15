import React from 'react'
import ReactionIcon from '../icons/ReactionIcon'
import MemoryIcon from '../icons/MemoryIcon'
import VerbalIcon from '../icons/VerbalIcon'
import VisualIcon from '../icons/VisualIcon'
import data from '../data/data.json'

const icons = {
  Reaction: ReactionIcon,
  Memory: MemoryIcon,
  Verbal: VerbalIcon,
  Visual: VisualIcon,
};

const colors = {
  Reaction: 'Primary-LightRed',
  Memory: 'Primary-OrageyYellow',
  Verbal: 'Primary-GreenTeal',
  Visual: 'Primary-CobaltBlue',
};

export const Results = () => {
  return (
    <div className='flex flex-col justify-center max-w-lg font-Hanken md:flex-row md:px-80 md:my-40 md:mx-auto'>

      <div className='bg-gradient-to-b from-BGG-LightSlateBlue to-BGG-RoyalBlue flex flex-col text-center py-4 rounded-b-2xl md:rounded-2xl md:py-8'>

        <div className='text-Neutral-LightLavender text-lg font-semibold'>Your Result</div>

        <div className='flex flex-col justify-center items-center bg-gradient-to-b from-BGG-LightSlateBlue to-BGG-RoyalBlue rounded-full md:py-6 py-6 px-8 mx-32 my-6'>

          <div className='text-Neutral-White text-6xl font-bold'>76</div>
          <div className='text-Neutral-LightLavender text-sm'>of 100</div>
        </div>
        <div className='text-Neutral-White text-xl font-semibold mb-2'>Great</div>
        <div className='text-Neutral-LightLavender mx-16 text-sm md:mx-24'>You scored higher than 65% of the people who have taken these tests.</div>
      </div>
      <div className='flex flex-col justify-center gap-4 px-8 py-6 md:pr-8 md:pl-12 md:-ml-4 rounded-xl shadow-lg shadow-y-1 shadow-x-0'>
        <div className='text-Neutral-DarkGrayBlue font-bold'>Summary</div>

        {data.map((item) => {
          const Icon = icons[item.category];
          const colorClass = colors[item.category];
          return (
            <div key={item.category} className={`flex bg-${colorClass}/[0.10] rounded-md items-center py-2 px-4`}>

              <div className='flex gap-2'>
                <Icon />
                <div className={`text-${colorClass} text-sm font-semibold`}>{item.category}</div>
              </div>


              <div className="flex gap-1">
                <div className="text-sm">{item.score}</div>
                <div className="text-sm">/</div>
                <div className="text-sm">100</div>
              </div>

            </div>
          );
        })}

        <div className='bg-Neutral-DarkGrayBlue text-Neutral-White rounded-full text-center text-xs py-3 my-3'>Continue</div>
      </div>
    </div>
  )
}
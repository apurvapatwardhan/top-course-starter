import React from 'react'

function Filter({filterData, category,  filterHandler}) {
  const highlight = 'border-white border-2 border-solid'
  return (
    <div className='w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((filter, idx) => <button onClick={() => filterHandler(filter.title)} className={`bg-bgDark  font-medium rounded-sm px-2 py-4 bor text-white ${category === filter.title ? highlight : null}`} key={filter.id}>{filter.title}</button>)
      }
    </div>
  )
}

export default Filter

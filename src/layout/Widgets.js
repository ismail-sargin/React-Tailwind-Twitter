import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SearchIcon } from '../icons/icon'

const Widgets = () => {
  return (
    <aside>
      <div
        className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark  focus-within:bg-white focus-within:ring-1
          focus-within:ring-primary-base focus-within:text-primary-base"
      >
        <SearchIcon className="w-5 h-5" />
        <input
          type="text "
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full"
        />
      </div>
      <div className="mt-4">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ismlsrgin',
          }}
          options={{
            height: '600',
          }}
        />
      </div>
    </aside>
  )
}

export default Widgets

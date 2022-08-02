import React, { useEffect } from 'react'
import Divider from '../components/divider'
import TweetBox from '../components/tweetbox'
import { PopularIcon } from '../icons/icon'

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopularIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src={require('../images/ismlsrgin.jpg')}
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <div>
          <TweetBox />
        </div>
      </div>
      <Divider />
    </main>
  )
}

export default Content

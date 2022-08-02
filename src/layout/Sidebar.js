import React, { useState } from 'react'
import twitter from '../images/twitter.svg'

import {
  AnketIcon,
  BookmarksIcon,
  CommentIcon,
  EmojiIcon,
  ExploreIcon,
  GifIcon,
  HomeIcon,
  LikeIcon,
  ListsIcon,
  LocationIcon,
  MediaIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  PlanIcon,
  PopularIcon,
  ProfilesIcon,
  RetweetIcon,
  SearchIcon,
  ShareIcon,
} from '../icons/icon'
import Sidelink from '../components/sidelink'
import Userbox from '../components/userbox'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfilesIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]

const Sidebar = () => {
  const [active, setActive] = useState('Home')
  const handleMenuItemClick = (name) => {
    setActive(name)
  }
  return (
    <>
      <div className="h-screen sticky top-0 flex flex-col justify-between w-72">
        <div>
          <div className="mt-1 mb-4 ml-1 flex items-center justify-center  w-12 h-12  rounded-full hover:bg-gray-lightest">
            <img src={twitter} alt="twitter" className="m-9 h-9" />
          </div>

          <nav className="mb-4">
            <ul>
              {sideLinks.map(({ name, icon }) => (
                <Sidelink
                  key={name}
                  name={name}
                  Icon={icon}
                  active={active}
                  onMenuItemClick={handleMenuItemClick}
                />
              ))}
            </ul>
          </nav>
          <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transation-colors duration-200">
            Tweet
          </button>
        </div>
        <div>
          <Userbox />
        </div>
        {/* <HomeIcon />
        <ExploreIcon />
        <NotificationsIcon />
        <MessagesIcon />
        <BookmarksIcon />
        <ListsIcon />
        <ProfilesIcon />
        <MoreIcon /> */}
        {/* <MediaIcon className="w-7 h-7" />
        <GifIcon className="w-7 h-7" />
        <AnketIcon className="w-7 h-7" />
        <EmojiIcon className="w-7 h-7" />
        <PlanIcon className="w-7 h-7" />
        <LocationIcon className="w-7 h-7" />
        <PopularIcon className="w-7 h-7" />
        <SearchIcon className="w-7 h-7" />
        <CommentIcon className="w-7 h-7" />
        <RetweetIcon className="w-7 h-7" />
        <LikeIcon className="w-7 h-7" />
        <ShareIcon className="w-7 h-7" /> */}
      </div>
    </>
  )
}

export default Sidebar

import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'
import PropTypes from 'prop-types';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readTime, setTime] = useState(0);

  const handleMarkAsRead = time => {
    const newTime = readTime + time;
    setTime(newTime);
  }

  return (
    <>
      <div className='px-20 py-8'>
      <Header className="px-20 py-8"></Header>
      </div>
      <div className="flex px-20 items-start">
        <Blogs handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
      <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

App.prototype = {
  Bookmarks: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  readTime: PropTypes.number
}

export default App

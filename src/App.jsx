import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log("Bookmark Adding Soon");
}

  return (
    <>
      <div className='px-20 py-8'>
      <Header className="px-20 py-8"></Header>
      </div>
      <div className="flex px-20">
        <Blogs handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App

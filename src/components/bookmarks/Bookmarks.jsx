import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className="w-1/3 h-auto p-5 my-8">
            <div className='mb-6 p-5 bg-indigo-100 text-xl text-indigo-500 font-bold border-2 border-indigo-500 rounded-xl'>
                <p>Spent time on read : <span>{readTime}</span> min</p>
            </div>
            <div className='p-5 bg-slate-200 rounded-xl'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    // eslint-disable-next-line react/prop-types
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.prototype = {
    bookmarks: PropTypes.object,
    readTime: PropTypes.number
}

export default Bookmarks;
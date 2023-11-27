import PropTypes from 'prop-types';
import { FaBookmark  } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mt-8 mr-4'>
            {/* The image section */}
            <div className='rounded-xl pb-5'>
                <img className='w-full' src={cover} alt={`image of the title ${title}`} />
            </div>
            {/* Author and read time */}
            <div className='flex justify-between pb-5'>
                {/* Author */}
                <div className='flex gap-3 items-center'>
                    <img className='w-16' src={author_img} alt={`image of author ${author}`} />
                    {/* name and publish date */}
                    <div>
                        <p className='text-xl font-bold'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* read time */}
                <div className='flex items-center gap-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='text-green-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            {/* the title section */}
            <div className='pb-5'>
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>
            {/* hashtags */}
            <div className='pb-5'>
                {hashtags.map((hash, idx) => <span className='pr-3' key={idx}>#{hash}</span>)}
            </div>
            {/* mark as read */}
            <div className='pb-5 font-semibold text-[#6047EC]'>
                <p>Mark as read</p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;
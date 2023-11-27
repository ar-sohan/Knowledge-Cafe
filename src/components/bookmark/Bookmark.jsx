import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-2 my-3 rounded-lg">
            <p className='font-semibold text-lg'>{title}</p>
        </div>
    );
};

Bookmark.prototype = {
    bookmark : PropTypes.object
}

export default Bookmark;
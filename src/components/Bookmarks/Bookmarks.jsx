import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 mt-10 pt-4">
            <div className="bg-purple-200 text-purple-600 p-4 text-center rounded-xl ml-4 mb-6 font-semibold">
                <h3 className="text-2xl">Spent time on read: {readingTime} min</h3>
            </div>
            <div className="bg-gray-100 ml-4  p-4 rounded-xl">
                <h2 className="text-3xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;


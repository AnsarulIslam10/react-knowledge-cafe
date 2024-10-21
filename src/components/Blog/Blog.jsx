import PropTypes, { bool } from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time } = blog
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p className='text-gray-500 text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <h3>{reading_time} mins</h3>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
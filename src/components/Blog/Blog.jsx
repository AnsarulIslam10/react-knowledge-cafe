import PropTypes, { bool } from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p className='text-gray-500 text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <h3>{reading_time} min read</h3>
                </div>
            </div>
            <h1>{title}</h1>
            <p className='text-blue-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
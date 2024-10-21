import PropTypes, { bool } from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='pb-10 border-b-2 mt-10 p-4'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p className='text-gray-500 text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h3 className='text-gray-500'>{reading_time} min read</h3>
                    <i className="fa-regular fa-bookmark text-gray-500"></i>
                </div>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-[40px] font-semibold mt-4 mb-4'>{title}</h1>
            <p className='text-gray-500 text-xl'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} </a></span>)
                }
            </p>
            <button className='mt-5 text-blue-600 underline text-xl'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
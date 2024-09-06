import React from 'react'
import watch from '../images/watch.jpg'

const Blogcard = () => {

  const blogPosts = [
    {
      imgSrc: watch,
      title: 'Journal Blog',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum incidunt...',
      comments: 17,
      views: 7341,
      date: '02 Aug',
    }
    
  ];

  return (
    <div>
        {blogPosts.map((post, index) => (
                
                  <div className="card">
                    <img src={post.imgSrc} alt={post.title} />
                    <h5 className="card-header">
                      <i className="fa-solid fa-user"></i> admin
                      <i className="fa-solid fa-comment"></i> {post.comments}
                      <i className="fa-solid fa-eye"></i> {post.views}
                    </h5>
                    <div className="blog-c-b">
                      <h1>{post.title}</h1>
                      <p className="card-text">{post.text}</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                    <span style={{ position: 'absolute', padding: '1rem' }}>
                      <button style={{
                        backgroundColor: '#0D52D6',
                        fontSize: '1.6rem',
                        fontWeight: 500,
                        color: '#F7F7F7',
                        borderRadius: '0.5rem',
                        padding: '2px 5px',
                        border: 'transparent'
                      }}>
                        {post.date.split(' ')[0]} <br /> {post.date.split(' ')[1]}
                      </button>
                    </span>
                  </div>
             
            ))}
    </div>
  )
}

export default Blogcard
const Blog = require('../models/blog')

const initialBlogs = [
  {
    content: 'HTML is Easy',
    important: false,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialNotes, blogsInDb
}

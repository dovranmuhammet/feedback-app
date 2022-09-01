import React from 'react'

// Conditional Rendering

const Main = () => {
  const title = 'Blog Post'
  const body = 'This is my Blog Post'

  const comments = [
    {
      id: 1,
      text: 'Comments One',
    },
    { id: 2, text: 'Comments Two' },
    { id: 3, text: 'Comments Three' },
  ]

  const loading = false
  if (loading) return <h1>Loading...</h1>

  const showPost = true

  const postComments = (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  )

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div className='comments'>
        <h3>Comments({comments.length})</h3>
        {showPost && postComments}
      </div>
    </div>
  )
}

export default Main

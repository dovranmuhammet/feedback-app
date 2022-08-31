import React from 'react'

function App() {
  const title = 'Post Blog'
  const body = 'Wake up Morning'

  const comments = [
    { id: 1, text: 'Comment One' },
    { id: 2, text: 'Comment Two' },
    { id: 3, text: 'Comment Three' },
  ]

  const loading = false

  if (loading) return <h1>Loading...</h1>

  const commentBlock = (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  )

  const showComments = true

  return (
    <div className='container'>
      <h1>{title.toUpperCase()} </h1>
      <p>{body}</p>
      {showComments && commentBlock}
      <div className='comments'>
        <h3>Comments ({comments.length}) </h3>
      </div>
    </div>
  )
}

export default App

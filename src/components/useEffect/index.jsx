import React from 'react';

const PostList = (props) => {
  const { posts } = props
  return (
    <>
      <ul className="post-list">
        {
          posts.map((post, index) => {
            return (
              <li key={ index }>{post.title}</li>
            )
          })
        }
      </ul>
    </>
  );
}


export default PostList;
import React, { useState, FormEvent, ChangeEvent } from 'react';
import CategoryCheckboxes from "../CategoriesCheckboxes";

function FormPost() {
  const [post, setPost] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: post,
        authorEmail: email,
      }),
    });

    const data = await response.json();
    console.log(data);

  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-200 p-4 rounded-lg shadow-md'>
      <h1>
        Add post
      </h1>

      <h2>Choose categories describing your post</h2>

      <CategoryCheckboxes />

      <label>
        Post title <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
      </label>

      <label>
        Your post <textarea value={post} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value)}></textarea>
      </label>

      <label>
        Your email <input type="text" name="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
      </label>

      <button type="submit">Send</button>
    </form>
  )
}

export default FormPost;

import React, { useState, FormEvent, ChangeEvent } from 'react';
import CategoryCheckboxes from "../CategoriesCheckboxes";

function FormPost() {
  const [post, setPost] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedCategories(prev => {
      const updatedCategories = checked ? [...prev, value] : prev.filter(category => category !== value);
      return updatedCategories;
    });
  };

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
    const postId = data.id
    
    selectedCategories.forEach(element => {
      const response_category = fetch('http://localhost:3000/api/CategoryOnPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: postId,
          categoryId: parseInt(element),
        }),
      });
  
      
    });
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-200 p-4 rounded-lg shadow-md'>
      <h1>
        Add post
      </h1>

      <h2>Choose categories describing your post</h2>

      <CategoryCheckboxes onChange={handleCheckboxChange}/>

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

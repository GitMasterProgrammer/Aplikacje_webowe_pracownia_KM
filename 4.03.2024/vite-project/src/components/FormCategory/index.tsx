import React, { useState, FormEvent, ChangeEvent } from 'react';

function FormCategory() {
  const [category, setCategory] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: category,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Add category
      </h1>

        <label>
            Category name <input name='category' type='text' value={category} onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}/>
        </label>

      <button type="submit">Send</button>
    </form>
  )
}

export default FormCategory;

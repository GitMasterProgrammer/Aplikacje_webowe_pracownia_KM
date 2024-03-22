import React, { useState, useEffect, ChangeEvent } from 'react';

interface Category {
  name: string
  id : string
}

interface PropsCheckbox{
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CategoryCheckboxes(props: PropsCheckbox){
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/category')
      .then((response) => response.json())
      .then((data: Category[]) => setCategories(data));
  }, []);


  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <label>
            <input
              type="checkbox"
              name={category.name}
              value={category.id}
              onChange={props.onChange}
            />
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryCheckboxes;

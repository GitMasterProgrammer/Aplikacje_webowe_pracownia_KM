import React, { useState, useEffect, ChangeEvent } from 'react';

interface Category {
  name: string
  id : string
}

const CategoryCheckboxes: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/category')
      .then((response) => response.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );

    console.log(selectedCategories)
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <label>
            <input
              type="checkbox"
              name={category.name}
              value={category.id}
              onChange={handleCheckboxChange}
            />
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryCheckboxes;

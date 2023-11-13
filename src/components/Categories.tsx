import React from 'react';
import Category from './Category';


type Props = {
    categories: string[];
    selectedCategory : string;
    handleClick : (category: string) => void;
}

export default function Categories({categories, selectedCategory, handleClick} : Props) {
    return (
        <ul className='flex'>
            {categories.map((category) => <li onClick={() => handleClick(category)} className={`m-2 py-1 px-4 rounded-2xl border-2 cursor-pointer ${category === selectedCategory ? 'text-white bg-violet-400 border-transparent' : ''}`} key={category}><Category category={category} /></li>)}
        </ul>
    );
}


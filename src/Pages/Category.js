import React from 'react';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';

function Category() {
    const data = {
        'page': ['Category', 'Categories'],
        'head': ['name', 'creation date', 'actions'],
        'size': ['45%', '35%', '20%'],
        'payload': [
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
            ['name', 'name','name'],
        ]
    }
    
  return (
    <>
        <Top page={data.page} />
        <Bottom data={data} />
    </>
  )
}

export default Category

import React from 'react';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';

function Stock() {
  const data = {
    'page': ['Purchase Stock', 'Existing Stock'],
    'head': ['name', 'category', 'cost', 'quantity', 'date', 'action'],
    'size': ['20%', '16%', '16%', '16%', '16%', '16%'],
        'payload': [
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
            ['name', 'name','name', 'name', 'name', 'name'],
      ]
}

  return (
    <div class="main--container">
            <Top page={data.page} />
            <Bottom data={data} />
            
    </div>
  )
}

export default Stock

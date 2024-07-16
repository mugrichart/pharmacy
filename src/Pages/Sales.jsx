import React from 'react';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';

function Sales() {
  const data = {
    'page': ['Sales', 'Existing Sales'],
    'head': ['name', 'quantity', 'unit price', 'total price', 'date', 'action'],
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

export default Sales

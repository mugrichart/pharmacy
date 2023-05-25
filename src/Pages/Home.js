import React from 'react';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';

function Home() {
    const data = {
        'page': ['Dashboard', "Today's Sales"],
        'head': ['medicine', 'quantity', 'total price', 'date'],
        'size': ['25%', '25%', '25%', '25%'],
        'payload': [
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 
            ['name', 'name','name','name',], 

        ]
    }
    
  return (
        <>
            <Top page={data.page} />
            <article class="main--info">
                <div class="main--info-item item1"><span>23</span> Available</div>
                <div class="main--info-item item2"><span>24</span> Expired Medicines</div>
                <div class="main--info-item item3"><span>45</span> Running Out</div>
                <div class="main--info-item item4"><span>101</span> Out of Stock</div>
            </article>
            <Bottom data={data} />
        </>
  )
}

export default Home

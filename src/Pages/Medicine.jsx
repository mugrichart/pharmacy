import React from 'react';
import Top from '../Components/Top';
import Bottom from '../Components/Bottom';

function Medicine() {
    const data = {
        'page': ['Medicine', 'Medicines'],
        'head': ['name', 'category', 'price', 'quantity', 'expiry date', 'action'],
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
            {/* <section class="main--top">
                <h1>Medicine</h1>
                <div class="main--welcome-message">Welcome Mugrich !</div>
            </section> */}
            <Bottom data={data} />
            {/* <article class="main--brief">
                <div class="main--brief-title">Medicines</div>
                <div class="main--brief-stats">
                    <div class="main--brief-head">
                        <ul>
                            {data.head.map((item, index) => {
                                return (
                                    <li 
                                        class={`brief-item item${index}`}
                                        style={ {width: data.size[index]} }
                                    >{item}
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                    <div class="main--brief-content">
                        {data.payload.map((item) => {
                            return <ul>
                                    {item.map((child_item, index) => {
                                    return (
                                    <li 
                                    class={`brief-content item${index}`}
                                    style={{width: data.size[index]}}
                                    >
                                        {child_item}
                                    </li>
                                    )
                                })}
                                    </ul>
                            })
                        }
                    </div>
                </div>
            </article> */}
        </div>
  )
}

export default Medicine

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
import { useLocation } from "react-router-dom"
import Bottom from '../Components/Bottom';
import Top from '../Components/Top';
import page_data from '../pageData.json'

function SinglePage() {
  const { pathname, page_load, page_head, setPage_head, setPage_load } = useGlobalContext();
  const path = useLocation().pathname;
  return (
    (pathname && page_head && page_load) &&
    <>
        <Top page={page_head} />
        { path === "/" &&
          <article class="main--info">
                <div class="main--info-item item1"><span>23</span> Available</div>
                <div class="main--info-item item2"><span>24</span> Expired Medicines</div>
                <div class="main--info-item item3"><span>45</span> Running Out</div>
                <div class="main--info-item item4"><span>101</span> Out of Stock</div>
            </article>
          }
        <Bottom data={page_load} />
    </>

  )

  }


export default SinglePage

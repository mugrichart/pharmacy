import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useGlobalContext } from '../context/context';


function Bottom({data}) {
    const { setShowAddOrEditMed, setAddOrEdit } = useGlobalContext()
    const [top, setTop] = useState(false);
    // const [category, setCategory] = useState('');
    const [edit, setEdit] = useState(false);
    const [deleteWidget, setDeleteWidget] = useState(false);
    const [categoryInputValue, setCategoryInputValue] = useState('New Category')

    const pathname = useLocation().pathname;
    
    const handleCategoryInputChange = (e) => {
        setCategoryInputValue(e.target.value)
    }

    const handleCategorySubmit = (e) => {
        e.preventDefault();
        setTop(false)
    }

    const editCategory = (category) => {
        setCategoryInputValue(category)
    }
    console.log(data)

  return (
    <>
    <article className="main--brief">
                <div className="main--brief-title">
                    {data.page[1]}
                    {pathname !== '/' && 
                        <div className="add-btn" 
                            onClick={() => {setTop(true); console.log('some', deleteWidget)}}
                        >Add New</div>
                    }
                </div>
                <div className="main--brief-stats">
                    <div className="main--brief-head">
                        <ul>
                            {data.head.map((item, index) => {
                                return (
                                    <li 
                                        key={index}
                                        className={`brief-item item${index}`}
                                        style={ {width: data.size[index]} }
                                    >{item}
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                    <div className="main--brief-content">
                        {data.payload.map((item) => 
                            <ul onClick={() => editCategory(item[0])}>
                                    {item.map((child_item, index) => {
                                    return (
                                    <li 
                                    key={`${child_item}${index}`}
                                    className={`brief-content item${index}`}
                                    style={{width: data.size[index]}}
                                    >
                                        {child_item}
                                    </li>
                                    )
                                })}
                                {
                                    pathname !== '/' && 
                                    <li className='brief-content action'>
                                        <div class="edit" onClick={() => {
                                            if (pathname === '/category') {
                                                setEdit(true); setTop(true); setCategoryInputValue();
                                            }
                                            else if (pathname === '/medicine') {
                                                setShowAddOrEditMed(true);
                                                setAddOrEdit('Edit')
                                            }
                                            }}>
                                            edit
                                        </div>
                                        <div class="delete" onClick={() => {
                                            setTop(true);
                                            setDeleteWidget(true);
                                        }}>delete</div>
                                    </li>
                                }
                            </ul>
                        )
                        }
                    </div>
                </div>
    </article>
    <article className='overlay' style={{display: top?'block': null } }>
        <div className="overlay--top">
            {edit?'Edit':deleteWidget? 'Delete' :'Add'} Category
            <div className="overlay--close" onClick={() => setTop(false)}>x</div>
        </div>
        <div className="overlay--main">
            {!deleteWidget && /* showing the form */
            <form action="">
                <label className='overlay-item' htmlFor="">Category</label>
                <input className='overlay-item' type="text" value={ categoryInputValue } onChange={handleCategoryInputChange}/>
                <button className='overlay-item' type='submit' onClick={ handleCategorySubmit}>Save Changes</button>
            </form>
            }
            {deleteWidget && /* showing the delete widget */
            <div className= "delete-widget">
                <div className="delete-message">Are you sure you want to delete?</div>
                <div className="delete-buttons">
                    <div className="yes">Yes</div>
                    <div className="cancel" onClick={() => { setTop(false); setDeleteWidget(false) }}>Cancel</div>
                </div>
            </div>
            }
        </div>
    </article>
    </>
  )
}

export default Bottom

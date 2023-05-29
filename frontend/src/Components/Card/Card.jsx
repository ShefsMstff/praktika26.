import React, { useEffect, useState, } from 'react'
import './Card.scss'
import axios from 'axios'
const Card = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:8080/home").then((res)=>{
            setData(res.data.filter((item)=>item.name.includes(search)));
        });

    },[search]);

  return (
    <div>
        <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value);
        }}
        id='inp' placeholder='search...'/>
        <button id='sortBtn' onClick={(e)=>{
            setData([...data.sort((a,b)=>b.age-a.age)])
        }}
        >Sort by Filter</button>
        <div className="card">
            {
                data.map((item, index)=>{
                    return(
                        <div className="card__item" key={index}>
                 <div className="card__item__img">
                   <img src={item.image} alt="" />
                           </div>
                       <div className="card__item__text">
                           <h2>
                             {item.name}
                              </h2>
                             <span>{item.age} years old</span>
                             </div>
                             <div className="card__item__btn">
                                <button>Add</button>
                                
                                <button onClick={(e)=>{
                                    axios.delete(`http://localhost:8080/home/${item._id}`)
                                    console.log("delete olundu")

                                }}> Delete</button>
                             </div>
                             </div>
                 )
                })
            }
       </div>
    </div>
  )
}

export default Card
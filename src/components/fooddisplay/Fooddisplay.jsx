import React,{ useContext } from 'react'
import Fooditem from '../fooditem/Fooditem'
import './Fooddisplay.css'
import { StoreContext } from '../../context/context'

const Fooddisplay = ({category}) => {

  const {food_list} =useContext(StoreContext);


  return (
    <div className='food-display container'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((items,index)=>{

         
         if(category==="All" || category===items.category){

         
          return(

            <Fooditem key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image} />
          )
        }

        })}
      </div>
      
    </div>
  )
}

export default Fooddisplay

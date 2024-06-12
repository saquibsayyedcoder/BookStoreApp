import React from 'react'

function Cards({ item }) {

  return (
   <>
   <div className='mt-4 my-3 p-3'>
   <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <button className=" btn btn-primary hover:bg-pink-500 hover:text-white py-1 px-2 duration-200 ">Buy Now</button>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards

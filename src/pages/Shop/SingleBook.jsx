import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const {id,bookTitle ,bookDescription,bookPDFURL,imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 flex gap-10 border mx-10 rounded-3xl py-20 shadow-lg shadow-purple-300'>
        <div>
        <img src={imageURL} alt="" className='h-96 w-full'/>
        </div>
        <div className='w-1/2 flex flex-col justify-between'>
          <h1 className='text-3xl font-bold'>Description</h1>
          <p className='mt-10'>{bookDescription}</p>
          <Link to={bookPDFURL} target='_blank' className='px-2 bg-purple-600 w-28 text-center py-1 rounded-full'>Read now</Link>
        </div>
    </div>
  )
}

export default SingleBook;
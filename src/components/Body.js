import React, { useEffect } from 'react'

import { RouterProvider } from 'react-router-dom'
import appRouter from '../routes/appRouter'


const Body = () => {
  
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const Info = () => {
    const {data :session}=useSession();
  return (<div>{session.user.name}
  </div>
   
  )
}

export default Info


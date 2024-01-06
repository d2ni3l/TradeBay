import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function ProfilePic({profilePic} : {profilePic : string}) {
  return (
    <div>
       {
        profilePic ? <FaUser /> : <FaUser />
       }
    </div>
  )
}

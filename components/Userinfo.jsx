'use client';

import React from 'react';
import SigninBtn from './SigninBtn';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import NavBar from './NavBar';

function Userinfo() {

    const {status, date: session} = useSession();
    if(status === 'authenticated'){
        return (
            <div>
                
            </div>
        )
    } else {
       return 
    }
}

export default Userinfo

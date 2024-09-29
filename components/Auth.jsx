"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import LandingPage from './LandingPage';
import Header from './Header';

function Auth() {
  const { status } = useSession();

  // Loading state handling if needed
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  console.log(status);

  // Rendering based on authentication status
  return (
    <>
      {status === 'authenticated' ? (
       <Header/>
      ) : (
        <LandingPage />
        
      )}
    </>
  );
}

export default Auth;

'use client';
import React from 'react';
import logo from '../../../public/next.svg';
import Image from 'next/image';

const SignInMainPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-6">
        <Image src={logo} width={200} height={200} alt="Logo" />
      </div>
    </div>
  );
};

export default SignInMainPage;

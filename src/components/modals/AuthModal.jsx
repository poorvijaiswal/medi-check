"use client";
import React from 'react'
import Login from './login'
import Resetpass from './resetpass'
import { authModalState } from '@/atoms/authModalAtoms';
import { useRecoilValue } from 'recoil';

export default function AuthModal() {
    const view = useRecoilValue(authModalState);
    console.log(view, "authmodal");
    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                {view === 'login' && <Login />}
                {view === 'resetPass' && <Resetpass />}
            </div>
        </div>
    )
}

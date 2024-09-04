"use client";
import { authModalState } from '@/atoms/authModalAtoms'
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

export default function Resetpass() {
    const setAuthState = useSetRecoilState(authModalState);
    const handleclick = () => {
        setAuthState('login');
    }
    return (
        <div>
            <form action="" method='post'>
                <h3 className='text-xl font-medium text-red-600 py-2'>Reset Password</h3>
                <div className="rounded-md shadow-sm pt-2">
                    <p className='text-sm p-4 mb-4'>Forgot your password? Enter your email below. We will send you an email allowing you to reset it</p>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-red-600 focus:border-red-600 focus:z-10 sm:text-sm mb-1"
                            placeholder="Email"
                        />
                    </div>
                    <button type='submit' className='focus:ring-4 w-full p-2 bg-red-600 focus:ring-red-700 rounded-lg mt-4 text-sm text-center font-medium'>Reset Password</button>
                </div>
                <div className="text-sm mt-4" onClick={handleclick} >
                    <a href="#" className="font-medium text-red-900 hover:text-red-600 mt-3">
                        Login
                    </a>
                </div>
            </form>

        </div>
    )
}

"use client";
import { authModalState } from '@/atoms/authModalAtoms';
import React from 'react';
import { useSetRecoilState } from 'recoil';

export default function Login() {
    const setAuthstate = useSetRecoilState(authModalState);
    const handleclick = () => {
        setAuthstate('resetPass');
        console.log('clicked reset pass');
    };
    return (
        <>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg ">

                <div className="flex justify-center mb-4 items-center ">
                    <img
                        src="/mediscan-logo.png"
                        alt="MediScan Logo"
                        className="w-24 h-24"
                    />
                    <h2 className="text-4xl font-bold text-center text-red-600 ml-3">MediScan</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-t-md placeholder-gray-500 focus:outline-none focus:ring-red-600 focus:border-red7ring-red-600 focus:z-10 sm:text-sm mb-1"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-b-md placeholder-gray-500 focus:outline-none focus:ring-red-600 focus:border-red-600 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-red-900 hover:text-red-600" onClick={handleclick}>
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

"use client";
import AuthModal from '@/components/modals/AuthModal';
import React from 'react';
import { RecoilRoot } from 'recoil';


export default function LoginPage() {
  return (
    <>
      <RecoilRoot>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <AuthModal />
        </div>
      </RecoilRoot>
    </>
  );
}


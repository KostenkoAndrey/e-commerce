'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/header';

export interface PageProps {}

const Page = ({}: PageProps) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Page;

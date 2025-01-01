"use client";
import HotKeys from "@/components/option2Page/OptionsSetting/HotKeys";
import { Sidebar } from "@/components/option2Page/Sidebar";
import OptionPageCard from "@/components/optionsPage/OptionPageCard";
import React from "react";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full flex items-center justify-center'>
        <OptionPageCard tabs logo>
          <div className='border-b pb-3'>
            <h1 className='font-semibold text-lg'>Shortcut Keys</h1>
            <p className='text-sm text-[#777]'>
              Set up and manage keyboard shortcuts for faster access.
            </p>
          </div>
          <HotKeys />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;

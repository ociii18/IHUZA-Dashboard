import React, { useState } from 'react'
import { FiPackage, FiMenu, FiX, FiUsers } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";
import { SlLayers } from "react-icons/sl";
import { CgMenuRightAlt } from "react-icons/cg";
import { useTheme } from '../hooks/useTheme';

export default function Sidebar() {
    const { theme } = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <button 
                onClick={toggleSidebar} 
                className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary-800 text-white rounded-md'
            >
                {isSidebarOpen ? <FiX size={20}/> : <FiMenu size={20} />}
            </button>
            
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}
            
            <div className={`
                fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                flex flex-col gap-2 h-screen w-64 p-4 shadow-lg
                bg-secondary-400 dark:bg-gray-800 text-white
            `}>
                <div className='flex items-center gap-2 mb-8'>
                    <div className='flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded'>
                        <FiPackage className='text-2xl' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold text-white dark:text-white'>iHUZA</h1>
                        <p className='text-sm text-gray-200 dark:text-gray-300'>INVENTORY</p>
                    </div>
                </div>
           
                <div className='flex-1'>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 p-2 rounded-md hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer text-white dark:text-gray-200'>
                            <GrPersonalComputer />
                            <span>Dashboard</span>
                        </li>
                        <li className='flex items-center gap-2 p-2 rounded-md hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer text-white dark:text-gray-200'>
                            <FiUsers />
                            <span>Users</span>
                        </li>
                        <li className='flex items-center gap-2 p-2 rounded-md hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer text-white dark:text-gray-200'>
                            <FiPackage />
                            <span>Products</span>
                        </li>
                        <li className='flex items-center gap-2 p-2 rounded-md hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer text-white dark:text-gray-200'>
                            <CgMenuRightAlt />
                            <span>Assignments</span>
                        </li>
                        <li className='flex items-center gap-2 p-2 rounded-md hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer text-white dark:text-gray-200'>
                            <SlLayers />
                            <span>Categories</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
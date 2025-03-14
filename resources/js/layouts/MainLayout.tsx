import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion for smooth animations
import React, { useState } from 'react';
import { FaBars, FaBook, FaClipboardList, FaHome, FaUsers } from 'react-icons/fa';
import { SideBarLayout } from '../../../config/config'; // Adjust path based on your file structure

interface LayoutProps {
    children: React.ReactNode;
}

// Map string icon names to actual icon components
const iconMap = {
    FaHome: <FaHome />,
    FaBook: <FaBook />,
    FaUsers: <FaUsers />,
    FaClipboardList: <FaClipboardList />,
};

// Sidebar Animation Variants
const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    closed: { x: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

// Hamburger Icon Animation Variants
const iconVariants = {
    open: { rotate: 90, transition: { duration: 0.3 } }, // Rotate when open
    closed: { rotate: 0, transition: { duration: 0.3 } },
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // Sidebar active link styling
    const isSidebarActive = (path: string) => (url === path ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200 transition duration-300');

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar with animation */}
            <motion.aside
                initial="closed"
                animate={sidebarOpen ? 'open' : 'closed'}
                variants={sidebarVariants}
                className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg"
            >
                <div className="flex items-center border-b p-5">
                    <h2 className="text-xl font-bold text-blue-600">
                        {SideBarLayout.emoji} {SideBarLayout.sidebarTitle}
                    </h2>
                </div>
                <nav className="mt-6 space-y-2">
                    {SideBarLayout.navItems.map(({ path, label, icon }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`flex items-center space-x-3 rounded-lg px-6 py-3 text-lg font-medium ${isSidebarActive(path)}`}
                            onClick={() => setSidebarOpen(false)} // Auto-close sidebar on click
                        >
                            {iconMap[icon as keyof typeof iconMap]} <span>{label}</span>
                        </Link>
                    ))}
                </nav>
            </motion.aside>

            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black"
                    onClick={toggleSidebar}
                />
            )}

            {/* Main Content */}
            <div className={`flex flex-1 flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
                {/* Navbar */}
                <header className="flex items-center bg-white p-4 shadow-md">
                    <button className="text-gray-600" onClick={toggleSidebar}>
                        <motion.div variants={iconVariants} animate={sidebarOpen ? 'open' : 'closed'}>
                            <FaBars size={24} />
                        </motion.div>
                    </button>
                    <h1 className="ml-4 text-2xl font-semibold text-gray-800">
                        {SideBarLayout.emoji} {SideBarLayout.appName}
                    </h1>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    <div className="rounded-lg bg-white p-8 shadow">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;

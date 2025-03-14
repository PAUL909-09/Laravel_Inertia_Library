// config.ts

export const SideBarLayout = {
    // General
    
    appName: 'Library System',
    sidebarTitle: 'Library',
    emoji: '📚',

    // Navigation Items
    navItems: [
        {
            path: '/',
            label: 'Dashboard',
            icon: 'FaHome',
        },
        {
            path: '/books',
            label: 'Books',
            icon: 'FaBook',
        },
        {
            path: '/users',
            label: 'Users',
            icon: 'FaUsers',
        },
        {
            path: '/borrowing',
            label: 'Borrowing',
            icon: 'FaClipboardList',
        },
    ],
};

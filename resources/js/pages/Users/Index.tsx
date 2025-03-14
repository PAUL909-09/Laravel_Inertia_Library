// import { Link } from '@inertiajs/react';
// import React from 'react';

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// interface UsersIndexProps {
//     users: User[];
// }

// const Index: React.FC<UsersIndexProps> = ({ users }) => {
//     return (
//         <div>
//             <div className="mb-4 flex justify-between">
//                 <h1 className="text-2xl font-bold">Users</h1>
//                 <Link href="/users/create" className="rounded bg-blue-500 px-4 py-2 text-white">
//                     Add User
//                 </Link>
//             </div>
//             <div className="overflow-hidden bg-white shadow sm:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left">Name</th>
//                             <th className="px-6 py-3 text-left">Email</th>
//                             <th className="px-6 py-3 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 bg-white">
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td className="px-6 py-4">{user.name}</td>
//                                 <td className="px-6 py-4">{user.email}</td>
//                                 <td className="px-6 py-4">
//                                     <Link href={`/users/${user.id}/edit`} className="mr-2 text-blue-600">
//                                         Edit
//                                     </Link>
//                                     <Link href={`/users/${user.id}`} method="delete" className="text-red-600">
//                                         Delete
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Index;

// import { useState } from 'react';
// import { Link, useForm } from '@inertiajs/react';
// import BookTable from '@/components/Table/Table';
// import EditUserModal from '@/components/Modal/User/EditUserModal';
// import ConfirmationModal from '@/components/Modal/ConfimationModal';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// interface UsersIndexProps {
//     users: User[];
// }

// const Index: React.FC<UsersIndexProps> = ({ users }) => {
//     const { delete: destroy } = useForm(); // Inertia.js delete function

//     const [selectedUser, setSelectedUser] = useState<User | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

//     const columns = [
//         { key: 'name', label: 'Name' },
//         { key: 'email', label: 'Email' },
//     ];

//     // Handle edit user
//     const handleEdit = (user: User) => {
//         setSelectedUser(user);
//         setIsModalOpen(true);
//     };

//     // Open confirmation modal before delete
//     const handleDelete = (user: User) => {
//         setSelectedUser(user);
//         setIsConfirmationOpen(true);
//     };

//     // Confirm delete
//     const confirmDelete = () => {
//         if (selectedUser) {
//             destroy(`/users/${selectedUser.id}`); // Inertia.js delete request
//             setIsConfirmationOpen(false);
//         }
//     };

//     const actions = (user: User) => (
//         <div>
//             <button onClick={() => handleEdit(user)} className="mr-2 text-blue-600 hover:underline">
//                 <FaEdit size={20} />
//             </button>
//             <button onClick={() => handleDelete(user)} className="text-red-600 hover:underline">
//                 <FaTrash size={20} />
//             </button>
//         </div>
//     );

//     return (
//         <div>
//             <div className="mb-4 flex justify-between">
//                 <h1 className="text-2xl font-bold">Users</h1>
//                 <Link href="/users/create" className="rounded bg-blue-500 px-4 py-2 text-white">
//                     Add User
//                 </Link>
//             </div>

//             <BookTable title="User List" columns={columns} data={users} actions={actions} />

//             {/* Confirmation Modal for Delete */}
//             <ConfirmationModal
//                 isOpen={isConfirmationOpen}
//                 title="Confirm Deletion"
//                 message="Are you sure you want to delete this user?"
//                 onConfirm={confirmDelete}
//                 onCancel={() => setIsConfirmationOpen(false)}
//             />

//             {/* Edit User Modal */}
//             {isModalOpen && selectedUser && <EditUserModal user={selectedUser} onClose={() => setIsModalOpen(false)} />}
//         </div>
//     );
// };

// export default Index;

import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import BookTable from '@/components/Table/Table';
import EditUserModal from '@/components/Modal/User/EditUserModal';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ConfirmationModal from '@/components/Modal/ConfimationModal';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersIndexProps {
    users: User[];
}

const Index: React.FC<UsersIndexProps> = ({ users }) => {
    const { delete: destroy } = useForm();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
    ];

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = (user: User) => {
        setSelectedUser(user);
        setIsConfirmationOpen(true);
    };

    const confirmDelete = () => {
        if (selectedUser) {
            destroy(`/users/${selectedUser.id}`);
            setIsConfirmationOpen(false);
        }
    };

    const actions = (user: User) => (
        <div className="flex space-x-4">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(user)}
                className="rounded-full bg-blue-100 p-2 text-blue-600 transition-all duration-300 hover:bg-blue-200"
            >
                <FaEdit size={18} />
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(user)}
                className="rounded-full bg-red-100 p-2 text-red-600 transition-all duration-300 hover:bg-red-200"
            >
                <FaTrash size={18} />
            </motion.button>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-lg bg-white p-8 shadow-2xl"
        >
            {/* Header Section */}
            <div className="mb-8 flex items-center justify-between border-b pb-6">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    Users
                </motion.h1>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link
                        href="/users/create"
                        className="rounded-lg bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl"
                    >
                        Add User
                    </Link>
                </motion.div>
            </div>

            {/* Users Table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <BookTable title="User List" columns={columns} data={users} actions={actions} />
            </motion.div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isConfirmationOpen}
                title="Confirm Deletion"
                message="Are you sure you want to delete this user?"
                onConfirm={confirmDelete}
                onCancel={() => setIsConfirmationOpen(false)}
            />

            {/* Edit User Modal */}
            {isModalOpen && selectedUser && <EditUserModal user={selectedUser} onClose={() => setIsModalOpen(false)} />}
        </motion.div>
    );
};

export default Index;
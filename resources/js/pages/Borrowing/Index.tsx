import EditModal from '@/components/Modal/Borrowed/EditModal';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Book {
    id: number;
    title: string;
}

interface User {
    id: number;
    name: string;
}

interface Borrowing {
    id: number;
    book: Book;
    user: User;
    borrowed_date: string;
    return_date: string | null;
}

interface BorrowingIndexProps {
    borrowings: Borrowing[];
    books: Book[];
    users: User[];
}

const Index: React.FC<BorrowingIndexProps> = ({ borrowings, books, users }) => {
    const [selectedBorrowing, setSelectedBorrowing] = useState<Borrowing | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-6xl space-y-6 rounded-lg bg-white p-8 shadow-2xl"
        >
            {/* Header Section */}
            <div className="mb-6 flex items-center justify-between border-b pb-6">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    Borrowing Management
                </motion.h1>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link
                        href="/borrowing/create"
                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl"
                    >
                        Add Borrowing
                    </Link>
                </motion.div>
            </div>

            {/* Borrowing Table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Book</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">User</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Borrowed Date</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {borrowings.map((borrowing) => (
                                <tr key={borrowing.id}>
                                    <td className="px-6 py-4 text-sm text-gray-900">{borrowing.book.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{borrowing.user.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{borrowing.borrowed_date}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`font-semibold ${borrowing.return_date ? 'text-green-600' : 'text-red-600'}`}>
                                            {borrowing.return_date ? 'Returned' : 'Not Returned'}
                                        </span>
                                    </td>
                                    <td className="flex items-center gap-4 px-6 py-4">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSelectedBorrowing(borrowing)}
                                            className="rounded-full bg-blue-100 p-2 text-blue-600 transition-all duration-300 hover:bg-blue-200"
                                            title="Edit"
                                        >
                                            <FaEdit size={18} />
                                        </motion.button>
                                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                                            <Link
                                                href={`/borrowing/${borrowing.id}`}
                                                method="delete"
                                                as="button"
                                                className="rounded-full bg-red-100 p-2 text-red-600 transition-all duration-300 hover:bg-red-200"
                                                title="Delete"
                                            >
                                                <FaTrash size={18} />
                                            </Link>
                                        </motion.div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Edit Modal */}
            {selectedBorrowing && <EditModal borrowing={selectedBorrowing} books={books} users={users} onClose={() => setSelectedBorrowing(null)} />}
        </motion.div>
    );
};

export default Index;

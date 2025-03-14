import { motion } from 'framer-motion';
import React from 'react';
import { FaBook, FaBookOpen, FaUsers } from 'react-icons/fa'; // Added FaBookOpen for borrowed books

interface Borrowing {
    id: number;
    book: { title: string };
    user: { name: string };
    borrowed_date: string;
    return_date: string | null;
}

interface DashboardProps {
    borrowings: Borrowing[];
    totalUsers: number;
    totalBooks: number;
    totalBorrowedBooks: number; // Added for currently borrowed books
}

const Dashboard: React.FC<DashboardProps> = ({ borrowings, totalUsers, totalBooks, totalBorrowedBooks }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl space-y-6">
            {/* Stats Container */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white shadow-md"
                >
                    <FaUsers className="text-4xl" />
                    <div>
                        <p className="text-lg font-semibold">Total Users</p>
                        <p className="text-2xl font-bold">{totalUsers}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white shadow-md"
                >
                    <FaBook className="text-4xl" />
                    <div>
                        <p className="text-lg font-semibold">Total Books</p>
                        <p className="text-2xl font-bold">{totalBooks}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white shadow-md"
                >
                    <FaBookOpen className="text-4xl" />
                    <div>
                        <p className="text-lg font-semibold">Borrowed Books</p>
                        <p className="text-2xl font-bold">{totalBorrowedBooks}</p>
                    </div>
                </motion.div>
            </div>

            {/* Borrowed Books Table */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="overflow-hidden rounded-lg bg-white shadow-md"
            >
                <h2 className="border-b p-4 text-xl font-bold">Borrowed Books</h2>
                <table className="w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Book</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Borrowed Date</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Return Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {borrowings.length > 0 ? (
                            borrowings.map((borrowing, index) => (
                                <motion.tr
                                    key={borrowing.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="transition-all hover:bg-gray-100"
                                >
                                    <td className="px-6 py-4">{borrowing.book.title}</td>
                                    <td className="px-6 py-4">{borrowing.user.name}</td>
                                    <td className="px-6 py-4">{borrowing.borrowed_date}</td>
                                    <td className="px-6 py-4">
                                        {borrowing.return_date ? (
                                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">Returned</span>
                                        ) : (
                                            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">Not Returned</span>
                                        )}
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                    No borrowings found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;

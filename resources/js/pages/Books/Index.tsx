import BookTable from '@/components/Table/Table';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
}

interface BooksIndexProps {
    books: Book[];
}

const Index: React.FC<BooksIndexProps> = ({ books }) => {
    const columns = [
        { key: 'title', label: 'Title' },
        { key: 'author', label: 'Author' },
        { key: 'genre', label: 'Genre' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-6xl space-y-6 rounded-lg bg-white p-8 shadow-2xl"
        >
            {/* Header Section */}
            <div className="flex items-center justify-between border-b pb-6">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-bold text-gray-800"
                >
                    📚 Books List
                </motion.h1>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link
                        href="/books/create"
                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl"
                    >
                        <FaPlus size={18} />
                        <span className="font-semibold">Add Book</span>
                    </Link>
                </motion.div>
            </div>

            {/* Books Table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <BookTable
                    title="Available Books"
                    columns={columns}
                    data={books}
                    actions={(book) => (
                        <div className="flex items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                                <Link
                                    href={`/books/${book.id}/edit`}
                                    className="flex items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg"
                                >
                                    <FaEdit size={18} />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                                <Link
                                    href={`/books/${book.id}`}
                                    method="delete"
                                    className="flex items-center justify-center rounded-full bg-red-500 p-3 text-white shadow-md transition duration-300 hover:bg-red-600 hover:shadow-lg"
                                >
                                    <FaTrash size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    )}
                />
            </motion.div>
        </motion.div>
    );
};

export default Index;

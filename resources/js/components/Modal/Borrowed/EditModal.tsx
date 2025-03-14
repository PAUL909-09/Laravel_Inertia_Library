import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

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

interface EditModalProps {
    borrowing: Borrowing;
    books: Book[];
    users: User[];
    onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ borrowing, books, users, onClose }) => {
    const { data, setData, put, errors } = useForm({
        book_id: borrowing.book.id.toString(),
        user_id: borrowing.user.id.toString(),
        borrowed_date: borrowing.borrowed_date,
        return_date: borrowing.return_date || '',
    });

    const toggleReturn = () => {
        setData('return_date', data.return_date ? '' : new Date().toISOString().split('T')[0]);
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/borrowing/${borrowing.id}`, {
            onSuccess: () => onClose(),
        });
    };

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-600">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl"
            >
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Edit Borrowing Record</h2>
                <form onSubmit={submit} className="space-y-6">
                    {/* Book Selection */}
                    <div>
                        <label htmlFor="book_id" className="block text-sm font-medium text-gray-700">
                            Select Book
                        </label>
                        <select
                            id="book_id"
                            value={data.book_id}
                            onChange={(e) => setData('book_id', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a book</option>
                            {books.map((book) => (
                                <option key={book.id} value={book.id}>
                                    {book.title}
                                </option>
                            ))}
                        </select>
                        {errors.book_id && <span className="mt-2 block text-sm text-red-500">{errors.book_id}</span>}
                    </div>

                    {/* User Selection */}
                    <div>
                        <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                            Select User
                        </label>
                        <select
                            id="user_id"
                            value={data.user_id}
                            onChange={(e) => setData('user_id', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a user</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        {errors.user_id && <span className="mt-2 block text-sm text-red-500">{errors.user_id}</span>}
                    </div>

                    {/* Borrowed Date */}
                    <div>
                        <label htmlFor="borrowed_date" className="block text-sm font-medium text-gray-700">
                            Borrowed Date
                        </label>
                        <input
                            type="date"
                            id="borrowed_date"
                            value={data.borrowed_date}
                            onChange={(e) => setData('borrowed_date', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.borrowed_date && <span className="mt-2 block text-sm text-red-500">{errors.borrowed_date}</span>}
                    </div>

                    {/* Return Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Return Status</label>
                        <div className="mt-1 flex items-center space-x-4">
                            <span className={`text-sm font-semibold ${data.return_date ? 'text-green-600' : 'text-red-600'}`}>
                                {data.return_date ? 'Returned' : 'Not Returned'}
                            </span>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={toggleReturn}
                                className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-300 ${
                                    data.return_date ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                }`}
                            >
                                {data.return_date ? 'Mark as Unreturned' : 'Mark as Returned'}
                            </motion.button>
                        </div>
                        {errors.return_date && <span className="mt-2 block text-sm text-red-500">{errors.return_date}</span>}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={onClose}
                            className="rounded-lg bg-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-400"
                        >
                            Cancel
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl"
                        >
                            Update
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default EditModal;

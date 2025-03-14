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

interface CreateProps {
    books: Book[];
    users: User[];
}

interface FormData {
    book_id: string;
    user_id: string;
    borrowed_date: string;
    return_date: string;
    [key: string]: string;
}

const Create: React.FC<CreateProps> = ({ books, users }) => {
    const { data, setData, post, errors } = useForm<FormData>({
        book_id: '',
        user_id: '',
        borrowed_date: '',
        return_date: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/borrowing');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-2xl"
        >
            <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Add New Borrowing Record</h1>
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

                {/* Return Date */}
                <div>
                    <label htmlFor="return_date" className="block text-sm font-medium text-gray-700">
                        Return Date
                    </label>
                    <input
                        type="date"
                        id="return_date"
                        value={data.return_date}
                        onChange={(e) => setData('return_date', e.target.value)}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.return_date && <span className="mt-2 block text-sm text-red-500">{errors.return_date}</span>}
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl"
                >
                    Create Borrowing Record
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Create;

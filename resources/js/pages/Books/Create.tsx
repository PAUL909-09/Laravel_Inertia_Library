// import { useForm } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import React from 'react';

// interface FormData {
//     title: string;
//     genre: string;
//     author: string;
//     isbn: string;
//     publish_date: string;
//     file: File | null;
//     image: File | null;
//     [key: string]: any;
// }

// const Create: React.FC = () => {
//     const { data, setData, post, errors } = useForm<FormData>({
//         title: '',
//         genre: '',
//         author: '',
//         isbn: '',
//         publish_date: '',
//         file: null,
//         image: null,
//     });

//     const submit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         post('/books');
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-2xl"
//         >
//             <h1 className="mb-8 text-3xl font-bold text-gray-800">Add New Book</h1>
//             <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
//                 {/* Title Field */}
//                 <div>
//                     <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                         Title
//                     </label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={data.title}
//                         onChange={(e) => setData('title', e.target.value)}
//                         placeholder="Enter book title"
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.title && <span className="mt-2 block text-sm text-red-500">{errors.title}</span>}
//                 </div>

//                 {/* Genre Field */}
//                 <div>
//                     <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
//                         Genre
//                     </label>
//                     <input
//                         type="text"
//                         id="genre"
//                         value={data.genre}
//                         onChange={(e) => setData('genre', e.target.value)}
//                         placeholder="Enter book genre"
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.genre && <span className="mt-2 block text-sm text-red-500">{errors.genre}</span>}
//                 </div>

//                 {/* Author Field */}
//                 <div>
//                     <label htmlFor="author" className="block text-sm font-medium text-gray-700">
//                         Author
//                     </label>
//                     <input
//                         type="text"
//                         id="author"
//                         value={data.author}
//                         onChange={(e) => setData('author', e.target.value)}
//                         placeholder="Enter author name"
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.author && <span className="mt-2 block text-sm text-red-500">{errors.author}</span>}
//                 </div>

//                 {/* ISBN Field */}
//                 <div>
//                     <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
//                         ISBN
//                     </label>
//                     <input
//                         type="text"
//                         id="isbn"
//                         value={data.isbn}
//                         onChange={(e) => setData('isbn', e.target.value)}
//                         placeholder="Enter ISBN"
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.isbn && <span className="mt-2 block text-sm text-red-500">{errors.isbn}</span>}
//                 </div>

//                 {/* Publish Date Field */}
//                 <div>
//                     <label htmlFor="publish_date" className="block text-sm font-medium text-gray-700">
//                         Publish Date
//                     </label>
//                     <input
//                         type="date"
//                         id="publish_date"
//                         value={data.publish_date}
//                         onChange={(e) => setData('publish_date', e.target.value)}
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.publish_date && <span className="mt-2 block text-sm text-red-500">{errors.publish_date}</span>}
//                 </div>

//                 {/* File Upload Field */}
//                 <div>
//                     <label htmlFor="file" className="block text-sm font-medium text-gray-700">
//                         Upload File (PDF, EPUB, etc.)
//                     </label>
//                     <input
//                         type="file"
//                         id="file"
//                         onChange={(e) => setData('file', e.target.files?.[0] || null)}
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.file && <span className="mt-2 block text-sm text-red-500">{errors.file}</span>}
//                 </div>

//                 {/* Image Upload Field */}
//                 <div>
//                     <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Upload Cover Image
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         accept="image/*"
//                         onChange={(e) => setData('image', e.target.files?.[0] || null)}
//                         className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     />
//                     {errors.image && <span className="mt-2 block text-sm text-red-500">{errors.image}</span>}
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     type="submit"
//                     className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl"
//                 >
//                     Create Book
//                 </motion.button>
//             </form>
//         </motion.div>
//     );
// };

// export default Create;

import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FaBook, FaUser, FaCalendar, FaFilePdf, FaImage, FaPlus } from 'react-icons/fa';

interface FormData {
    title: string;
    genre: string;
    author: string;
    isbn: string;
    publish_date: string;
    file: File | null;
    image: File | null;
    [key: string]: any;
}

const Create: React.FC = () => {
    const { data, setData, post, errors } = useForm<FormData>({
        title: '',
        genre: '',
        author: '',
        isbn: '',
        publish_date: '',
        file: null,
        image: null,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/books');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-2xl"
        >
            <h1 className="mb-8 text-3xl font-bold text-gray-800">Add New Book</h1>
            <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
                {/* Title Field */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        <FaBook className="mr-2 inline-block" /> Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Enter book title"
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <span className="mt-2 block text-sm text-red-500">{errors.title}</span>}
                </div>

                {/* Genre Field */}
                <div>
                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                        <FaBook className="mr-2 inline-block" /> Genre
                    </label>
                    <input
                        type="text"
                        id="genre"
                        value={data.genre}
                        onChange={(e) => setData('genre', e.target.value)}
                        placeholder="Enter book genre"
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.genre && <span className="mt-2 block text-sm text-red-500">{errors.genre}</span>}
                </div>

                {/* Author Field */}
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 inline-block" /> Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={data.author}
                        onChange={(e) => setData('author', e.target.value)}
                        placeholder="Enter author name"
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.author && <span className="mt-2 block text-sm text-red-500">{errors.author}</span>}
                </div>

                {/* ISBN Field */}
                <div>
                    <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
                        <FaBook className="mr-2 inline-block" /> ISBN
                    </label>
                    <input
                        type="text"
                        id="isbn"
                        value={data.isbn}
                        onChange={(e) => setData('isbn', e.target.value)}
                        placeholder="Enter ISBN"
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.isbn && <span className="mt-2 block text-sm text-red-500">{errors.isbn}</span>}
                </div>

                {/* Publish Date Field */}
                <div>
                    <label htmlFor="publish_date" className="block text-sm font-medium text-gray-700">
                        <FaCalendar className="mr-2 inline-block" /> Publish Date
                    </label>
                    <input
                        type="date"
                        id="publish_date"
                        value={data.publish_date}
                        onChange={(e) => setData('publish_date', e.target.value)}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.publish_date && <span className="mt-2 block text-sm text-red-500">{errors.publish_date}</span>}
                </div>

                {/* File Upload Field */}
                <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        <FaFilePdf className="mr-2 inline-block" /> Upload File (PDF, EPUB, etc.)
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setData('file', e.target.files?.[0] || null)}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.file && <span className="mt-2 block text-sm text-red-500">{errors.file}</span>}
                </div>

                {/* Image Upload Field */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        <FaImage className="mr-2 inline-block" /> Upload Cover Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setData('image', e.target.files?.[0] || null)}
                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.image && <span className="mt-2 block text-sm text-red-500">{errors.image}</span>}
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90 hover:shadow-xl"
                >
                    <FaPlus className="mr-2 inline-block" /> Create Book
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Create;
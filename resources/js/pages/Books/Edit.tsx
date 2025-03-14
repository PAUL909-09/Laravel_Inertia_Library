import { useForm } from '@inertiajs/react';
import React from 'react';

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    isbn: string;
    publish_date: string;
    file_path: string | null;
    image_path: string | null;
}

interface EditProps {
    book: Book;
}

interface FormData {
    title: string;
    genre: string;
    author: string;
    isbn: string;
    publish_date: string;
    file: File | null;
    image: File | null;
    [key: string]: string | File | null;
}

const Edit: React.FC<EditProps> = ({ book }) => {
    const { data, setData, put, errors } = useForm<FormData>({
        title: book.title,
        genre: book.genre,
        author: book.author,
        isbn: book.isbn,
        publish_date: book.publish_date,
        file: null,
        image: null,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/books/${book.id}`);
    };

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Edit Book</h1>
            <form onSubmit={submit} encType="multipart/form-data" className="space-y-4">
                <div>
                    <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="w-full rounded border p-2" />
                    {errors.title && <span className="text-red-500">{errors.title}</span>}
                </div>
                <div>
                    <input type="text" value={data.genre} onChange={(e) => setData('genre', e.target.value)} className="w-full rounded border p-2" />
                    {errors.genre && <span className="text-red-500">{errors.genre}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(e) => setData('author', e.target.value)}
                        className="w-full rounded border p-2"
                    />
                    {errors.author && <span className="text-red-500">{errors.author}</span>}
                </div>
                <div>
                    <input type="text" value={data.isbn} onChange={(e) => setData('isbn', e.target.value)} className="w-full rounded border p-2" />
                    {errors.isbn && <span className="text-red-500">{errors.isbn}</span>}
                </div>
                <div>
                    <input
                        type="date"
                        value={data.publish_date}
                        onChange={(e) => setData('publish_date', e.target.value)}
                        className="w-full rounded border p-2"
                    />
                    {errors.publish_date && <span className="text-red-500">{errors.publish_date}</span>}
                </div>

                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData('image', e.target.files?.[0] || null)}
                        className="w-full rounded border p-2"
                    />
                    {errors.image && <span className="text-red-500">{errors.image}</span>}
                </div>
                <div>
                    <input type="file" onChange={(e) => setData('file', e.target.files?.[0] || null)} className="w-full rounded border p-2" />
                    {errors.file && <span className="text-red-500">{errors.file}</span>}
                </div>
                <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default Edit;

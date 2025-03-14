import { useForm } from '@inertiajs/react';
import React from 'react';

interface FormData {
    name: string;
    email: string;
    [key: string]: any;
}

const Create: React.FC = () => {
    const { data, setData, post, errors } = useForm<FormData>({
        name: '',
        email: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/users');
    };

    return (
        <div className="mx-auto max-w-2xl p-6 bg-white shadow-md rounded-lg">
            <h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">Add New User</h1>
            <form onSubmit={submit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Name"
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                    />
                    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        className="w-full rounded border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                    />
                    {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                </div>
                <button type="submit" className="w-full rounded bg-blue-500 px-4 py-3 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Create User
                </button>
            </form>
        </div>
    );
};

export default Create;

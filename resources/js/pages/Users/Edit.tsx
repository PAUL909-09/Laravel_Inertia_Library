import { useForm } from '@inertiajs/react';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface EditProps {
    user: User;
}

interface FormData {
    name: string;
    email: string;
    [key: string]: any;
}

const Edit: React.FC<EditProps> = ({ user }) => {
    const { data, setData, put, errors } = useForm<FormData>({
        name: user.name,
        email: user.email,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Edit User</h1>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="w-full rounded border p-2" />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>
                <div>
                    <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="w-full rounded border p-2" />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                    Update User
                </button>
            </form>
        </div>
    );
};

export default Edit;

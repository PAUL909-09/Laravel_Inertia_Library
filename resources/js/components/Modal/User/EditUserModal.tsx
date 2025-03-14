
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import ConfirmationModal from '../ConfimationModal';

interface User {
    id: number;
    name: string;
    email: string;
}

interface EditUserModalProps {
    user: User;
    onClose: () => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose }) => {
    const { data, setData, put, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const [showConfirm, setShowConfirm] = useState(false);

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const confirmUpdate = () => {
        put(`/users/${user.id}`, {
            onSuccess: () => {
                setShowConfirm(false);
                onClose();
            },
        });
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="relative w-full max-w-md rounded-2xl border border-white/30 bg-white/80 p-6 shadow-xl backdrop-blur-lg"
                >
                    {/* Modal Header */}
                    <div className="mb-4 flex items-center justify-between border-b pb-3">
                        <h2 className="text-lg font-semibold text-gray-800">Edit User</h2>
                        <button onClick={onClose} className="text-gray-500 transition hover:text-gray-700">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <form onSubmit={handleUpdate} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
                            Update
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showConfirm}
                title="Confirm Update"
                message="Are you sure you want to update this user?"
                onConfirm={confirmUpdate}
                onCancel={() => setShowConfirm(false)}
            />
        </>
    );
};

export default EditUserModal;

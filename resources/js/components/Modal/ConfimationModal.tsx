import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
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
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <button onClick={onCancel} className="text-gray-500 transition hover:text-gray-700">
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Content */}
                <p className="text-center text-gray-700">{message}</p>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                    <button onClick={onCancel} className="rounded-lg bg-gray-200 px-4 py-2 text-gray-600 transition hover:bg-gray-300">
                        No
                    </button>
                    <button onClick={onConfirm} className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                        Yes
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ConfirmationModal;

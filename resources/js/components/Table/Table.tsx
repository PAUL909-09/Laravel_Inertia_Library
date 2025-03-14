import { motion } from 'framer-motion';
import React from 'react';

interface TableProps {
    title?: string;
    columns: { key: string; label: string }[];
    data: Record<string, any>[];
    actions?: (item: any) => React.ReactNode;
}



const BookTable: React.FC<TableProps> = ({ title, columns, data, actions }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="overflow-hidden rounded-lg bg-white shadow-md"
        >
            {title && <h2 className="border-b p-4 text-lg font-semibold">{title}</h2>}

            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="px-6 py-3 text-left text-sm font-semibold">
                                {col.label}
                            </th>
                        ))}
                        {actions && <th className="px-6 py-3 text-sm text-left font-semibold">Actions</th>}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <motion.tr
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, backgroundColor: '#f9f9f9' }}
                                className="transition-all"
                            >
                                {columns.map((col) => (
                                    <td key={col.key} className="px-6 py-4">
                                        {item[col.key]}
                                    </td>
                                ))}
                                {actions && <td className="space-x-2 px-6 py-4">{actions(item)}</td>}
                            </motion.tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">
                                No records available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </motion.div>
    );
};

export default BookTable;

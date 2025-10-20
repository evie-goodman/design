// src/components/ComponentName.tsx
import { motion } from 'framer-motion';

type Props = {
    title?: string;
    description?: string;
};

export default function ComponentName({ title, description }: Props) {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-gray-600 mb-8">{description}</p>}

            <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* animated component logic */}
                <p className="text-center">Animation goes here.</p>
            </motion.div>
        </section >
    );
}

import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

export default function ServiceCard({ icon, title, description, highlights }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06, boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl cursor-pointer transition"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-blue-500 w-12 h-12 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-blue-700 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>

        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          {highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

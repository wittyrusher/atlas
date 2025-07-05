import { motion } from 'framer-motion';

export default function PageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
        Explore Our Exclusive Travel Packages
      </h2>
      <p className="text-lg max-w-xl mx-auto text-blue-900/80">
        Whether you seek relaxation, adventure, culture, or luxury, we have a package tailored just for you.
      </p>
    </motion.div>
  );
}

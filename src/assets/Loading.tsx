import { motion } from "framer-motion"

function Loading() {
    return (
    <div className={`flex flex-row gap-x-1`}>
        <motion.span
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className={`size-1 bg-white rounded-full`}
        />

        <motion.span
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.15 }}
            className={`size-1 bg-white rounded-full`}
        />

        <motion.span
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            className={`size-1 bg-white rounded-full`}
        />
    </div>
)}

export default Loading
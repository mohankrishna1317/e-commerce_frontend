import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import the video file
import mlkVideo from "@/assets/mlk_gif video.mp4";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        // The video length might be different, but user simulated a "gif" feel.
        // We can keep the 2.5s or adjust. The user said "opening before like if loading".
        // I'll keep the same timing logic for now, but ensure video plays.
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 4000); // 4 seconds might be better to see the video content

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: exit ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <div className="relative flex flex-col items-center w-full h-full justify-center">
                {/* Video Background or Center Element - "small video gif" implies centered small or medium size */}
                <video
                    src={mlkVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full max-w-md md:max-w-xl object-contain"
                />
            </div>
        </motion.div>
    );
};

export default Preloader;

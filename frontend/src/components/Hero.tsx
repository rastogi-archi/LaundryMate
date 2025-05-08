import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeInOut",
        },
    }),
};

const Hero = () => {
    return (
        <div
            className="flex flex-col-reverse lg:flex-row items-center lg:items-start py-12 bg-white dark:bg-gray-900"
            style={{
                backgroundImage: "url('background.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2 px-4 md:px-12 lg:px-16 xl:px-34"
            >
                <div className="max-w-3xl mx-auto text-center lg:text-left mb-8">
                    <motion.p
                        variants={fadeIn}
                        custom={1}
                        className="text-sm uppercase tracking-widest text-blue-700 font-medium"
                    >
                        Hassle-Free Laundry
                    </motion.p>

                    <motion.h1
                        variants={fadeIn}
                        custom={2}
                        className="text-4xl md:text-5xl font-bold text-[#032b56] leading-snug mb-4"
                    >
                        Reserve your washing machine in seconds
                    </motion.h1>

                    <motion.p
                        variants={fadeIn}
                        custom={3}
                        className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6"
                    >
                        No queues, no confusion. Just tap, reserve, and wash. <br className="hidden sm:inline" />
                        Your floor, your machine, your time.
                    </motion.p>

                    <motion.div
                        variants={fadeIn}
                        custom={4}
                        className="flex justify-center lg:justify-start mb-6"
                    >
                        <Link to={"/book-machine"}>
                            <Button className="flex items-center gap-2 bg-[#032b56] text-white rounded-full text-base font-semibold shadow-md hover:bg-[#04396b] transition px-6 py-3 cursor-pointer">
                                Reserve Now
                                <ChevronRight size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn}
                    custom={5}
                    className="flex flex-wrap justify-center lg:justify-start gap-4"
                >
                    {["L1.png", "L2.png", "L3.png"].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Laundry ${i + 1}`}
                            className="h-24 sm:h-28 w-24 sm:w-28 rounded-full object-cover p-2 shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                            style={{
                                backgroundColor: ["#fce4ec", "#e3f2fd", "#fff3e0"][i],
                            }}
                        />
                    ))}
                </motion.div>
            </motion.section>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2 px-6 md:px-12 lg:px-16 xl:px-24 mb-10 lg:mb-0 flex justify-center"
            >
                <img
                    src="Laundry3.png"
                    alt="Main Laundry Visual"
                    className="w-full h-auto max-h-[450px] object-contain"
                />
            </motion.div>
        </div>
    );
};

export default Hero;

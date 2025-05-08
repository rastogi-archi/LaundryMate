import { motion } from "motion/react"

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };
  

const WhyChoose = () => {

  const features = [
    {
      icon: "📅",
      title: "Smart Scheduling",
      desc: "Say goodbye to queues. Easily reserve washing machines ahead of time and manage your schedule on the go.",
    },
    {
      icon: "📱",
      title: "Real-Time Updates",
      desc: "Get notified the moment a machine is free or your laundry is done. Stay in control from anywhere.",
    },
    {
      icon: "🤝",
      title: "Fair Usage System",
      desc: "Automatic limits and reminders promote fair access for everyone—no more missed turns or monopolized machines.",
    },
  ]
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Why Choose <span className="text-blue-600">LaundryMate</span>?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
          Enjoy a modern, stress-free laundry experience with features designed to save your time,
          reduce friction, and ensure fairness for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

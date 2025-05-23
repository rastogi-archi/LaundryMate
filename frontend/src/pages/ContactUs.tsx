import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {

  const handlSubmit =() => {
    
  }

  return (
    <section className="bg-white dark:bg-gray-900 mt-10 sm:mt-15 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-12 items-center">
        {/* Left: Heading and image */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#032b56] dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Have questions, feedback, or need help? We're here for you.
          </p>
          <img src="Contact.png" alt="Contact Illustration" className="w-full max-w-md mx-auto lg:mx-0" />
        </div>

        {/* Right: Contact form */}
        <form className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg" onSubmit={handlSubmit}>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </Label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            />
          </div>

          <div className="text-center lg:text-left">
            <Button
              type="submit"
              className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

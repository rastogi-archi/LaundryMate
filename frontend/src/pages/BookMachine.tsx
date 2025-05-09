import React, { useState } from 'react';

export default function WashingMachineBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    machine: '',
    date: '',
    time: '',
  });

  const handleChange = () => {
  };

  const handleSubmit = () => {
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-400 text-white flex flex-col justify-center items-center p-10 space-y-4">
          <h2 className="text-4xl font-bold text-center animate-fade-in-down">
            Book Your Washing Slot
          </h2>
          <p className="text-center text-sm text-blue-100 max-w-xs animate-fade-in-up">
            Avoid the rush—reserve your preferred machine & time with ease!
          </p>
          <img
            src="bookMachine.jpeg"
            alt="Washing Machine"
            className="w-full max-w-xs rounded-xl shadow-lg border-2 border-white mt-4 animate-fade-in"
          />
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 p-8 sm:p-10 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Machine Number</label>
              <select
                name="machine"
                value={formData.machine}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              >
                <option value="">--Select Machine--</option>
                <option value="1">Machine 1</option>
                <option value="2">Machine 2</option>
                <option value="3">Machine 3</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Time Slot</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02]"
            >
              Book Slot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Contact Me Button */}
      <button onClick={toggleModal} className="btn btn-primary">
        Contact Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-semibold">Contact Me</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700">
                ✖
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" className="input input-bordered w-full mt-1" placeholder="Your Name" />

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Email</label>
              <input type="email" className="input input-bordered w-full mt-1" placeholder="Your Email" />

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">Message</label>
              <textarea className="textarea textarea-bordered w-full mt-1" placeholder="Your Message"></textarea>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex justify-end space-x-3">
              <button onClick={toggleModal} className="btn btn-ghost">
                Cancel
              </button>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;

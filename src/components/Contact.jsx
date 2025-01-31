const Contact = ({ closeModal }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
          
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Contact Me</h2>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 cursor-pointer">
              ✖
            </button>
          </div>
  
          {/* Modal Body */}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" className="input input-bordered w-full mt-1" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="input input-bordered w-full mt-1" placeholder="Your Email" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea className="textarea textarea-bordered w-full mt-1" placeholder="Your Message"></textarea>
            </div>
          </div>
  
          {/* Modal Footer */}
          <div className="mt-4 flex justify-end space-x-3">
            <button onClick={closeModal} className="btn btn-ghost">
              Cancel
            </button>
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
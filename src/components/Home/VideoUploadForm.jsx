import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function VideoUploadForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    shortDescription: '',
    fullDescription: '',
    videoFile: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      videoFile: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle the form submission
    // like sending data to an API
    
    // Close the form after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
          <h2 className="text-lg font-semibold text-center mb-6">إضافة فيديو</h2>
          
          {/* Form fields remain the same */}
          <div>
            <label className="block text-sm mb-1 text-right">عنوان الفيديو</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="اسم الفيديو"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-right">وصف قصير للفيديو</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1 text-right">وصف الفيديو</label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
            />
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="videoUpload"
              name="videoFile"
              onChange={handleFileChange}
              className="hidden"
              accept="video/*"
            />
            <label 
              htmlFor="videoUpload" 
              className="cursor-pointer flex flex-col items-center justify-center text-gray-500"
            >
              <Upload className="mb-2" size={24} />
              <span>تحميل الفيديو</span>
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
          >
            إرسال الملفات
          </button>
        </form>
      </div>
    </div>
  );
}
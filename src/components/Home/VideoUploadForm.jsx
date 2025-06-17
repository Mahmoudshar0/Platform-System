import { Upload } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function VideoUploadForm({ onClose, }) { // أضف courseId كـ prop
  const initialValues = {
    title: '',
    order: '',
    description: '',
    video: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('العنوان مطلوب'),
    order: Yup.number().required('الترتيب مطلوب').typeError('الترتيب يجب أن يكون رقماً'),
    description: Yup.string().required('الوصف مطلوب'),
    video: Yup.mixed().required('يرجى تحميل ملف الفيديو'),
  });
  const token = Cookies.get('token');
  console.log(token)
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('order', values.order);
    formData.append('description', values.description);
    formData.append('video', values.video);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/courses/${123}/videos`, // أضف courseId إلى المسار
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        alert('تم رفع الفيديو بنجاح');
        onClose();
      } else {
        throw new Error('فشل التحميل');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`حدث خطأ أثناء رفع الفيديو: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative" dir="rtl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="space-y-4">
              <h2 className="text-lg font-semibold text-center mb-6">إضافة فيديو</h2>

              {/* باقي الحقول كما هي */}
              <div>
                <label className="block text-sm mb-1">عنوان الفيديو</label>
                <Field
                  name="title"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="عنوان الفيديو"
                />
                {touched.title && errors.title && (
                  <div className="text-red-500 text-sm">{errors.title}</div>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">ترتيب الفيديو</label>
                <Field
                  name="order"
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="مثلاً 1 أو 2"
                />
                {touched.order && errors.order && (
                  <div className="text-red-500 text-sm">{errors.order}</div>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">وصف الفيديو</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 h-20"
                />
                {touched.description && errors.description && (
                  <div className="text-red-500 text-sm">{errors.description}</div>
                )}
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={(e) => setFieldValue('video', e.currentTarget.files[0])}
                  className="hidden"
                  id="videoUpload"
                />
                <label htmlFor="videoUpload" className="cursor-pointer flex flex-col items-center text-gray-500">
                  <Upload className="mb-2" size={24} />
                  <span>تحميل الفيديو</span>
                </label>
                {touched.video && errors.video && (
                  <div className="text-red-500 text-sm mt-2">{errors.video}</div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                إرسال الفيديو
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
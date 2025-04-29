export const data = {
  courses: [
    {
      id: 1,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      id: 2,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      id: 3,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'error',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      id: 4,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      id: 5,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'error',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      id: 6,
      title: 'أساسيات البرمجة',
      lectureNumber: 'المحاضرة الأولى: أساسيات البرمجة',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/6195666/pexels-photo-6195666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      instructor: {
        name: 'د. محمد عبد الحميد',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    }
  ],
  statusTypes: {
    completed: {
      icon: '✓',
      text: 'تم الرفع',
      className: 'status-completed'
    },
    error: {
      icon: '✕',
      text: 'حدث خطأ',
      className: 'status-error'
    },
    processing: {
      icon: '⟳',
      text: 'جاري المعالجة',
      className: 'status-processing'
    }
  },
  filters: [
    {
      id: 'all',
      label: 'جميع العناصر'
    },
    {
      id: 'completed',
      label: 'تم الرفع'
    },
    {
      id: 'error',
      label: 'حدث خطأ'
    }
  ]
};
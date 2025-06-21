export default function AddLive() {
  return (
   <div className="lg:w-[calc(100%-240px)] min-h-screen bg-gray-100 font-sans" dir="rtl" lang="ar">
       <nav className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-gray-200 gap-4 md:gap-0">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="border border-gray-300 rounded-md px-3 py-2 text-sm flex items-center gap-1 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
</svg>فلترة
          </button>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="بحث..."
              className="w-full border border-gray-300 rounded-md py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-400 text-sm"></i>
          </div>
        </div>

        <a href="./live" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
          + إضافة بث جديد
        </a>
      </nav>

      {/* محتوى البث */}
      <div className="px-6 py-6  ">
        <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 max-w-4xl mx-auto">
          <div className="relative video-container w-full min-h-[200px]">
            <img src="" alt="Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end">
              <div className="h-1 bg-red-600 w-[70%]"></div>
              <div className="flex justify-between items-center px-4 py-2 text-white text-sm">
                <span className="bg-red-600 px-2 py-0.5 rounded">مباشر • 01:45</span>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <i className="fas fa-eye"></i>
              <span>167</span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1">محاضرة الأول</h3>
            <p className="text-sm text-gray-500">هياكل بيانات موضوع Tree</p>
          </div>
        </div>
      </div>
    </div>
  );
}

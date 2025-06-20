export default function ListTests() {

  //static data
  const tests = [
    { status: "done", time: "06:00", label: "الاختبار الأول", title: "المعادلات التفاضلية" },
    { status: "fail", time: "انتهى الوقت", label: "الاختبار الأول", title: "المعادلات التفاضلية" },
    { status: "done", time: "06:00", label: "الاختبار الأول", title: "المعادلات التفاضلية" },
    { status: "done", time: "06:00", label: "الاختبار الأول", title: "المعادلات التفاضلية" }
  ];

  return (
    <div className="p-4 lg:ms-15 lg:max-w-7xl   text-sm font-sans">
 <div className="border-b border-gray-200 pb-2 font-bold  flex flex-row-reverse items-center gap-2 text-xs mb-4">
   <a href="../UserDashboard" className="text-gray-500 hover:underline">الصفحة الرئيسية</a>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>

   <a href="#" className="text-[#4253F0] font-bold">الاختبارات</a>
</div>

 <div className="bg-green-100 border border-green-500 rounded px-4 py-2 mb-6 flex items-center justify-between   gap-6   flex-row-reverse">
   <p className="text-sm font-medium">
    النتيجة النهائية للاختبارات: <span className="font-bold">80%</span> من <span className="font-bold">$100</span>
  </p>

   <div className="flex gap-5">
    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
      اختبار جديد
    </button>
    <button className="border border-gray-400 text-gray-800 px-3 py-1 rounded hover:bg-gray-100 transition flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

      إعادة المحاولة
    </button>
  </div>
</div>


       <div className="grid grid-cols-2 gap-4 mb-6 text-center text-sm">
        <div className="bg-gray-100 py-10 rounded">
          <p className="text-green-600 font-bold text-[40px]">12</p>
          <p className="text-[12px]">عدد الاختبارات الصح</p>
        </div>
        <div className="bg-gray-100 py-10 rounded">
          <p className="text-red-600 font-bold text-[40px]">5</p>
          <p className="text-[12px]">عدد الاختبارات الخطأ</p>
        </div>
      </div>

       <div className="space-y-3">
        {tests.map((test, index) => (
          <div key={index} className="flex items-center gap-2 bg-white rounded shadow-sm p-3">
             <div className={`min-w-[70px] h-[50px] flex items-center justify-center text-[12px] font-bold rounded-full text-white ${
              test.status === "done" ? "bg-green-600" : "bg-red-600"
            }`}>
              {test.time}
            </div>

             <button className="bg-green-500 text-white text-xs px-3 py-1 rounded border border-green-600 hover:bg-green-600">
              بدء الاختبار
            </button>

             <div className="text-right flex-1 overflow-hidden">
              <p className="font-medium text-sm truncate">{test.label} - {test.title}</p>
              <p className="text-[11px] text-gray-500 truncate">عدد الأسئلة: 10 | المدة: 45 دقيقة</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

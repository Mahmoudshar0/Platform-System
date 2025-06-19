import React, { useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SubmitAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, date: '2 / 4 / 2025', user: 'عبد العزيز صفا', marked: false },
    { id: 2, date: '2 / 4 / 2025', user: 'عبد العزيز صفا', marked: true },
    { id: 3, date: '2 / 4 / 2025', user: 'عبد العزيز صفا', marked: false },
  ]);

  const total = assignments.length;
  const completed = assignments.filter(a => a.marked).length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans text-right" dir="rtl">
 <div className="border-b border-gray-200 pb-2 flex flex-row-reverse items-center gap-2 mb-6 text-sm justify-end w-full">
       <a href="#" className="text-[#4253F0] font-bold">تقديم الواجبات</a>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
     <a href="../UserDashboard" className="text-gray-500 hover:underline">الصفحة الرئيسية</a>
 

</div>

       <div className="mx-auto   flex flex-row-reverse items-center justify-between bg-white p-6 rounded-xl shadow-2xs max-w-2xl mb-8">
        <div className="flex  flex-col text-sm text-gray-700 text-right space-y-2">
  <p>
    الواجبات المكتملة:
    &nbsp;<span className="text-[#4253F0] font-bold text-lg">{completed}</span>
  </p>

  <p>
    الواجبات الغير مكتملة:
    &nbsp;<span className="text-[#4253F0] font-bold text-lg">{total - completed}</span>
  </p>

  <p>
    نسبة تقدم الواجبات:
    &nbsp;<span className="text-[#4253F0] font-bold text-xl">{percentage}</span>
    <span className="text-[#4253F0] font-bold text-lg">%</span>
  </p>
</div>


         <div className="w-50 h-30">
          <CircularProgressbarWithChildren
            value={percentage}
            maxValue={100}
            strokeWidth={10}
            circleRatio={0.5}
            styles={buildStyles({
              rotation: 0.75,
              strokeLinecap: "round",
              pathColor: "#4253F0",
              trailColor: "#E5E7EB",
            })}
          >
            <div className="text-center mt-2">
              <div className="text-5xl mb-15 font-bold text-[#4253F0]">{percentage}%</div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

       <div className="mt-8 space-y-4">
        {assignments.map((item) => (
          <div
            key={item.id}
            className="flex flex-row-reverse justify-between items-center bg-[#FAFAFA] p-4 rounded-lg shadow-sm"
          >
             <div className="flex flex-col items-center gap-1">
              <button className="bg-[#4253F0] text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#3648c9] cursor-pointer">
                تسليم الواجب
              </button>
              <a href="#" className="text-[#4253F0] text-xs hover:underline">عرض الواجب</a>
            </div>

             <div className="text-center text-xs bg-[#FAFAFA] rounded-md px-2 py-1">
              <div className="bg-[#EDEDED] rounded-md px-2">موعد التسليم</div>
              <div className="text-[#4253F0] mt-1">{item.date}</div>
            </div>

             <div className="flex flex-row-reverse items-center text-sm text-right max-w-md">
              <div>
                <div className="font-bold">{item.user}</div>
                <div className="text-gray-500 text-xs">مادة أساسيات البرمجة</div>
                <div className="text-gray-500 text-xs mt-1">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.
                </div>
              </div>
               
                  <img
                src="data:image/jpeg;base64,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"
                alt="User"
                className="ml-3 w-10 h-10 rounded-full"
               
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

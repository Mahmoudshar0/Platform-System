import avatar from "/images/Image-60.png";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Received(data) {
   return (
      <div dir="rtl" className="flex items-center justify-between p-2.5">
         <div className="flex items-center justify-center gap-x-2.5">
            <input type="checkbox" className="w-5 form-checkbox" />
            <img src={avatar} alt="User Avatar" width="50" className="rounded-full"/>
            <div className="text-xs">
               <p className="font-bold">
                  {data.studentName}
               </p>
               <p className="text-gray-500" >{data.studentRole}</p>
            </div>
         </div>
         <div className="flex gap-3 text-xs">
            <p className="text-gray-500">
               تم التسليم بتاريخ
            </p>
            <p className="font-bold">
               {data.date}
            </p>
         </div>
         <div>
            <button className="flex items-center gap-x-1 bg-blue-600 text-xs text-white px-2.5 py-1.5 rounded-sm hover:bg-blue-500 transition duration-200 cursor-pointer">
               <VisibilityIcon className="text-gray-100" />
               عرض الواجب
            </button>
         </div>
      </div>
   );
}
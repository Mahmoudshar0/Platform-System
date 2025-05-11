import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Upload({data}) {
   return (
      <div dir="rtl" className="flex items-center justify-between p-2.5">
         <div className="flex items-center justify-center gap-x-2.5">
            <input type="checkbox" className="w-5 form-checkbox" />
            <div className='w-[40px] h-[40px] bg-gray-400 rounded-full'></div>
            <div className="text-xs">
               <p className="font-bold">
                  {data.AssignmentName}
               </p>
               <p className="text-gray-500" >{data.AssignmentTitle}</p>
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
         <div className='flex gap-3 text-xs'>
            <EditIcon className="text-gray-600 cursor-pointer" />
            <DeleteIcon className="text-gray-600 cursor-pointer" />
         </div>
      </div>
   );
}
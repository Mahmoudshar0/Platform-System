import logo from "/public/images/logo.jpg";
import { useNavigate } from 'react-router-dom';
export default function Intro({ explore }) {
   const navigate = useNavigate();
   return (
      <div className="flex sm:flex-row flex-col justify-center items-center gap-5 px-20 py-20">
         <img src={logo} alt="Logo" className="basis-[40%] max-h-80" />
         <div className="flex flex-col gap-8 basis-[50%] items-end">
            <div className="flex gap-2 justify-center items-center">
               <h1 className="text-2xl font-bold">
                  BIS منصه
               </h1>
               <img src={logo} alt="Logo" width={50} height={50} className="rounded-full border-1" />
            </div>
            <p dir="rtl" className="leading-7 text-justify max-w-[400px] spa">
               منصة تعليمية افتراضية مبتكرة تجمع بين التكنولوجيا الحديثة وأساليب التعليم التفاعلي، لتقديم تجربة تعلم شاملة للطلاب والمعلمين. توفر أدوات ذكية لتنظيم المحاضرات، وإدارة المهام، والتواصل الفعّال، مما يساهم في تحسين عملية التعلم وزيادة الإنتاجية الأكاديمية
            </p>
            {explore && <button onClick={() => navigate("/domain")} className="bg-[#5864D3] py-4 px-8 btn rounded-lg text-white font-bold hover:bg-[#7583ff] transition duration-300 ease-in-out w-fit cursor-pointer">
               تصفح المنصة
            </button>}
         </div>
      </div>
   );
}
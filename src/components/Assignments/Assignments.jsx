import { useState } from "react";
import Received from "./Received";
import Uploaded from "./Uploaded";
import Search_Filter from "../Search_Filter";
import Options from "../Options";


export default function Assignments() {
   const [selectedTab, setSelectedTab] = useState("uploaded");
   const [uploadedData] = useState([
      {
         id: 1,
         AssignmentName: "الواجب الأول",
         AssignmentTitle: "مقدمة في البرمجة",
         date: "2023-10-01",
      },
      {
         id: 2,
         AssignmentName: "الواجب الثاني",
         AssignmentTitle: "مقدمة في الذكاء الاصطناعي",
         date: "2023-10-15",
      },
      {
         id: 3,
         AssignmentName: "الواجب الثالث",
         AssignmentTitle: "مقدمة في تعلم الآلة",
         date: "2023-10-30",
      },
      {
         id: 4,
         AssignmentName: "الواجب الرابع",
         AssignmentTitle: "مقدمة في تطوير الويب",
         date: "2023-11-05",
      },
      {
         id: 5,
         AssignmentName: "الواجب الخامس",
         AssignmentTitle: "مقدمة في علم البيانات",
         date: "2023-11-12",
      },
   ])
   const [receivedData] = useState([
   {
      id: 1,
      studentName: "أحمد محمد",
      studentRole: "طالب",
      date: "2023-10-01",
   },
   {
      id: 2,
      studentName: "علي حسن",
      studentRole: "طالب",
      date: "2023-10-15",
   },
   {
      id: 3,
      studentName: "سارة علي",
      studentRole: "طالبة",
      date: "2023-10-30",
   },
   {
      id: 4,
      studentName: "فاطمة الزهراء",
      studentRole: "طالبة",
      date: "2023-11-05",
   },
   {
      id: 5,
      studentName: "محمد سعيد",
      studentRole: "طالب",
      date: "2023-11-12",
   }
   ])
   const handleTabChange = (tab) => {
      setSelectedTab(tab);
   };

   return (

      <div className="w-full sm:[w-100%] lg:[width:calc(100%-220px)] px-[40px] pb-[20px]">
         <div dir="rtl" className="flex gap-x-8 text-lg">
            <div className={`${selectedTab === "uploaded" ? "text-[#000] font-bold" : "text-[#777]"} cursor-pointer text-[16px]`} onClick={() => handleTabChange("uploaded")}>
               الواجبات المرفوعه
            </div>
            <div className={`${selectedTab === "submitted" ? "text-[#000] font-bold" : "text-[#777]"} cursor-pointer text-[16px]`} onClick={() => handleTabChange("submitted")}>
               الواجبات المستلمه
            <span className="mx-4 bg-gray-300 p-1 rounded-full">12</span>
            </div>
         </div>

         <hr className="my-7 text-gray-200" />

         <div className="flex justify-between items-center">
            <Options addPage="addAssPage" addWord="اضافه واجب"/>
            <Search_Filter />
         </div>
         <hr className="my-3 text-gray-500" />

         {
         selectedTab === "uploaded" ?
         uploadedData.map((data) => {
         return <Uploaded key={data.id} data={data} />
         })
         :
         receivedData.map((data) => {
         return <Received key={data.id} studentName={data.studentName} studentRole={data.studentRole} date={data.date} />;
         })}
      </div>

   );
}
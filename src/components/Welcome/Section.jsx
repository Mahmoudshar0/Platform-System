export default function Section({title, description, members}) {
   return (
      <div className="flex items-center justify-center flex-col gap-5 px-20 py-20">
         <h1 className="text-2xl font-bold">{title}</h1>
         <p className="leading-7 text-center text-gray-500 mt-3 mb-6 max-w-[600px]">{description}</p>
         <div className="flex gap-x-[100px] gap-y-[60px] justify-center items-center flex-wrap max-w-[1000px]">
            {members.map((member, index) => (
               <div key={index} className="flex flex-col gap-2 justify-center items-center">
                  <img src={member.img} alt={member.name} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
                  <p className="font-bold text-sm lg:text-base leading-tight">{member.name}</p>
                  <p className="text-xs lg:text-sm text-[#6941C6] mb-1 lg:mb-2">{member.role}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
import Intro from "./Intro";
import Break from "./break";
export default function Domain() {
   return(
      <>
         <Intro explore={false} />
         <Break />
         <div dir="rtl" className="flex flex-col px-[50px] mt-[100px] gap-5">
            <h2 className="text-2xl font-bold">
               ادخل موقعك
            </h2>
            <form action="">
               <input className="border border-gray-300 rounded-lg py-2 px-4 w-full" type="text" name="" id="" placeholder="https;//campus.example.edu" />
            </form>
            <button className="bg-[#5864D3] my-20 py-4 px-8 btn rounded-lg text-white font-bold hover:bg-[#7583ff] transition duration-300 ease-in-out cursor-pointer">
               الاتصال
            </button>
         </div>
      </>
   )
}
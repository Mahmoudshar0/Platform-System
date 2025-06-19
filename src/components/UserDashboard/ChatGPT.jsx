import { useState } from "react";

export default function ChatGPT() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "مرحبًا! كيف يمكنني مساعدتك اليوم؟" }
  ]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: "شكرًا على رسالتك! سأقوم بالرد قريبًا." }
    ]);
    setInput("");
  }

  return (
    <div className="p-4 lg:ms-15 lg:max-w-7xl text-sm font-sans">
       <div className="border-b border-gray-200 pb-2 font-bold flex flex-row-reverse items-center gap-2 text-xs mb-4">
        <a href="../UserDashboard" className="text-gray-500 hover:underline">الصفحة الرئيسية</a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <a href="#" className="text-[#4253F0] font-bold">Chat GPT</a>
      </div>

       <div className="flex gap-2 border-b border-gray-200 p-5 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5" stroke="currentColor" className="text-[#EEF300] size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        <h1 className="text-2xl">Chat GPT</h1>
      </div>

       <div className="h-[300px] overflow-y-auto p-4 rounded my-6 space-y-3">
        {messages.map((msg, idx) => (
         <div
     key={idx}
      className={`w-fit max-w-[80%] px-4 py-2 rounded-lg break-words ${
      msg.from === "user"
      ? "bg-blue-100 ml-auto text-right"
      : "bg-gray-200 text-left"
      }`}
     >
  {msg.text}
</div>

        ))}
      </div>

       <form onSubmit={handleSubmit} className="flex items-center gap-2  bg-gray-100 rounded-xl px-3 py-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="...اسأل عن اي شئ"
          className="flex-1 p-2 text-sm outline-none"
        />
        <button type="submit" className="text-white bg-[#000000] px-4 py-2 rounded-4xl hover:bg-blue-600">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white rotate-[-90deg] size-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>

        </button>
      </form>
    </div>
  );
}

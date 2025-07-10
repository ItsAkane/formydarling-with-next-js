'use client'
export function NewCard({ onclick }: { onclick: () => void }) {
    return (
        <div onClick={onclick} className="bg-[#ffd1dc] rounded-xl border border-pink-300  w-[350px] h-[360px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300 m-2">
            <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center text-3xl shadow-md hover:bg-pink-600 transition">
                +
            </div>
        </div>
    );
}
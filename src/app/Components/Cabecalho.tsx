import Link from "next/link";

export function Cabecalho() {
    return (
        <header className="fixed top-0 left-0 w-full bg-[#ff80b3] px-5 py-4 flex flex-wrap justify-between items-center box-border z-50">
            <div className="text-white text-lg font-semibold px-3">
                <Link href="/">
                    <h3 id="For_My_Darling" className="cursor-pointer">
                        For My Darling &lt;3
                    </h3>
                </Link>
            </div>

            <nav className="flex gap-4 mt-3 sm:mt-0">
                <Link href="/teamo">
                    <div className="bg-[#ff4d94] text-white px-5 py-2.5 rounded-[20px] font-bold shadow-md text-base cursor-pointer transition hover:bg-[#e60073]">
                        Carta &lt;3
                    </div>
                </Link>
                <Link href="/lembrancas">
                    <div className="bg-[#ff4d94] text-white px-5 py-2.5 rounded-[20px] font-bold shadow-md text-base cursor-pointer transition hover:bg-[#e60073]">
                        Lembrancas &lt;3
                    </div>
                </Link>
            </nav>
        </header>
    );
}
import Link from "next/link";

export function Cabecalho() {
    return (
        <>
            <div className="fixed top-0 left-0 px-[50px] pt-[10px] pb-[20px] w-full flex justify-end gap-[75px] bg-[#ff80b3] box-border mb-[20px] mr-[50px]">

                <div className="fixed left-[30px] top-6 px-10 text-white">
                    <Link href="/"><h3 id="For_My_Darling">For My Darling &lt;3</h3></Link>
                </div>

                <Link href="/teamo"><div className="inline-block gb-[#ff4d94] text-white no-underline px-5 py-2.5 rounded-[20px] font-bold shadow-md text-[18px] transition hover:[#e60073]">Carta &lt;3</div></Link>
                <Link href=""><div className="inline-block gb-[#ff4d94] text-white no-underline px-5 py-2.5 rounded-[20px] font-bold shadow-md text-[18px] transition hover:[#e60073]">Lembrancas &lt;3</div></Link>
            </div >
        </>
    )
}   
import Image from "next/image";

type Props = {
  imagemSrc: any;
  alt?: any;
  text?: string;
};

export function LembrancasCard({imagemSrc, alt, text}: Props) {
    return(
        <div className="p-10 bg-[#ffe0cc] rounded-md m-2 mt-">
            <Image src={imagemSrc} alt={alt} className="rounded-lg"/>
            <h3>{text}</h3>
        </div>
    )
}
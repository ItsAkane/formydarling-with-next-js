import Image from "next/image";

type Props = {
  imagemSrc: any;
  alt?: any;
  text?: string;
};

export function LembrancasCard({imagemSrc, alt, text}: Props) {
    return(
        <div className="grid p-10 bg-[#ffe0cc] rounded-md m-2">
            <Image src={imagemSrc} alt={alt}>
                {text}
            </Image>
        </div>
    )
}
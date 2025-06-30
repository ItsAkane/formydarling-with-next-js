import { Cabecalho } from "../Components/Cabecalho";
import { LembrancasCard } from "../Components/LembrancasCard";
import imagem1 from "../../../public/img/img_viada.jpeg";

export default function lembrancas(){
    return(
        <>
            <Cabecalho />
            <div className="flex items-center justify-center min-h-screen">
                <LembrancasCard imagemSrc={imagem1} alt="teste1" text="ola"/>
                <LembrancasCard imagemSrc={imagem1} alt="teste2" text="alo"/>
                <LembrancasCard imagemSrc={imagem1} alt="teste3" text="oal"/>
            </div>
        </>
    )
}
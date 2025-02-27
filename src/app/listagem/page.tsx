"use client";
import Cabecalho from "@/components/Cabecalho";
import Lista from "@/components/Lista";

export default function Listagem(){
    return(
        <div className="flex flex-col items-center">
            <Cabecalho />
            <Lista activities={[]}/>
        </div>
    );
}
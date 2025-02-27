"use client";
import Cabecalho from "@/components/Cabecalho";
import Formulario from "@/components/Formulario";

export default function Cadastro(){
    return(
        <div className="flex flex-col items-center">
            <Cabecalho />
            <Formulario />
        </div>
    );
}
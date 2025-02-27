"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className="bg-slate-700 text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image
          src="/Logo UFC.png"
          alt="Logo da UFC"
          width={45} 
          height={45}
        />
        <h1 className="text-xl font-bold">Portal de Atividades Acadêmicas</h1>
      </div>
      <nav className="flex gap-4">
        <Link
          href="/cadastro"
          className="bg-white text-slate-700 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Cadastro
        </Link>
        <Link
          href="/listagem"
          className="bg-white text-slate-700 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Lista
        </Link>
      </nav>
    </header>
  );
}
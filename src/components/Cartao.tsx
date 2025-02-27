"use client";

import { Activity } from "@/types/Activity";
import Link from "next/link";
import { useState } from "react";


interface ActivityCardProps {
  activity: Activity;
  onUpdate: (updatedActivity: Activity) => void;
  onDelete: (id: number) => void;
}

export default function Cartao({ activity, onUpdate, onDelete }: ActivityCardProps) {
    const [state, setState] = useState(activity.status);

    const handleUpdateStatus = () => {
        let newStatus = activity.status;
        if(state === "pendente"){
            newStatus = "andamento";
        }else if(state === "andamento"){
            newStatus = "concluido";
        }else{
            newStatus = "pendente";
        }

        const updatedActivity = {...activity, status: newStatus};
        setState(newStatus);
        onUpdate(updatedActivity);

    }

    const handleDelete = () => {
        if(confirm("Deseja excluir essa atividade ?")) {
            onDelete(activity.id);
        }
    }

    return (
        <div className="mt-4 w-4/12 bg-white shadow-md rounded-lg p-4 border">
            <h2 className="text-xl font-bold mb-2">{activity.nome}</h2>
            <p>
                <strong>Responsável: </strong> {activity.responsavel}
            </p>
            <p>
                <strong>Data: </strong> {activity.data}
            </p>
            <p>
                <strong>Descrição: </strong> {activity.descricao}
            </p>
            <p>
                <strong>Status:</strong>{" "}
                <span
                className={`px-1.5 py-1.5 text-sm rounded-full ${
                    activity.status === "pendente"
                    ? "bg-red-400 text-red-800"
                    : activity.status === "andamento"
                    ? "bg-blue-400 text-blue-800"
                    : "bg-green-400 text-green-800"
                }`}
                >
                {activity.status}
                </span>
            </p>
            
            <div className="mt-4 flex justify-between">
                <button
                onClick={handleUpdateStatus}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                Atualizar Status
                </button>
                <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                Excluir
                </button>
                <Link
                href="/listagem"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                Voltar para Listagem
                </Link>
            </div>
        </div>
    );
}

"use client";
import Cabecalho from "@/components/Cabecalho";
import { Activity } from "@/types/Activity";
import { loadActivities, saveActivities } from "@/utils/localStorage";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Cartao from "@/components/Cartao";



export default function DetalhesPage() {
    const { id } = useParams();
  
    const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const activities = loadActivities();
    const activityId = parseInt(id?.toString() ?? "0", 10);
    const foundActivity = activities.find((a) => a.id === activityId);
    setActivity(foundActivity || null);
  }, [id]);

  const handleUpdate = (updatedActivity: Activity) => {
    const activities = loadActivities();
    const updatedActivities = activities.map((a) =>
      a.id === updatedActivity.id ? updatedActivity : a
    );

    saveActivities(updatedActivities);
    setActivity(updatedActivity);
  };

  const handleDelete = (id: number) => {
    const activities = loadActivities();
    const updatedActivities = activities.filter((a) => a.id !== id);

    saveActivities(updatedActivities);
    redirect("/listagem"); // Redireciona para a listagem após excluir
  };

  if (!activity) {
    return (
      <div className="flex flex-col items-center text-center">
        <Cabecalho/>
        <h1 className="text-2xl font-bold mt-4 w-4/12">Atividade não encontrada</h1>
        <Link
          href="/listagem"
          className="mt-4 w-4/12 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Voltar para Listagem
        </Link>
      </div>
    );
  }

  // Exibe os detalhes da atividade
  return (
    <div className="flex flex-col items-center">
        <Cabecalho />
        <Cartao activity={activity} onUpdate={handleUpdate} onDelete={handleDelete}/>
        
      
    </div>
  );
}
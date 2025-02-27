"use client";
import { Activity } from "@/types/Activity";
import { loadActivities, loadLastId, saveActivities, saveLastId } from "@/utils/localStorage";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Formulario(){
    const [activity, setActivity] = useState<Omit<Activity, "id">>({
        nome: "",
        responsavel: "",
        data: "",
        descricao: "",
        status: "pendente",
    });


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setActivity({...activity, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
         
        const today = new Date("2025-02-27");
        today.setHours(0,0,0,0);

        const selectDate = new Date(activity.data);

        if(selectDate < today){
          toast.error("A data não pode ser anterior a de hoje", {
            duration: 2000,
            position: "top-center",
            style: {
              background: "#E53935",
              color: "#FFFFFF"
            },
          })
          return;
        }

        const activities = loadActivities();
        const lastId = loadLastId();
        const newId = lastId+1;

        const newActivity: Activity = {
          id: newId,
          ...activity,
        };
        activities.push(newActivity);

        saveActivities(activities);
        saveLastId(newId);

        setActivity({
            nome:"",
            responsavel:"",
            data:"",
            descricao:"",
            status:"pendente"
        });

        toast.success("Atividade salva com sucesso!", {
          duration: 4000, 
          position: "top-center", 
          style: {
            background: "#4CAF50", // Cor de fundo
            color: "#FFFFFF", // Cor do texto
          },
        });
    }

    return (
        <form onSubmit={handleSubmit} 
        className="mt-4 space-y-2 w-4/12 flex flex-col items-center ">
          <input 
            className="w-full p-2 border rounded-lg" 
            type="text" name="nome" 
            placeholder="Nome" 
            value={activity.nome} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-2 border rounded-lg" 
            type="text" name="responsavel" 
            placeholder="Responsável" 
            value={activity.responsavel} 
            onChange={handleChange} 
            required 
          />
          <input 
            className="w-full p-2 border rounded-lg" 
            type="date" 
            name="data" 
            value={activity.data} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            className="w-full p-2 border rounded-lg" 
            name="descricao" 
            placeholder="Descrição" 
            value={activity.descricao} 
            onChange={handleChange} 
            required 
          />
          <button className="w-full bg-slate-700 text-white p-2 rounded-lg" type="submit">Cadastrar</button>
        </form>
      );
}
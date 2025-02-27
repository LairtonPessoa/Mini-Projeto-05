"use client";

import { Activity } from "@/types/Activity";
import { loadActivities } from "@/utils/localStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ListaProps{
    activities: Activity[];
}
export default function Lista({activities: initialActivity}: ListaProps){
    const [activities, setActivities] = useState<Activity[]>(initialActivity);

    useEffect(() => {
        const loadedActivities = loadActivities();
        setActivities(loadedActivities);
    },[]);
    
    return(
        <div className="space-y-4 mt-4 w-4/12">
            {activities.map((activity) =>(
                <Link
                    key={activity.id}
                    href={`/detalhes/${activity.id}`}
                    className="block p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-center ">
                        <h3 className="text-lg font-semibold">{activity.nome}</h3>
                            <span
                            className={`px-1 py-1 text-sm rounded-full ${
                                activity.status === "pendente"
                                ? "bg-red-400 text-red-800"
                                : activity.status === "andamento"
                                ? "bg-blue-400 text-blue-800"
                                : "bg-green-400 text-green-800"
                            }`}
                            >
                            {activity.status}
                            </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
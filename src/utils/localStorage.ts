import { Activity } from "@/types/Activity";
const isClient = typeof window !== "undefined";

export function saveActivities(activities: Activity[]) {
  if (isClient) {
    localStorage.setItem("atividades", JSON.stringify(activities));
  }
}

export function loadActivities(): Activity[] {
  if (isClient) {
    const data = localStorage.getItem("atividades");
    return data ? JSON.parse(data) : [];
  }
  return [];
}

export function saveLastId(id: number) {
  if (isClient) {
    localStorage.setItem("lastId", id.toString());
  }
}

export function loadLastId(): number {
  if (isClient) {
    const lastId = localStorage.getItem("lastId");
    return lastId ? parseInt(lastId, 10) : 0; 
  }
  return 0; 
}
export type Activity = {
    id: number;
    nome: string;
    responsavel: string;
    data: string;
    descricao: string;
    status: "pendente"|"andamento"|"concluido";
}
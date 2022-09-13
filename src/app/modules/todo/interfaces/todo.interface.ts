export interface ITodo {
    _id: string;
    userId: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
}

export interface ICreateTodo {
    title: string;
    description: string;
}
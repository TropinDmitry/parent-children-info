export interface Child {
  id: string;
  name: string;
  age: number;
}

export interface ParentState {
  fullName: string;
  age: number;
  children: Child[];
}
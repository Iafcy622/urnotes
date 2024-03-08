export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Note = {
  id: string;
  uid: string;
  title: string;
  content: string;
  created_at: Date;
};

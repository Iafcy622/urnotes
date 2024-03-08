// import { sql } from "@vercel/postgres";
import { User, Note } from "./definition";
// import { unstable_noStore } from "next/cache";

const notes: Note[] = [
  {
    id: "123",
    uid: "111",
    title: "Note 1",
    content:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello World!"}]}]}',
    created_at: new Date(),
  },
  {
    id: "246",
    uid: "111",
    title: "Note 2",
    content:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello World! from Note 2"}]}]}',
    created_at: new Date(),
  },
  {
    id: "369",
    uid: "112",
    title: "Note 3",
    content:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello World! from Note 3"}]}]}',
    created_at: new Date(),
  },
  {
    id: "1024",
    uid: "111",
    title: "Note 4",
    content:
      '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Hello World! from Note 4"}]}]}',
    created_at: new Date(),
  },
];

export function fetchNotes(uid: string): Note[] {
  return notes.filter((note) => note.uid == uid);
}

export function fetchNoteByID(id: string): Note | undefined {
  return notes.filter((note) => note.id == id)[0];
}

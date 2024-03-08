import Editor from "@/components/dashboard/editor/Editor";
import { fetchNoteByID } from "@/lib/data";

export default function Page({ params }: { params: { id: string } }) {
  const note = fetchNoteByID(params.id);

  return (
    <div className="flex flex-col h-full">
      <h1 className="mb-2 text-lg font-semibold mx-2">{note?.title}</h1>
      <div className="w-full h-full flex-grow">
        {note && <Editor savedNote={note} />}
      </div>
    </div>
  );
}

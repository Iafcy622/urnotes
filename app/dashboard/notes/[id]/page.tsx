import Editor from "@/components/dashboard/editor/Editor";

export default function Page({ params }: { params: { id: string } }) {
  // return <p>Notes {params.id}</p>;
  return (
    <div className="flex flex-col h-full">
      <h1 className="mb-2 text-lg font-semibold mx-2">Notes {params.id}</h1>
      <div className="w-full h-full flex-grow">
        <Editor savedNote={null} />
      </div>
    </div>
  );
}

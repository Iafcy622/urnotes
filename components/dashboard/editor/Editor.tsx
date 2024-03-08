"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Menu from "@/components/dashboard/editor/menu/Menu";
import { useEffect, useState } from "react";

export default function Editor({ savedNote }: { savedNote: Object | null }) {
  // const [editable, setEditable] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none px-4",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      console.log(json);
    },
  });

  // useEffect(() => {
  //   if (!editor) {
  //     return undefined;
  //   }

  //   editor.setEditable(editable);
  // }, [editor, editable]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}

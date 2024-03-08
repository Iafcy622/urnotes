"use client";

import { Button } from "@/components/ui/button";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { Editor } from "@tiptap/react";
import clsx from "clsx";

export default function Menu({ editor }: { editor: Editor }) {
  return (
    <div className="w-full mb-4 border rounded-md">
      <Button
        variant="ghost"
        className="h-9 w-9 p-2"
        onClick={() => editor && editor.chain().focus().toggleBold().run()}
      >
        <FontBoldIcon
          className={clsx("w-full h-full", {
            "text-sky-500": editor && editor.isActive("bold"),
          })}
        />
      </Button>
      <Button
        variant="ghost"
        className="h-9 w-9 p-2"
        onClick={() => editor && editor.chain().focus().toggleItalic().run()}
      >
        <FontItalicIcon
          className={clsx("w-full h-full", {
            "text-sky-500": editor && editor.isActive("italic"),
          })}
        />
      </Button>
      <Button
        variant="ghost"
        className="h-9 w-9 p-2"
        onClick={() => editor && editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon
          className={clsx("w-full h-full", {
            "text-sky-500": editor && editor.isActive("underline"),
          })}
        />
      </Button>
      <Button
        variant="ghost"
        className="h-9 w-9 p-2"
        onClick={() => editor && editor.chain().focus().toggleStrike().run()}
      >
        <StrikethroughIcon
          className={clsx("w-full h-full", {
            "text-sky-500": editor && editor.isActive("strike"),
          })}
        />
      </Button>
      <Button
        variant="ghost"
        className="h-9 w-9 p-2"
        onClick={() => editor && editor.chain().focus().toggleCode().run()}
      >
        <CodeIcon
          className={clsx("w-full h-full", {
            "text-sky-500": editor && editor.isActive("code"),
          })}
        />
      </Button>
    </div>
  );
}

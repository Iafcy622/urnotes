"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil2Icon, HomeIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/dashboard/darkmode-toggle";
import { Settings } from "@/components/dashboard/settings";
import { Search } from "@/components/dashboard/search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { fetchNotes } from "@/lib/data";

export function Sidebar({ className }: { className: String }) {
  const pathname = usePathname();

  const notes = fetchNotes("111");

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-1">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <div className="w-full justify-between flex items-center">
              UrNotes
              <ModeToggle />
            </div>
          </h2>
          <div className="space-y-1">
            <Link href="/dashboard" passHref>
              <Button
                variant="ghost"
                className={clsx("w-full justify-start", {
                  "bg-primary-foreground": pathname == "/dashboard",
                })}
              >
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Settings />
            <Search />
          </div>
        </div>

        <div className="py-1">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Notes
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {notes?.map((note) => (
                <Link
                  key={note.id}
                  href={`/dashboard/notes/${note.id}`}
                  passHref
                >
                  <Button
                    variant="ghost"
                    className={clsx("w-full justify-start font-normal", {
                      "bg-primary-foreground":
                        pathname == `/dashboard/notes/${note.id}`,
                    })}
                  >
                    <Pencil2Icon className="mr-2 h-4 w-4" />
                    {note.title}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

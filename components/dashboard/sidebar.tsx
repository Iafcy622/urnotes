import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Pencil2Icon,
  HomeIcon,
  GearIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/dashboard/darkmode-toggle";
import { Settings } from "@/components/dashboard/settings";

export function Sidebar({ className }: { className: String }) {
  const notes = ["Note 1", "Note 2", "Note 3", "Note 4"];

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
            <Button variant="secondary" className="w-full justify-start">
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Settings />
            <Button variant="ghost" className="w-full justify-start">
              <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        <div className="py-1">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Notes
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {notes?.map((playlist, i) => (
                <Button
                  key={`${notes}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <Pencil2Icon className="mr-2 h-4 w-4" />
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

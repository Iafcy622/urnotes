import { Metadata } from "next";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { AlbumArtwork } from "./components/album-artwork"
// import { Menu } from "./components/menu"
// import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "@/components/dashboard/sidebar";
// import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
// import { playlists } from "./data/playlists"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function Page() {
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div> */}
      <div className="hidden md:block">
        {/* <Menu /> */}
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <p>hello world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

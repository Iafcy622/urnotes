import { Sidebar } from "@/components/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hidden md:block h-full">
      {/* <div className="border-t"> */}
      <div className="bg-background h-full">
        <div className="grid lg:grid-cols-5 h-full">
          <Sidebar className="hidden lg:block h-full" />
          <div className="col-span-3 lg:col-span-4 lg:border-l h-full">
            <div className="h-full py-6 px-4 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

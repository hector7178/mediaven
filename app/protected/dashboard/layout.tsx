

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full flex flex-col ">
        <div className=" flex flex-col gap-5">
          {children}
        </div>
    </main>
  );
}

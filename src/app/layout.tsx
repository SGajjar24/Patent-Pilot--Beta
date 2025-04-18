import { MainLayout } from "@/components/layout/main-layout";
import { Sonner } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
        <Sonner />
      </body>
    </html>
  );
}

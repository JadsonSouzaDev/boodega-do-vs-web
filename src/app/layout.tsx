import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import BMain from "../components/BMain";
import BAuthProvider from "@/components/BAuthProvider";

const font = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boodega do VS - A qualidade que seu show precisava",
  description: "Encontre os melhores playbacks e multitracks para o seu show",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <BAuthProvider>
          <BMain>{children}</BMain>
        </BAuthProvider>
      </body>
    </html>
  );
}

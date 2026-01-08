import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Vilde Iver Finne - Psykologhjelp for studenter",
  description: "Få veiledning og tilbakemelding på oppgaver, eksamensforberedelser og karakterforbedring fra ph.d. i psykologi med sensor-erfaring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

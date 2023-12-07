import "./ui/global.css"
import { fontRubik } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${fontRubik.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
  
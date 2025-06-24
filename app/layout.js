
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";



export const metadata = {
  title: "Zcrum",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      ><ThemeProvider>
        {children}</ThemeProvider>
      </body>
    </html>
  );
}

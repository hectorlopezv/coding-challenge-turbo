import "../styles/globals.css";
import Search from "./Search";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hector Website</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Search />
        {children}
      </body>
    </html>
  );
}

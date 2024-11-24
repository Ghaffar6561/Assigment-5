import Navbar from "./components/Navbar";
import Navbarcopy from "./components/Navbarfooter"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
        <Navbarcopy/>
        
      </body>
    </html>
  );
}

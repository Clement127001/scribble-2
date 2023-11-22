import './globals.css'
import Navabar from '@/components/Navabar'
import Footer from '@/components/Footer'
export const metadata={
  title:'Scribble',
  description:"Showcase and discover the remarkable devleoper projects to stay updated the makrket ready"
}


export default function RootLayout({children}:{children:React.ReactNode})
{
  return (
  <html lang="en">
    <body>
    <Navabar/>
        <main>
        {children}
        </main>
      <Footer/>
    </body>
  </html>)
}
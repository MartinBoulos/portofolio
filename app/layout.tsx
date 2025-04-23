
import './page.css';

export const metadata = {
  title: 'Martin',
  description: 'Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className='noPadding'>
      <body
      >{children}</body>
    </html>
  )
}

// ref={headerRef}
//                 variants={{
//                   hidden: { opacity: 0 , y: 75},
//                   visible: { opacity: 1 , y: 0}
//                 }}
//                 initial= "hidden"
//                 animate="visible"
//                 transition={{ duration: 0.5 }}

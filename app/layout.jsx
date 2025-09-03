import '../styles/globals.css';
import AOSInitializer from '../components/AOSInitializer';

export const metadata = {
    title: {
        template: '%s | Hockey Academy',
        default: 'Hockey Academy'
    },
    description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
    keywords: 'Hockey Academy, Hockey, Campus, Campus Identity',
    icons: {
      icon: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/images/hockeyacademy_h_logo_16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '34x34', url: '/images/hockeyacademy_h_logo_34x34.png' },
        { rel: 'icon', type: 'image/png', sizes: '85x85', url: '/images/hockeyacademy_h_logo_85x85.png' },
        { rel: 'icon', type: 'image/png', sizes: '230x230', url: '/images/hockeyacademy_h_logo_230x230.png' },
        { rel: 'apple-touch-icon', sizes: '230x230', url: '/images/apple-touch-icon.png' },
      ],
    },
    metadataBase: new URL('https://hockeyacademy.cl'),
    openGraph: {
      title: 'Hockey Academy',
      description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
      type: 'website',
      siteName: 'Hockey Academy',
      locale: 'es_ES',
      images: [
        { url: '/hockeyacademycamp/hockeyacademycamp_ogimage.png', alt: 'Hockey Academy OG Image' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hockey Academy',
      description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
      images: ['/hockeyacademycamp/hockeyacademycamp_ogimage.png'],
    },
  };
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased text-black bg-[#12214d] font-Cabin `} >
        <AOSInitializer />
        {/* Fondo con líneas amarillas */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="diagonal-lines"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="#facc15"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
        
        {/* Contenido de la página */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

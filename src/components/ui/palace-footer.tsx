import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ROUTES, APP_NAME, APP_PHONE, APP_ADDRESS } from '@/lib/constants'

interface FooterLink { label: string; href: string }
interface PalaceFooterProps { className?: string }

const navLinks: FooterLink[] = [
  { label: 'Sobre',      href: ROUTES.ABOUT },
  { label: 'Cardápio',   href: ROUTES.MENU },
  { label: 'Galeria',    href: ROUTES.GALLERY },
  { label: 'Contactos',  href: ROUTES.CONTACTS },
]

export const PalaceFooter = ({ className }: PalaceFooterProps) => (
  <section className={cn('relative w-full mt-0 overflow-hidden', className)}>
    <footer className="border-t border-border/40 mt-20 relative bg-background">
      <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[32rem] relative px-5 py-12">

        {/* Brand + links */}
        <div className="w-full flex flex-col items-center gap-7">

          {/* Logo — fundo removido via blend mode */}
          <Link to={ROUTES.HOME} aria-label="NOA Beach — início">
            <img
              src="/images/gallery-12.png"
              alt="NOA Beach"
              className="h-14 w-auto"
              
            />
          </Link>

          <p className="text-muted-foreground text-sm text-center max-w-xs leading-relaxed">
            Beach Club Premium em Luanda, Angola.
            <br />
            Gastronomia, mar e serviço personalizado.
          </p>

          {/* Redes sociais */}
          <div className="flex gap-5">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: '#',                   label: 'Instagram' },
              { icon: <Facebook  className="w-4 h-4" />, href: '#',                   label: 'Facebook'  },
              { icon: <Phone     className="w-4 h-4" />, href: `tel:${APP_PHONE}`,    label: 'Telefone'  },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Links de navegação */}
          <div className="flex flex-wrap justify-center gap-7 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-primary duration-200 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Informações de contacto */}
          <div className="flex flex-col sm:flex-row gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Phone  className="w-3.5 h-3.5" style={{ color: '#3D9DBD' }} /> {APP_PHONE}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: '#3D9DBD' }} /> {APP_ADDRESS}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock  className="w-3.5 h-3.5" style={{ color: '#3D9DBD' }} /> Seg–Dom 07h00–23h00
            </span>
          </div>

        </div>

        {/* Linha de fundo */}
        <div className="mt-20 md:mt-24 flex flex-col gap-2 md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">Luanda, Angola</p>
        </div>
      </div>

      {/* Marca de água em texto grande */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-36 font-display font-light tracking-[0.2em] pointer-events-none select-none text-center px-4 leading-none"
        style={{
          fontSize: 'clamp(2.5rem, 11vw, 8rem)',
          maxWidth: '95vw',
          background: 'linear-gradient(to bottom, rgba(201,169,110,0.18), transparent)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        NOA BEACH
      </div>

      {/* Logo badge central */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 backdrop-blur-sm rounded-2xl bg-surface/70 border border-border/50 hover:border-primary/30 duration-300 transition-colors p-5">
        <img
          src="/images/gallery-12.png"
          alt="NOA Beach"
          className="h-14 w-auto"
          
        />
      </div>

      {/* Divisor horizontal */}
      <div className="absolute bottom-[8.5rem] h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
      <div className="absolute bottom-28 w-full h-20 bg-gradient-to-t from-background to-transparent" />
    </footer>
  </section>
)

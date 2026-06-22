import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { PalaceFooter } from '@/components/ui/palace-footer'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const navLinks = [
  { to: ROUTES.ABOUT, label: 'Sobre' },
  { to: ROUTES.MENU, label: 'Cardápio' },
  { to: '/eventos', label: 'Eventos' },
  { to: ROUTES.GALLERY, label: 'Galeria' },
  { to: ROUTES.CONTACTS, label: 'Contactos' },
]

export function PublicLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center" aria-label="NOA Beach — início">
            <img
              src="/images/gallery-12.png"
              alt="NOA Beach"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm tracking-[0.06em] transition-colors duration-200',
                    isActive ? 'text-primary font-medium' : 'text-foreground/60 hover:text-foreground'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to={ROUTES.LOGIN}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Entrar
            </Link>
            <Link
              to={ROUTES.CLIENT.RESERVATIONS}
              className="text-sm px-5 py-2 rounded-full font-medium transition-all hover:opacity-85 active:scale-95"
              style={{ backgroundColor: '#C9A96E', color: '#1c1917' }}
            >
              Reservar Mesa
            </Link>
          </div>

          {/* Mobile — CTA mini + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to={ROUTES.CLIENT.RESERVATIONS}
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ backgroundColor: '#C9A96E', color: '#1c1917' }}
            >
              Reservar
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menu de navegação"
                  className="p-2 text-foreground/60 hover:text-foreground transition-colors rounded-lg"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[290px] bg-background border-border/50 flex flex-col p-6"
              >
                {/* Logo centrado no drawer */}
                <div className="flex justify-center pt-4 pb-10">
                  <img
                    src="/images/gallery-12.png"
                    alt="NOA Beach"
                    className="h-12 w-auto"

                  />
                </div>

                {/* Links de navegação */}
                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            'px-4 py-3 text-base rounded-xl transition-colors duration-150',
                            isActive
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>

                {/* Rodapé do drawer */}
                <div className="flex flex-col gap-3 pt-6 border-t border-border/50 mt-4">
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.LOGIN}
                      className="text-center text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                    >
                      Entrar na minha conta
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.CLIENT.RESERVATIONS}
                      className="text-center text-sm px-4 py-3 rounded-full font-medium hover:opacity-85 transition-opacity"
                      style={{ backgroundColor: '#C9A96E', color: '#0D1B2A' }}
                    >
                      Reservar Mesa
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>

      {/* Conteúdo da página */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Rodapé */}
      <PalaceFooter />
    </div>
  )
}

interface NoaLogoProps {
  className?: string
  color?: string
  showSub?: boolean
}

/**
 * Logo NOA Beach em SVG puro — fundo 100% transparente.
 * Usa Cormorant Garamond carregada via Google Fonts no index.html.
 * Escala via className (ex: "h-8 w-auto" na navbar, "h-16 w-auto" no footer).
 */
export const NoaLogo = ({
  className = 'h-8 w-auto',
  color = 'currentColor',
  showSub = true,
}: NoaLogoProps) => (
  <svg
    viewBox="0 0 200 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="NOA Beach"
    className={className}
  >
    {/* NOA — Cormorant Garamond Light, tracking generoso */}
    <text
      x="100"
      y="41"
      textAnchor="middle"
      fill={color}
      style={{
        fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
        fontSize: '46px',
        fontWeight: 300,
        letterSpacing: '10px',
      }}
    >
      NOA
    </text>

    {/* BEACH CLUB — Inter Light, all-caps, tracking largo */}
    {showSub && (
      <text
        x="103"
        y="54"
        textAnchor="middle"
        fill={color}
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '7.5px',
          fontWeight: 400,
          letterSpacing: '5px',
          opacity: 0.75,
        }}
      >
        BEACH CLUB
      </text>
    )}
  </svg>
)

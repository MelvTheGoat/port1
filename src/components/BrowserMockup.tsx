interface BrowserMockupProps {
  src?: string
  alt: string
  stat?: string
  statLabel?: string
}

export default function BrowserMockup({ src, alt, stat, statLabel }: BrowserMockupProps) {
  return (
    <div className="browser-frame">
      <div className="browser-header">
        <div className="traffic-lights">
          <span className="traffic-dot red" />
          <span className="traffic-dot yellow" />
          <span className="traffic-dot green" />
        </div>
        <div className="browser-address-bar">
          <span className="address-text">{alt.replace('Screenshot of ', '')}</span>
        </div>
      </div>
      <div className="browser-content">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="browser-stat">
            <span className="browser-stat-value">{stat}</span>
            <span className="browser-stat-label">{statLabel}</span>
          </div>
        )}
      </div>
    </div>
  )
}

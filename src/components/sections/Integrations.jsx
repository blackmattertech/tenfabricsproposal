import Wrap from '../layout/Wrap'

const cards = [
  {
    n: '1',
    title: 'Image Generation Platform',
    icon: 'image',
    items: [
      'AI Image generation platform (e.g., DALL-E / Midjourney or equivalent)',
      'API access / usage plan',
      'Any usage limits or billing setup',
    ],
  },
  {
    n: '2',
    title: 'Payment Integration',
    icon: 'payment',
    items: [
      'Payment gateway account (Stripe / PayPal or preferred provider)',
      'API keys + webhook access',
      'Business / merchant account details',
    ],
  },
  {
    n: '3',
    title: 'Hosting',
    icon: 'hosting',
    items: [
      'Hosting account (e.g., AWS / DigitalOcean or preferred provider)',
      'Control panel / dashboard access',
      'DNS management access (or delegate DNS updates)',
    ],
  },
  {
    n: '4',
    title: 'Server',
    icon: 'server',
    items: [
      'Server access: SSH / SFTP (or preferred method)',
      'Server credentials and required environments (staging & production)',
      'Database access (if managed separately)',
    ],
  },
  {
    n: '5',
    title: 'Domain',
    icon: 'domain',
    items: [
      'Domain name(s) to be used',
      'Domain registrar access (or delegate DNS updates)',
    ],
  },
  {
    n: '6',
    title: 'Mail Sender (Third Party or SMTP)',
    icon: 'mail',
    items: [
      'Email service account (SendGrid / Mailgun / Postmark or SMTP provider)',
      'API keys or SMTP credentials',
      'Sender domain verification (SPF/DKIM if required)',
    ],
  },
  {
    n: '7',
    title: 'WhatsApp APIs (if required)',
    icon: 'whatsapp',
    items: [
      'WhatsApp Business API access (or provider account)',
      'Approved phone number + API credentials',
      'Messaging template approvals (if applicable)',
    ],
  },
]

function IntegrationIcon({ type }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true }

  switch (type) {
    case 'image':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" fill="currentColor" stroke="none" />
          <path d="M4 16l4.5-4.5 3 3L14 12l6 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'payment':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" strokeLinecap="round" />
        </svg>
      )
    case 'hosting':
      return (
        <svg {...common}>
          <path d="M7 18a5 5 0 010-10h10a5 5 0 010 10H7z" />
          <path d="M12 8V5M9 5h6" strokeLinecap="round" />
        </svg>
      )
    case 'server':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
        </svg>
      )
    case 'domain':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.5 2.8 3.8 5.6 3.8 8S14.5 17.2 12 20M12 4C9.5 6.8 8.2 9.6 8.2 12s1.3 5.2 3.8 8" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M12 3a8.5 8.5 0 00-7.3 12.7L3 21l5.5-1.6A8.5 8.5 0 1012 3z" />
          <path d="M9.2 10.2c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .5.3l.8 1.9c.1.2.1.4 0 .6l-.5.6c-.1.2-.1.3 0 .5.4.7 1.1 1.4 1.9 1.8.2.1.3.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.9.8c.3.1.3.3.3.5v.6c0 .3 0 .5-.5.7-.6.3-1.4.5-2.2.3-1.1-.3-2.4-1.1-3.4-2.1-1-1-1.8-2.3-2.1-3.4-.2-.8 0-1.6.3-2.2z" strokeWidth="1.4" />
        </svg>
      )
    default:
      return null
  }
}

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <Wrap>
        <header className="integrations-head">
          <h2>
            THINGS REQUIRED FROM
            <br />
            <span>CLIENT SIDE</span>
          </h2>
          <p>
            Access, credentials, and platform accounts needed from your side to build, deploy, and operate the system.
          </p>
        </header>

        <div className="integrations-grid">
          {cards.map((card) => (
            <article key={card.n} className="integrations-card">
              <div className="integrations-icon-wrap">
                <IntegrationIcon type={card.icon} />
              </div>
              <h3>
                <span className="integrations-num">{card.n}</span>
                {card.title}
              </h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="integrations-note">
          <span className="integrations-note-icon" aria-hidden="true">!</span>
          <p>
            <strong>Note:</strong> Timely access and credentials will help us ensure smooth development, testing, and on-time delivery.
          </p>
        </div>
      </Wrap>
    </section>
  )
}

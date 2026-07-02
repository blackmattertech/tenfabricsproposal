import { useLenis } from '../hooks/useLenis'

export default function CommercialPage() {
  useLenis()

  return (
    <section className="commercial-page" aria-label="Commercial">
      <img src="/Commercials.png" alt="Commercial overview" />
    </section>
  )
}

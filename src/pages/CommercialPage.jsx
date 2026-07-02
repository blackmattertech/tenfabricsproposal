import { useLenis } from '../hooks/useLenis'

export default function CommercialPage() {
  useLenis()

  return (
    <>
      <section className="commercial-page" aria-label="Commercial">
        <img src="/Commercials.png" alt="Commercial overview" />
      </section>

      <section className="commercial-page commercial-imagegen" aria-label="Image generation">
        <img src="/imagegen.png" alt="Image generation overview" />
      </section>
    </>
  )
}

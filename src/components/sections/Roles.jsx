import { roles as rolesCopy } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'

export default function Roles() {
  return (
    <section className="panel">
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{rolesCopy.eyebrow}</Eyebrow>
            <SplitHeadline lines={rolesCopy.headline} />
          </div>
          <p>{rolesCopy.intro}</p>
        </div>

        <RevealText stagger={0.1} className="roles-grid">
          {rolesCopy.roles.map((role) => (
            <div key={role.n} className="role-cell">
              <div className="role-top">
                <span className="mono">ROLE / {role.n}</span>
                <span className="mono">+</span>
              </div>
              <h3>{role.name}</h3>
              <p className="role-tagline">{role.tagline}</p>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </RevealText>
      </Wrap>
    </section>
  )
}

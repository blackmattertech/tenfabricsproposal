import { useLenis } from '../hooks/useLenis'
import Hero from '../components/sections/Hero'
import Context from '../components/sections/Context'
import B2BBlanksSlide from '../components/sections/B2BBlanksSlide'
import BlankBlackSlide from '../components/sections/BlankBlackSlide'
import Challenges from '../components/sections/Challenges'
import Solution from '../components/sections/Solution'
import Flow from '../components/sections/Flow'
import Capabilities from '../components/sections/Capabilities'
import DataIsolation from '../components/sections/DataIsolation'
import Roles from '../components/sections/Roles'
import Impact from '../components/sections/Impact'
import Quote from '../components/sections/Quote'
import Decisions from '../components/sections/Decisions'
import Integrations from '../components/sections/Integrations'
import FinalCTA from '../components/sections/FinalCTA'

export default function ProposalPage() {
  useLenis()

  return (
    <>
      <Hero />
      <Context />
      <B2BBlanksSlide />
      <BlankBlackSlide />
      <Challenges />
      <Solution />
      <Flow />
      <Capabilities />
      <DataIsolation />
      <Roles />
      <Impact />
      <Quote />
      <Decisions />
      <Integrations />
      <FinalCTA />
    </>
  )
}

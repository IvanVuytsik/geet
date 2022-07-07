import React from 'react'
import { Container } from 'reactstrap'
import IntroSection from '../components/ui/IntroSection'
import Showcase from '../components/ui/showcase/Showcase'
import CreatorSection from '../components/ui/creator/CreatorSection'
import Trends from '../components/ui/trends/Trends'   
import StepSection from '../components/ui/step/StepSection'

const Home = () => {
  return (
  <>
    <IntroSection />
    <Showcase />
    {/* <CreatorSection />
    <Trends /> */}
    <StepSection />
  </>
  )
}

export default Home
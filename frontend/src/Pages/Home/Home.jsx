import React from 'react'
import Crousel from '../../Components/Crousel/Crousel'
import Card from '../../Components/Card/Card'
import {Helmet} from "react-helmet";
import Accordion from '../../Components/Accordion/Accordions';
const Home = () => {
  return (
    <div>
      <Helmet>
      <title>
        Home
      </title>
      </Helmet>
      <Crousel/>
      <Accordion/>
        <Card/>
        </div>
  )
}

export default Home



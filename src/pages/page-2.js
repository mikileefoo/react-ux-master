import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Cell from '../components/Cell'
import staticdata from '../../staticdata.json'


const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <Card 
        title="Headline for kort" 
        text="Flere sektioner"
      />


    <Link to="/">Go back to the homepage</Link>

    {staticdata.cells.map(cell => (
      <Cell title={cell.title} image={cell.image} audio={cell.audio} />
    ))}
    
  </div>
)

export default SecondPage

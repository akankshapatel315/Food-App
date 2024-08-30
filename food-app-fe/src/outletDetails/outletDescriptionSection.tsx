import Button from '@mui/material/Button'
import React from 'react'

const OutletDescriptionSection = () => {
  return (
    <div className='sticky-top'>
      <div style={{ backgroundColor: "white" }}>
        <div className='p-4'>
          <h3 className='b' style={{ color: "black" }}>La Pino'z Pizza</h3>
          <h5>Pizza, Pasta, Italian, Fast Food</h5>
          <h6>Naranpura, Ahmedabad</h6>
          <p>Open now 12midnight - 4am, 11am - 12midnight (Today)</p>
          <div className='d-flex justify-content-start '>
            <Button className="ml-2" variant="outlined">Direction</Button>
            <Button style={{marginLeft:"1rem"}} variant="outlined">Bookmark</Button>
            <Button style={{marginLeft:"1rem"}} variant="outlined">Share</Button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default OutletDescriptionSection
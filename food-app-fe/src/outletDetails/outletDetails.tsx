import { Grid } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import OutletDescriptionSection from './outletDescriptionSection'
import OutletDetailsTab from './outletDetailsTab'
import Navbar from '../navbar/navbar'
import OutletPhotoGrid from './outletPhotoGrid'

const OutletDetails = () => {
    return (
        <div className="container">
            <Navbar/>
            <OutletPhotoGrid/>
            <OutletDescriptionSection />
            <OutletDetailsTab/>

        </div>



    )
}

export default OutletDetails
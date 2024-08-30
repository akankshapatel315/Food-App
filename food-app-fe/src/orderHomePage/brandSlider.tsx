import { Box } from '@mui/material'
import React from 'react'

const BrandSlider = () => {
    return (
        <div>
            <div className="card">
                <Box sx={{ maxWidth: 2000, padding: 3 }}>
                    <div className="container">
                        <h3>Top brands for you</h3>
                        <div className="row mt-5" >
                            <div className="col">
                                <img style={{ height: "10rem" }} src="/public/images/macd.avif" className="rounded-circle" />
                                <h5 className='mt-2' style={{marginLeft:"2rem"}}>macd</h5>
                            </div>
                            <div className="col">
                                <img style={{ height: "10rem" }} src="/public/images/burgerking.avif" className="rounded-circle" />
                                <h5 className='mt-2' style={{marginLeft:"2rem"}}>Burger King</h5>
                                </div>
                            <div className="col"><img style={{ height: "10rem" }} src="/public/images/gwalia.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3.5rem"}}>Gwalia</h5>
                            </div>
                            <div className="col"><img style={{ height: "10rem" }} src="/public/images/honest.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3.5rem"}}>Honest</h5>
                            </div>
                            <div className="col"><img style={{ height: "10rem" }} src="/public/images/lapinoz.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3.5rem"}}>Lapino'z</h5>
                            
                            
                            </div>
                        </div>
                    </div>

                </Box>
            </div>
        </div>
    )
}

export default BrandSlider
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { Foodslider } from './foodslider'
import BrandSlider from './brandSlider'
import RetaurantList from './retaurantList'

export const OrderHome = () => {
    return (
        <div className='mt-2'>
            <div className="card shadow p-3 bg-body rounded">
                <div className="container">



                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="container overflow-hidden">
                                    <div className="row g-2">
                                    <div className="col-4">
                                            <div className="p-3  bg-light">
                                            <b>FoodTruck</b>
                                            </div>
                                        </div>
                            

                                        <div className="col-4">
                                            <div className="p-3  bg-light">
                                            <Autocomplete
                                            id="combo-box-demo"
                                            options={["Ahmedabad", "surat"]}
                                            // sx={{ width: 400 }}
                                            renderInput={(params) => <TextField {...params} label="Location" />}
                                        />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="p-3  bg-light">
                                            <TextField
                                            id="standard-basic"
                                            label="Search for restaurant,cuisine or dish"
                                            // sx={{ width: 400 }}
                                            variant="standard" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
            <Foodslider />
            <BrandSlider />
            <RetaurantList />
        </div>
    )
}

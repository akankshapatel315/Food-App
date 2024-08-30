import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import Navbar from '../navbar/navbar'
export const Home = () => {
    return (
        <>
            <div className='container' >
                <Navbar/>
                <div className="card  text-white ">
                    <img src="/public/images/home.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay position-absolute top-50 start-50 translate-middle">
                        <div><h1>Food Truck</h1></div>
                        <div>
                            <h2>Discover the best food & drinks in Ahmedabad  </h2>

                        </div>
                        <div className="position-absolute top-50 start-0 translate-middle-y mt-5">

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={["Ahmedabad", "surat"]}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Location" />}
                            />

                            <TextField id="standard-basic"
                                label="Search for restaurant,cuisine or dish"
                                sx={{ width: 300 }}
                                variant="standard" />

                        </div>

                    </div>
                </div>
                {/* <img src='/public/images/home.jpg' style={{ objectFit: "fill", width: "100%", height: "100%" }} className='img-class' /> */}


                <div className="card mt-4  container mb-4 cursor-pointer" style={{ width: "18rem" }} onClick={() => alert("clicked")}>
                <img className="card-img-top" src="/public/images/biryani.jpeg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Order online</h5>
                    <p className="card-text">Stay home and order to your door step</p>
                </div>
            </div>

            </div>
           

        </>
    )
}

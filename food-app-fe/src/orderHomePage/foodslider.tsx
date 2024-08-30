import React from "react";
import { Carousel } from "react-bootstrap";
import "./foodslider.css"
import { Box, Typography } from "@mui/material";

export const Foodslider = () => {
   
    return (
        <div>
            <div className="card">
                <Box sx={{ maxWidth: 2000, padding: 3 }}>
                    <div className="container">
                    <h3>Inspiration for your first order</h3>
                        <div className="row mt-5" >
                            <div className="col"><img style={{height:"10rem"}}  src="/public/images/pizza.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3rem"}}>Pizza</h5>
                            
                            </div>
                            <div className="col"><img style={{height:"10rem"}} src="/public/images/biryani.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3rem"}}>Biryan</h5>
                            
                            </div>
                            <div className="col"><img style={{height:"10rem"}} src="/public/images/rolls.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3rem"}}>Rolls</h5>
                            
                            </div>
                            <div className="col"><img style={{height:"10rem"}} src="/public/images/thali.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3rem"}}>Thali</h5>
                            
                            </div>
                            <div className="col"><img style={{height:"10rem"}} src="/public/images/burger.avif" className="rounded-circle" />
                            <h5 className='mt-2' style={{marginLeft:"3rem"}}>Burger</h5>
                            
                            </div>
                        </div>
                    </div>

                </Box>
            </div>
        </div>
    );
};

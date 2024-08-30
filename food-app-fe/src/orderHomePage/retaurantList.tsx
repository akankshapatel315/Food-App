import { Box, Grid, Paper, styled } from '@mui/material'
import React from 'react'

const RetaurantList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div className="card">
        <Box sx={{ maxWidth: 2000, padding: 3 }}>
          <div className="container">
            <h3>Order food online in Patel Stadium</h3>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <div className="card rounded" style={{ width: "25rem",height:"25rem",border:"1px solid white",background:"white" }}>
                  <img src="public/images/lapinoRes.avif" className="object-fit-cover border rounded" />
                  <div className="card-body">
                  <b>La Pino'z Pizza</b>
                  <p>Pizza, Pasta, Italian, Fast Food</p>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
              <div className="card rounded" style={{ width: "25rem",height:"22rem",border:"1px solid white",background:"white"}}>
                  <img src="public/images/gwaliaRes.avif" className="object-fit-cover border rounded" />
                  <div className="card-body">
                    <b>Gwalia Sweets & Fast Food</b>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
              <div className="card rounded" style={{ width: "25rem",height:"22rem",border:"1px solid white",background:"white" }}>
                  <img src="public/images/BurgerKingRes.avif" className="object-fit-cover border rounded" />
                  <div className="card-body">
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
              <div className="card rounded" style={{ width: "25rem",height:"22rem",border:"1px solid white",background:"white"}}>
                  <img src="public/images/FusionRes.avif" className="object-fit-cover border rounded" />
                  <div className="card-body">
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

        </Box>
      </div>
    </div>
  )
}

export default RetaurantList
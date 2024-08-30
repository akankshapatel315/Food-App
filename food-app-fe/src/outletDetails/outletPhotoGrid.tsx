import React from 'react'

const OutletPhotoGrid = () => {
  return (
    <div>
          <div className="row" >
                <div className="col-6 p-2">
                    <img src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <div className="col-3 p-2" >
                    <div  >
                        <img src="/public/images/1pi.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />

                    </div>
                    <div className='mt-2' >
                        <img src="/public/images/2pi.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />

                    </div>


                </div>
                <div className="col-3 p-2" >
                    <img src="/public/images/lapinoRes.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />

                </div>
            </div>
    </div>
  )
}

export default OutletPhotoGrid
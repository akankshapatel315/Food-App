import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Menu = () => {
    return (
        <div  >
            <h4>Order online</h4>
            <hr></hr>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/public/images/1pi.avif" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" className=" mt-2 rtl:mt-0 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/public/images/1pi.avif" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/public/images/1pi.avif" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
            {/* <Row className='shadow p-1 mb-2 bg-body rounded' id="scrollspyHeading1">

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row>
            <Row className='shadow p-1 mb-2 bg-body rounded'>

                <Col className='col-3 rounded'>
                    <img className="rounded" src="/public/images/largePizz.avif" alt="a cat" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Col>
                <Col className='col-9'>
                    <div className='d-flex flex-column p-4'>
                        <h3 className='b'>Cheesy Macaroni (personal Giant Slice (22.5 Cm))</h3>
                        <p>₹500</p>
                        <p>Paneer, Onions, Capsicum, Olives, Baby Corns with Loads of Cheese</p>

                    </div>
                </Col>

            </Row> */}
        </div>
    )
}

export default Menu
import React from 'react'
import './ToCard.css'
function ToCard() {
    return (
        <div className='container-fluid'>
            <div className="row ">
                <div className="article col-4 ">
                    <div className="card card-inverse" style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_47.png)` }}>
                        <div className="card-img-overlay">
                            <h4 className="card-title">This is Title 1</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas, quia commodi cumque at ad sunt ab</p>
                        </div>
                    </div>
                </div>
                <div className="article col-4 ">
                    <div className="card card-inverse" style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_41.png)` }}>
                        <div className="card-img-overlay">
                            <h4 className="card-title">This is Title 2</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas, quia commodi cumque at ad sunt ab </p>
                        </div>
                    </div>
                </div>
                <div className="article col-4 ">
                    <div className="card card-inverse" style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_71.png)` }}>
                        <div className="card-img-overlay">
                            <h4 className="card-title">This is Title 3</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas, quia commodi cumque at ad sunt ab esse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ToCard

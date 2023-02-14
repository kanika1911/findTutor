import React from 'react';
import "../css/TeacherOptions.css"



function TeacherOptions(){
    return(
        <>
        <div className="main">
            <center>
                <h1>
                  Alpha Teach
                </h1>
            </center>
            <ul className="list-group">
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/screen3.jpeg')} style={{borderRadius:"80%"}}/>
                        </div>
                        <p>Quo dicta</p>
                        <p> Et consequatur expedita et reiciendis vel recusandae quia.</p>
                    </div>
                </li>
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/global3.jpeg')} style={{borderRadius:"70%"}}/>
                        </div>
                        <p>Ad minima </p>
                        <p>Ad quia commodi qui aliquam commodi cum explicabo</p>
                    </div>
                </li>
                <li className="li-main">
                    <div className='li-inner'>
                        <div className="img-divs">
                            <img src={require('../image/calender3.png')} style={{borderRadius:"5%"}}/>
                        </div>
                        <p>Mquo soluta </p>
                        <p>Id mollitia natus qui molestiae rerum 33 quia delectus.</p>
                    </div>
                </li>
            </ul>



        </div>
        </>
        


    )
}

export default TeacherOptions
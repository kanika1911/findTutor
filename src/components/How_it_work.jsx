import React from 'react'
import '../css/How_it_work.css'
function How_it_work() {
  return (
    <section class="how section">
    <div class="container">
      <div class="sectionheader">
        <center>
        <h2>HOW IT WORKS</h2>
        </center>
      </div>
      <div class="howitems">
        <div class="howitem">
            {/* <div> */}
            <img src={require('../image/online_tutor.png')}/>
{/*  */}
            {/* </div> */}
          
          <h5>Ea voluptatibus illum</h5>
          <p>n quidem fugit  voluptatibus &amp; cum se sedatis soluta.</p>
        </div>
        <div class="howitem">
            <img src={require('../image/checklist.png')}/>
          
          <h5>Vesnam sunt placeat</h5>
          <p>natus ut consectetur ducimus qui omnis ratione.</p>
        </div>
        <div class="howitem">
            <img src={require('../image/network.png')}/>
          
          <h5>Sit fuga chmne</h5>
          <p>In quidem fugit ut omnis soluta itaque sed perspiciatis soluta.</p>
        </div>
        <div class="howitem">
            <img src={require('../image/review.png')}/>
          <h5  >Et officiis ipsam</h5>
          <p>Med vitae odio et labore repudiandae ut</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default How_it_work
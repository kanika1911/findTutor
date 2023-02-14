
import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
function Subject() {
    return (
        <div>
           <center> <h1>Glance Over Courses</h1></center>
            <ul className="links_btn">
                <li><a href="/TutorDisplay"><Button className='btn orange'>Science</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>Arts</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>Commerce</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>Physics</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>Mathematics</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>History</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>Politics</Button></a></li>
                <li><a href="/TutorDisplay"><Button className='btn orange'>English</Button></a></li>
               
            </ul>
        </div>
    )
}

export default Subject
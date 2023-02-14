import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Studentlinks.css'
import { useNavigate } from 'react-router-dom';

function Studentlinks() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    let type;
    useEffect(() => {
        type = JSON.parse(localStorage.getItem('type'));
        if (type !== null) {
            setName(type)
            console.log(type)
        }


    }, [type])
    const tologin = () => {
        if (name === "") {
            navigate('/Login');
        }
    }
    return (
        <div className='student-div'>
            <div className="img_div">
            
                <img src={require('../image/team2.png')} style={{ borderRadius: "10%" }} />
            </div>
            <center>
                <h3 className="h">
                Eos voluptas
                </h3>
            </center>
            <p>
            Atem cumque et facere aperiam et laboriosam autem. Id sapiente exercitationem vel minima consectetur sed 
            </p>
            <ul className="links_btn">
                <li>
                    {name === "" ? (<a href={`/Login`}>
                        <Button className='btn blue' >Find some </Button>
                    </a>) :
                        (
                            <a >
                                <Button className='btn blue' >Find some</Button>
                            </a>)
                    }
                </li>
                <li>
                    {name === "" ? (<a href={`/Login`}>
                        <Button className='btn green' >Become one</Button>
                    </a>) :
                        (
                            <a >
                                <Button className='btn green' >Become one</Button>
                            </a>)
                    }
                </li>
                <li><a href="/Learn_More"><Button className='btn orange'>Learn More</Button></a></li>
            </ul>
        </div>
    )
}

export default Studentlinks
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = ()=>{
    // const logo = require('../../images/Yashirlogo.png').default
    return(
        <div className="HomeContainer">
            <div className="sectioin">
                <div className="homeRight">
                    <h1 className="stitle">MAKE IT HAPPEN</h1>
                    {/* <img className="yashirlogo" src={logo} /> */}
                   
                </div>
                <div className="homeleft">
                    <div className="left-content">

                        
                        <div>
                        <h1>WELCOME TO DIRECT LTD</h1>

                        </div>
                        <div>
                            <p className="text"> The best digital site ever provide work in the hight quality Bussiness with good inviroment,
                                fear enough salary with all social right in the spacific time and 
                                we are on your service 24/7, 
                                with  us you will feel the familly
                            </p>
                            
                        </div>
                        <div>
                            <p>HERE  WE BUILD TRUST ... JOIN UD GET YOUR WORK DONE</p>
                            
                        </div>
                        <div>
                            <Link  className="discover" to="about">Discover More About Us...</Link>
                            
                        </div>
                
                    </div>
                </div>
            </div>
            <div className="homeFooter">
                <div className="ftarget">join us</div>
                <div className="ftarget"> Get Target</div>
                <div className="ftarget">Done</div>


            </div>

            
            
        </div>
        
    )
}
export default Home;

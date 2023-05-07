import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Brand1 from '../element/brand1';


const aboutbg = require('./../../assets/images/background/image-11.jpg');



class About extends Component {


    render() {
        return (
            <>
                <Header />
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>


                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>About Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">About Us</li>
                        </ul>
                    </div>

                </section>


                {/* About Section Two */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/resource/image-10.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work <br />With You</h2>
                                        <div class="text">We make it EASIER for investors to attain success in buying Texas tax sales properties at the tax foreclosure sales in TEXAS.
It can be a lot of work and sometimes complicated to properly prepare for the tax auctions held on the first Tuesday of every month in Texas.
 

We have many services available to help you
acquire properties at the Texas tax sales. 
Texas Tax Sales Resource Group gives you choices.
We can…</div>
                                    </div>
                                    <div class="author-info">
                                        <div class="wrapper-box">
                                            <h2>Arnie Abramson</h2>
                                            <div class="designation">Co-Founder</div>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                        </div>
                                        <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* History Section */}
                <section class="history-section">
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">History</div>
                            <h2>Our Journey</h2>
                        </div>
                        <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-btn-style-one">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2015</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">2010</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">2005</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">1992</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">We began buying Texas tax sale properties in 1992 and for several years acquired properties in other ways as well such as from HUD  and the VA.   At one time we were managing for ourselves and other investors and partners more than 200 properties.
In the years following the turn of the century, it became apparent that the economy was not doing as well as we would have liked and it turned out that we were about to enter into what was later called the “Great Recession”.
We felt that foreclosures were going to increase and the Texas tax sale foreclosures were going to be particularly beneficial for investors and an opportunity to help many of those who were about to lose their house.  We knew that many investors were aware of tax sales but very few really knew how they worked and the various nuances and intricacies inherent in them.
Our initial effort was to teach these things to investors.  While we felt that we were teaching more things in detail than available elsewhere, there was still something missing.  That was when we decided to actually mentor investors-take them by the hand and actually do the work with them.  While some did make some great purchases, the majority of students quickly became frustrated when, after a lot of work prior to the auctions, they found that their targeted properties were either withdrawn before the sale or they were outbid. [...]</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section>

                {/* Team Section */}
                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            {/* Team Block One */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Founder</div>
                                        <h3>Rosalina D. William</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Team Block One */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">CEO</div>
                                        <h3>Velavos H. DesuJa</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Team Block One */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-3.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Developer</div>
                                        <h3>Abdur Rahman J.</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section Four */}
                <section class="services-section-four services-section-about">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Features</div>
                            <h2>Core Features</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                    <h2>Capital Market</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-21.png')} alt="" /></div>
                                    <h2>Finance Division</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                    <h2>Insurance & Planning</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-22.png')} alt="" /></div>
                                    <h2>Family Case</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                    <h2>Financial Strategy</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-23.png')} alt="" /></div>
                                    <h2>Financial Planning</h2>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}

                <Brand1 />

                <Footer />
            </>
        )
    }
}
export default About;
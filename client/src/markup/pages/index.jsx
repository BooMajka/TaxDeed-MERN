import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import HomeSlider1 from './../element/home-slider1';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// import '../../assets/css/color.css';

import VideoPopup1 from './../element/video-popup1';
import PortfolioFilter1 from './../element/portfolio-filter1';

const teambg1 = require('./../../assets/images/background/image-3.jpg');
const newsbg1 = require('./../../assets/images/background/image-4.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Index extends Component {


    render() {
        return (
            <>
                <Header />

                <HomeSlider1 />

                {/* <!-- Welcome Setion --> */}
                <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>Watch Overview Video</h2>
                                        <div class="text">We get right to the point and show you many of the possibilities when you work with us.  There is no filler-  just straight forward information. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box" style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}>
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>Follow Our Process</h2>
                                        <div class="text">Step-by-step, follow what we do every month to help you be successful at the auctions, whether online or attending the auctions for you.</div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>Order Services</h2>
                                        <div class="text">We are a service company and do not bid against you.  There are many options- We can do everything for you or just what you wish us to do on your behalf.</div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- About Section --> */}
                <section class="about-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/resource/image-2.jpg')} alt="" />
                                    </div>
                                    <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="caption"></div>
                                        <div class="image-outer"><img src={require('../../assets/images/resource/image-3.jpg')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work </h2><h2> With You</h2>
                                        <div class="text">Texas Tax Sales Resource Group LLC helps investors purchase Texas tax deeds through classes, mentoring, turnkey programs, and services to perform any of the necessary steps on your behalf.

Before becoming a Texas real estate investor in 1991, Arnie Abramson had successful careers as a financial planner and Vice-President of Marketing for a national real estate management company that marketed public Real Estate Limited Partnerships. He began buying houses at Texas Sheriff Sales in 1992 and has been an investor, landlord, mentor, educator, public speaker and property manager.

Arnie is a national speaker on Texas tax deed sales and is past president of the Texas Real Estate Investors Association (TxREIA), has been on the Advisory Board of several REIAs and was a co-founder of the REI EXPO, now known as THINK REALTY. He was also quoted in US NEWS AND WORLD REPORT in 2016 and acknowledged as the expert in Texas tax sales by the Tax Lien Lady in her book on tax liens.

His company, Texas Tax Sales Resource Group LLC, covers the ENTIRE STATE OF TEXAS. This includes the research, due diligence, previewing, bidding, inspecting, arranging for rehabbing, renting and management, if necessary, of the properties purchased at the Texas tax sale auctions.</div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-1.png')} alt="" /></div>
                                                <h5>Phone Number</h5>
                                                <h2>(214) 869-7188</h2>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><img src={require('../../assets/images/icons/icon-2.png')} alt="" /></div>
                                                <h5>Email Address</h5>
                                                <h2>info@txtaxsales.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section --> */}
                <section class="services-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column">
                                <div class="services-content">
                                    <div class="sec-title light">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What Actually We <br />Do Here.</h2>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                        <h2>Market Research</h2>
                                        <div class="text">
                                            <ul>
                                                <li>Researching the counties having tax sales</li>
                                                <li>Listings of properties in those counties</li>
                                                <li>Essential data on the properties</li>
                                                <li>Current pictures and summaries on the properties</li>
                                                <li>Scan for liens on properties</li>
                                            </ul>
                                            </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                        <h2>Auction Services</h2>
                                        <div class="text">
                                            <ul>
                                                <li>Represent you at the auctions whether online or in person</li>
                                                <li>Includes registration, certification and compliance</li>
                                                <li>Handle all paperwork, deposits, banking and deed recording</li>
                                                <li>Deliver notice of new ownership to winning bid addresses</li>
                                                <li>Sequential Bidding option (for Priority Members only)</li>
                                            </ul></div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                        <h2>Transition Services</h2>
                                        <div class="text">
                                            <ul>
                                                <li>Arrange to have property secured</li>
                                                <li>Arrange locks to be changed</li>
                                                <li>Arrange inspection by licensed inspector</li>
                                                <li>Arrange insurance and/or warranties</li>
                                                <li>Arrange property management</li>
                                            </ul></div>
                                    </div>
                                </div>
                            </div>
                            <div class="right-column">
                                {/* <!-- Fact Counter --> */}
                                <div class="fact-counter">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_bottom"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-6.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={90}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Monitoring</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-7.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={71}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Growth</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-8.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={33}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Financial Plan</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-9.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={42}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Finance Consulting</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-10.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={69}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Data Analysis</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!--Column--> */}
                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-11.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={10}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">business Strategy</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="author-box" style={{ "backgroundImage": "url(assets/images/background/image-1.jpg)" }}>
                                    <div class="author-info">
                                        <div class="author-thumb"><img src={require('../../assets/images/resource/author-1.jpg')} alt="" /></div>
                                        <h2>Arnie Abramson</h2>
                                        <div class="designation">Co-Founder</div>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                    </div>
                                    <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- Gallery Section --> */}
                {/* <PortfolioFilter1 /> */}


                {/* <!-- Why Choose Us Section --> */}
                <section class="why-chooseus-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">Why Choose Us</div>
                                        <h2>Why Should You <br />Choose Us ?</h2>
                                    </div>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first"><span>Our Mission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><span>Our Vission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><span>Our Value</span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            <Tab.Pane eventKey="first" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error</p></div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>



                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one"><img src={require('../../assets/images/resource/image-6.jpg')} alt="" /></div>
                                    <div class="image-two"><img src={require('../../assets/images/resource/image-5.jpg')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                   {/* <!-- Video Section --> */}
                   <VideoPopup1 />



                {/* <!-- Team Section --> */}
                <section class="team-section" style={{ backgroundImage: "url(" + teambg1 + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Founder</div>
                                        <h3>Rosalina D. William</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">CEO</div>
                                        <h3>Velavos H. DesuJa</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Developer</div>
                                        <h3>Abdur Rahman J.</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Contact Section --> */}
                <section class="contact-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Write Here</div>
                                    <h2>Get In Touch</h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">
                                            <div class="col-md-12 form-group">
                                                <label for="name">Enter your name</label>
                                                <input type="text" name="username" id="name" placeholder="Enter name here......" required="" />
                                                <i class="fas fa-user"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <label for="email">Enter your email</label>
                                                <input type="email" name="email" id="email" placeholder="Enter email here......" required="" />
                                                <i class="fas fa-envelope"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <label for="message">Enter your message</label>
                                                <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Get Us Here</div>
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="contact-info">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-email-6"></span></div>
                                                <h3>Email Address</h3>
                                                <ul>
                                                    <li><Link to={'/mailto:info@webmail.com'}>info@txtaxsales.com</Link></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-call-1"></span></div>
                                                <h3>Phone Number</h3>
                                                <ul>
                                                    <li><Link to={'/tel:+1214869-7188'}>(214) 869-7188</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-location"></span></div>
                                                <h3>Office Address</h3>
                                                <ul>
                                                    <li>12/A, Romania City Town Hall <br />New Joursey, UK</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="info-column col-md-6">
                                            <div class="icon-box">
                                                <div class="icon"><span class="flaticon-worldwide"></span></div>
                                                <h3>Web Connect</h3>
                                                <ul>
                                                    <li><Link to={'/http://example.com/'}>info@txtaxsales.com</Link></li>
                                                
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="sec-bg" style={{ backgroundImage: "url(" + newsbg1 + ")" }}></div>
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">News</div>
                            <h2>News From Resource</h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>September 21, 2021</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Texas 2021’s Second Most Diverse State</Link></h3>
                                        <div class="text">WASHINGTON (WalletHub) – According to a WalletHub study, Texas is the second most diverse state, behind only California.  The Lone […]</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>September 14, 2021</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Dallas Fort Worth No. 2 Market in Data Center Inventory Growth</Link></h3>
                                        <div class="text">DALLAS (CBRE) – ​​​​Dallas-Fort Worth’s data center inventory has grown 225 percent since the first half of 2015, according to […]</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>September 14, 2021</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Six Texas Counties Among Fastest Growing Nationally</Link></h3>
                                        <div class="text">WASHINGTON (U.S. Census Bureau) – According to U.S. Census Bureau data, six Texas counties are among the top ten fastest […]</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
    }
}
export default Index;
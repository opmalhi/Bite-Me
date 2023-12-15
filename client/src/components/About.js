import React, {useState, useEffect} from 'react'
import Navbar from './Nav'

    function About() {
    return (
        <>
        <title>About us</title>
        <Navbar/>
        
        
	<div id="aboutus" class="site-about site-dark-section-a">
    	<div class="about-element-1 wow fadeInDown" data-wow-duration="2s"> <img src="images/about-elements-1.png" alt="about-elements1" />
        </div>
		<div class="about-element-2 wow swing" data-wow-duration="8s"> <img src="images/about-elements-2.png" alt="about-elements2" />
        </div>
        <div class="about-element-3 wow rotateInDownRight" data-wow-duration="3s"> <img src="images/about-elements-3.png" alt="about-elements3" />
        </div>
        <div class="about-element-4 wow zoomIn" data-wow-duration="4s"> <img src="images/about-elements-4.png" alt="about-elements4" />
        </div>
        
        <div class="container">
            <div class="row">

                
                <div class="site-about-main">
                	
                    
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    
                    <h2>Our story</h2>
                	
                    <h1>About us</h1>

                    	<div class="site-about-box">
                        	<span>We as restraunt aim to provide you with the best and delicious food made by us from pure Love.
                            </span>
                            <p>We started as a small tuc shop in 1945 later when people started recognizing and appreciating our work
                                we thought why not to give this small business a pump and years passed by we are now well-settled and 
                                providing people with the best food with affordable prices.
                            </p>
                            
                        </div>
    
                        
						<section >
                                <div >
                                    <a style={{marginRight : `40px`}}> 
                                        <figure> <img src="images/feature1.png" alt="feature1" /> </figure>
                                        
                                        <h5>Free
                                        delivery</h5>
                                    </a>
                                    <a style={{marginRight : `40px`}}>
                                        <figure> <img src="images/feature2.png" alt="feature2" /> </figure>
                                        
                                        <h5>Freshly Cooked</h5>
                                    </a>
                                    <a >
                                        <figure> <img src="images/feature3.png" alt="feature3" /> </figure>
                                        
                                        <h5>24 hours support</h5>
                                    </a>
                                </div>
    					</section>
                	</div>
                   
                    
                    
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    	<div class="right">
                        	<figure> <img src="images/about-chef.png" alt="chef" /> </figure>
                        </div>
                    </div>
                    
                
            	</div>
        	</div>

    	</div>
	</div>   
        </>
    )
}

export default About;
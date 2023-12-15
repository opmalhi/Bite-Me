import React, {useState, useEffect} from 'react'
import Navbar from './Nav'

    function Gallery() {
    return (
        <>
        <title>Gallery</title>
        <Navbar/>
        
    <div id="gallery" class="site-portfolio site-dark-section-a">
    	<div class="gallery-element-1 wow fadeInDown" data-wow-duration="2s"> <img src="images/gallery-elements-1.png" alt="gallery-elements1" />
        </div>
		<div class="gallery-element-2 wow fadeInDown" data-wow-duration="3s"> <img src="images/gallery-elements-2.png" alt="gallery-elements2" />
        </div>
        <div class="gallery-element-3 wow rotateInDownRight" data-wow-duration="3s"> <img src="images/gallery-elements-3.png" alt="gallery-elements3" />
        </div>


        <div class="container">
            <div class="row">
                <div class="col-xs-12">

					<div class="site-portfolio-main">
                    

                        <h2>Fresh & healthy food</h2>
                        
                        
                        <div class = "menu-row">
                        <h1>Gallery</h1>
                        </div>
                        
                        <h1>Food</h1>


                        
                        <div class="site-portfolio-tabs-content">
                            
                            <div class="all desert portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                                <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/thumb1.jpg" alt="Image"/>
                                    
                                    
                                </div>
                            </div>
                            
                            
                            <div class="all lunch dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                        
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/thumb2.jpg" alt="Image" />
                                
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big2.jpg" data-gall="myGallery" >
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Web Design</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert lunch portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                            
                                    <img src="images/gallery-images/thumb3.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big3.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Lunch</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all lunch breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                
                                    <img src="images/gallery-images/thumb4.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big4.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5>
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/thumb5.jpg" alt="Image"/>
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big5.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Dinner</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/thumb6.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big6.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                        
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/thumb7.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big7.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner dinner portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                
                                    <img src="images/gallery-images/thumb8.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big8.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Dinner</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        

                        <h1>DINE IN</h1>

                        <div class="site-portfolio-tabs-content">
                            
                            <div class="all desert portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                                <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/dine-1.jpg" alt="Image"/>
                                    
                                    
                                </div>
                            </div>
                            
                            
                            <div class="all lunch dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                        
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/dine-2.jpg" alt="Image" />
                                
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big2.jpg" data-gall="myGallery" >
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Web Design</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert lunch portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                            
                                    <img src="images/gallery-images/dine-3.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big3.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Lunch</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all lunch breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                
                                    <img src="images/gallery-images/dine-4.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big4.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5>
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/dine-5.jpg" alt="Image"/>
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big5.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Dinner</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/dine-6.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big6.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner breakfast portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                        
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                    
                                    <img src="images/gallery-images/dine-7.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big7.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Breakfast</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="all desert dinner dinner portfolio-items col-lg-3 col-md-4 col-sm-6 col-xs-12 no-padding">
                                
                            <div style = {{marginRight: `10px`, marginBottom : `10px`}}>
                                
                                    <img src="images/gallery-images/dine-8.jpg" alt="Image" />
                                    
                                    <div class="portfolio-caption">
                                        
                                        <a class="venobox" href="images/gallery-images/big8.jpg" data-gall="myGallery">
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <h5>Dinner</h5> 
                                        <h6>Sub Heading</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                    </div>
                    </div>

                	</div>
				</div>
			</div>
        </>
    )
}

export default Gallery;
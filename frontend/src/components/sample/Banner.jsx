import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
       <section id="home" className="home pt-5 overflow-hidden">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button> 
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="home-banner home-banner-1">
              <div className="home-banner-text">
                <h2>Artisanal Creations</h2>
                <h4>Elevate your living space with our handpicked collection of artisanal crafts.</h4>
                <a href="#products" className="btn btn-danger text-uppercase mt-4">Our Products</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="home-banner home-banner-2">
              <div className="home-banner-text">
                <h2>Unveil the Beauty of Handmade</h2>
                <h4>Celebrate the art of making with Chanvitha's Crafts, where every piece is a masterpiece.</h4>
                <a href="#products" className="btn btn-danger text-uppercase mt-4">Our Products</a>
              </div>
            </div>
          </div> 
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <span className="ti-angle-left slider-icon"></span>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true">
            <span className="ti-angle-right slider-icon"></span>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <a href="#">
                <div className="offer-box text-center position-relative">
                  <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://www.cchobby.com/media/catalog/product/cache/4a966c267e0cbb7b4d69d8bbc23cb726/v/1/v15914.jpg" alt="Offers" className="img-fluid"/>
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                      <div className="offer-info-inner">
                        <p className="heading-bigger text-capitalize">Sale 20%</p>
                        <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                      </div> 
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
              <a href="#">
                <div className="offer-box text-center position-relative">
                  <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://www.dhresource.com/0x0/f2/albu/g14/M01/5C/2D/rBValV9jFi2AKMiBAAO2UxZrmqI082.jpg" alt="Offers" className="img-fluid"/>
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                      <div className="offer-info-inner">
                        <p className="heading-bigger text-capitalize">Sale 50%</p>
                        <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                      </div> 
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <a href="#">
                <div className="offer-box text-center position-relative">
                  <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://img.freepik.com/premium-photo/gift-boxes-with-chocolates-love-note_23-2147592814.jpg" alt="Offers" className="img-fluid"/>
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                      <div className="offer-info-inner">
                        <p className="heading-bigger text-capitalize">Sale 25%</p>
                        <p className="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" className="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                      </div> 
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </div>
  )
}

export default Banner;

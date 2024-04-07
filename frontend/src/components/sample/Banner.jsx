import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
       <section id="home" class="home pt-5 overflow-hidden">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button> 
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="home-banner home-banner-1">
              <div class="home-banner-text">
                <h2>Artisanal Creations</h2>
                <h4>Elevate your living space with our handpicked collection of artisanal crafts.</h4>
                <a href="#products" class="btn btn-danger text-uppercase mt-4">Our Products</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="home-banner home-banner-2">
              <div class="home-banner-text">
                <h2>Unveil the Beauty of Handmade</h2>
                <h4>Celebrate the art of making with Chanvitha's Crafts, where every piece is a masterpiece.</h4>
                <a href="#products" class="btn btn-danger text-uppercase mt-4">Our Products</a>
              </div>
            </div>
          </div> 
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true">
            <span class="ti-angle-left slider-icon"></span>
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true">
            <span class="ti-angle-right slider-icon"></span>
          </span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="offers">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <a href="#">
                <div class="offer-box text-center position-relative">
                  <div class="offer-inner">
                    <div class="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://www.cchobby.com/media/catalog/product/cache/4a966c267e0cbb7b4d69d8bbc23cb726/v/1/v15914.jpg" alt="Offers" class="img-fluid"/>
                      <div class="offer-overlay"></div>
                    </div>
                    <div class="offer-info">
                      <div class="offer-info-inner">
                        <p class="heading-bigger text-capitalize">Sale 20%</p>
                        <p class="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" class="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                      </div> 
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
              <a href="#">
                <div class="offer-box text-center position-relative">
                  <div class="offer-inner">
                    <div class="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://www.dhresource.com/0x0/f2/albu/g14/M01/5C/2D/rBValV9jFi2AKMiBAAO2UxZrmqI082.jpg" alt="Offers" class="img-fluid"/>
                      <div class="offer-overlay"></div>
                    </div>
                    <div class="offer-info">
                      <div class="offer-info-inner">
                        <p class="heading-bigger text-capitalize">Sale 50%</p>
                        <p class="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" class="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
                      </div> 
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <a href="#">
                <div class="offer-box text-center position-relative">
                  <div class="offer-inner">
                    <div class="offer-image position-relative overflow-hidden">
                      <img decoding="async" src="https://img.freepik.com/premium-photo/gift-boxes-with-chocolates-love-note_23-2147592814.jpg" alt="Offers" class="img-fluid"/>
                      <div class="offer-overlay"></div>
                    </div>
                    <div class="offer-info">
                      <div class="offer-info-inner">
                        <p class="heading-bigger text-capitalize">Sale 25%</p>
                        <p class="offer-title-1 text-uppercase font-weight-bold">Don't Miss This Chance</p>
                        <button type="button" class="btn btn-outline-danger text-uppercase mt-4">Shop Now</button>
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

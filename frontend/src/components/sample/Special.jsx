import React from 'react'
import './Special.css'
const Special = () => {
  return (
    <div>
      <section id="special" class="special">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="headline text-center mb-5">
              <h2 class="pb-3 position-relative d-inline-block" id="heading">🎉 Special Sale 🎉</h2>
            </div>
          </div>

          <div class="col-sm-12 col-lg-7 text-center text-lg-start">
            <div class="countdown-container">
              <h3 class="text-uppercase">Mini Chocolate Kits!</h3>
              <p class="my-4">
              Indulge in sweet sensations this summer with our exclusive Mini Chocolate Kits! Perfect for sunny days and delightful gatherings, these kits offer a burst of flavor in every bite. Whether you're hosting a backyard barbecue, planning a picnic in the park, or simply craving a cool treat, our mini chocolate delights are sure to satisfy.
             </p>
              <span class="countdown-price h3 d-block mb-4">$249.00 <del>$400.00</del></span>
              <button type="button" class="btn btn-danger">BUY NOW</button>
            </div>
          </div>
          <div class="col-sm-12 col-lg-5">
            <div class="special-img position-relative">
              <img decoding="async" src="https://rukminim2.flixcart.com/image/850/1000/keykscw0/festive-gift-box/3/9/8/gift-hamper-for-ones-who-stays-in-your-heart-multi-chocolates-original-imafvj6x6n2zbtuw.jpeg?q=90&crop=false" class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
     </section>
    </div>
  )
}

export default Special

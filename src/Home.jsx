import React from "react";
import NavBar from "./NavBar";
import image from '../src/images/01.jpg'
import image2 from '../src/images/02.jpg'
import image3 from '../src/images/03.jpg'
import image4 from '../src/images/04.jpg'
import image5 from '../src/images/05.jpg'
import image6 from '../src/images/06.jpg'
import Footer from "./Footer";

export default function Home({Toggle}) {
  return (
    <div>
      <NavBar Toggle ={Toggle}/>
      <div className="container-fluid">
        <div className="row g-3 my-3">

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sigiriya rock</h5>
                <p class="card-text">
                  Location- sigiriya 
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Plonnaruwa</h5>
                <p class="card-text">
                  Some quick example text
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ella view</h5>
                <p class="card-text">
                Ella 
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row g-3 my-3">

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Beach</h5>
                <p class="card-text">
                  Galle
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Water Fall</h5>
                <p class="card-text">
                  Diyaluma
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div class="card" >
              <img style={{height:"240px"}} src={image6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Train</h5>
                <p class="card-text">
                  Ella 
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "./Header";
import "./Home.css";
import prideImg from "../../imgs/1.png";
import ingredients from "../../imgs/2.png";
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import img from "../../imgs/1.jpg";
import imgItem from "./../../imgs/item2.jpg";

function Home() {
  const blogItem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button href="#">Order Now</button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVING</h6>
            </div>
            <div className="col-md-3">
              <h2>1524+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1700+</h2>
              <h6>ROKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>3520+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideImg} title="prideImg" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="#">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>learn more</button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no <br /> difference
                whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio
                <br /> finibus bibendum in sit amet leo. Mauris feugiat erat
                tellus.
              </p>
              <a href="#">Watch Our Store</a>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">{blogItem}</div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={img} />
                  <Carousel.Caption>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <span>Johnthan Doe - UX Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgItem} />

                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <span>Johnthan Doe - UX Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

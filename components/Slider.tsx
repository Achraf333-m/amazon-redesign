import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect, useRef } from 'react'
  
export default class NextJsCarousel extends Component {
    render() {

        return (
            <div>
              <Carousel className='hideit'>
                  <div>
                      <img src="https://m.media-amazon.com/images/I/615Zwk+OB7L._SX3000_.jpg"/>
  
                  </div>
                  <div>
                      <img src="https://m.media-amazon.com/images/I/71upF3u7n-L._SX3000_.jpg" />
  
                  </div>
                  <div>
                      <img src="https://m.media-amazon.com/images/I/814vuMu5eLL._SX3000_.jpg"/>
  
                  </div>
              </Carousel>
            </div>
        );
    }
};
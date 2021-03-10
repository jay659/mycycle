import React from 'react';

function Slider() {
    return (
      <div id="carousel-section">
      <div class="slider cstm-container-slider">
      <div class="slider--el slider--el-1 anim-4parts active">
        <div class="slider--el-bg">
          <div class="part top left"></div>
          <div class="part top right"></div>
          <div class="part bot left"></div>
          <div class="part bot right"></div>
        </div>
        <div class="slider--el-content">
          <h2 class="slider--el-heading">First slide</h2>
        </div>
      </div>
      <div class="slider--el slider--el-2 anim-9parts">
        <div class="slider--el-bg">
          <div class="part left-top"></div>
          <div class="part mid-top"></div>
          <div class="part right-top"></div>
          <div class="part left-mid"></div>
          <div class="part mid-mid"></div>
          <div class="part right-mid"></div>
          <div class="part left-bot"></div>
          <div class="part mid-bot"></div>
          <div class="part right-bot"></div>
        </div>
        <div class="slider--el-content">
          <h2 class="slider--el-heading">Second slide</h2>
        </div>
      </div>
      <div class="slider--el slider--el-3 anim-5parts">
        <div class="slider--el-bg">
          <div class="part part-1"></div>
          <div class="part part-2"></div>
          <div class="part part-3"></div>
          <div class="part part-4"></div>
          <div class="part part-5"></div>
        </div>
        <div class="slider--el-content">
          <h2 class="slider--el-heading">Third slide</h2>
        </div>
      </div>
      
      <span class="slider--control left"></span>
      <span class="slider--control right"></span>
    </div>
        </div>
    )
}

export default Slider

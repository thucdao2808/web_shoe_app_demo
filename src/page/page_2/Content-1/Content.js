import React from 'react'
import "./Layout.css"

import Slider from "./Slider"
const Content = () => {
  
    return (
        <div className='masonry_page'>
             <div class="masonry-list">
               <div className='list-three-1'>
               <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/hang-san-xuat/nike/">
                         
                            <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/03/z4209894633570_cc32d1c3502044280e41683fc2a847b8-e1680257559990.jpg" alt="Nike"/>
                            <h4 class="masonry-item__heading">Nike</h4>
                       </a>
                </div>
                <div class="masonry-item" >
                      <a class="masonry-item__link" href="https://soccerstore.vn/hang-san-xuat/adidas/">
                      
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/03/z4205004259118_a7b0b6d79f7680c9c7b3149505afe41f.jpg" alt="Adidas"/>
                          <h4 class="masonry-item__heading">Adidas</h4>
                       </a>
               </div>
               <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/hang-san-xuat/puma/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/03/z4205004226581_4f52f912e7a39b73a5a0fdbe1de0cc95.jpg" alt="Puma"/>
                          <h4 class="masonry-item__heading">Puma</h4>
                       </a>
               </div>
               </div>
                <div className='list-three-2'>
                <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/hang-san-xuat/mizuno/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/03/z4205004238661_9197c0dad6782c715316dc7a92ccd6c2-e1680257495653.jpg" alt="Mizuno"/>
                          <h4 class="masonry-item__heading">Mizuno</h4>
                       </a>
               </div>
                  <div class="masonry-item" >
                      <a class="masonry-item__link" href="https://soccerstore.vn/bo-sua-tap/nike-mercurial-chinh-hang/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/04/z4228549019474_a680ace3abdcecc555ef7cec1f8c5fd5.jpg" alt="Nike Mercurial"/>
                          <h4 class="masonry-item__heading">Nike Mercurial</h4>
                       </a>
               </div>
                <div class="masonry-item" >
                      <a class="masonry-item__link" href="https://soccerstore.vn/bo-sua-tap/giay-adidas-x/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/05/z4335443544908_bb95ebfa94e98e56f5b32b30e0575b6c.jpg" alt="Adidas X"/>
                          <h4 class="masonry-item__heading">Adidas X</h4>
                       </a>
               </div>
                </div>
                <div className='list-three-3'>
                 <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/bo-sua-tap/nike-tiempo-chinh-hang/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/04/z4228720458955_134027ab53635a015aa657d838267ae2-e1680320911337.jpg" alt="Nike Tiempo"/>
                          <h4 class="masonry-item__heading">Nike Tiempo</h4>
                       </a>
                 </div>
                 <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/bo-sua-tap/nike-tiempo-chinh-hang/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/04/z4228720458955_134027ab53635a015aa657d838267ae2-e1680320911337.jpg" alt="Nike Tiempo"/>
                          <h4 class="masonry-item__heading">Nike Tiempo</h4>
                       </a>
                 </div>
                 <div class="masonry-item">
                      <a class="masonry-item__link" href="https://soccerstore.vn/bo-sua-tap/nike-tiempo-chinh-hang/">
                          <img class="masonry-item__img" src="https://soccerstore.vn/wp-content/uploads/2023/04/z4228720458955_134027ab53635a015aa657d838267ae2-e1680320911337.jpg" alt="Nike Tiempo"/>
                          <h4 class="masonry-item__heading">Nike Tiempo</h4>
                       </a>
                </div>
                </div>
             </div>
             <h3 className='title-blog'>Blog Product</h3>
             <Slider>
            
             </Slider>
             
        </div>
    )
}
export default Content
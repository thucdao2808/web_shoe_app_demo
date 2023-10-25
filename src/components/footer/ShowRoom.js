import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const ShowRoom = () => {
    return (
        <div>
           <div class=" footer-item--showroom">
                <h4 class="footer-item__heading">Showroom</h4>
                <div class="footer-item__content">
                           <div class="showroom">
                               <h6 class="showroom__heading"><FontAwesomeIcon className='map-icon' icon={faLocationDot } />Showroom Hà đông</h6>
                               <p>Số 2 ngõ 121 Thái Hà, Đống Đa, Hà Nội</p>
                            </div>
                            <div class="showroom">
                                <h6 class="showroom__heading"><FontAwesomeIcon className='map-icon' icon={faLocationDot } />Showroom Hà Đông</h6>
                                <p>Số 14-LK 25 ( đối diện 86 ) Lê Lai, Hà Đông, Hà Nội</p>
                            </div>
                            <div class="showroom">
                                 <h6 class="showroom__heading"><FontAwesomeIcon className='map-icon' icon={faLocationDot } />Showroom Cầu Giấy</h6>
                                <p>Số 22 ngõ 30 Trần Quý Kiên, Cầu Giấy, HN</p>
                            </div>
                            <div class="showroom">
                                 <h6 class="showroom__heading"><FontAwesomeIcon className='map-icon' icon={faLocationDot } />Showroom Hải Phòng</h6>
                                 <p>Số 748 Ngô Gia Tự, Hải An, Hải Phòng</p>
                            </div>
               </div>
            </div>
        </div>
    )
}

export default ShowRoom
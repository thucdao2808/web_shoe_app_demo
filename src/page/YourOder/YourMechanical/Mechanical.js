import React from 'react'
import "./Oder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile ,faGift} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Mechanical = () => {
    return (
        <div>
            <div className='container_oder'>
                <div className='img-oder'>
                    <img  className="image_oder" alt='' src='https://tse1.mm.bing.net/th?id=OIP.cgN4anWKuz-RbnKec90qiAHaHa&                                                                                  pid=Api&P=0&h=220'>
                    </img>
                </div>
                <div className='title-oder'>
                     <div className='yous_order'>
                        <h2 className='intro_oder'>Adidas Predator Accuracy .3 TF màu đen / xanh chuối IG0768</h2>
                        <h3 className='code_goods'>Mã sản phẩm:<span className='code'> #IG0768</span></h3>
                     </div>
                     <div className='price_comon'>
                           <span className='price_main'>3.200.000đ</span>
                           <span className='price_sale'>3.700.000đ</span>
                     </div>
                     <div className='promotion'>
                          <div className='discount'>
                             <FontAwesomeIcon className='icon_oder' icon={faGift} />
                             Nhập mã xin chào để được giảm 50K cho đơn hàng từ 0đ
                          </div>
                     </div>
                     <div className='decribe'>
                            Giày Adidas Predator Accuracy .3 TF, mã sản phẩm IG0768 vừa mới được ra mắt trên toàn thế giới, đây là phối màu khá lạ nhưng ấn tượng, mạnh mẽ, phong cách lowkey. Phần lớn giày phủ bởi màu đen pha xám nên nó khá sáng, thêm vào đó là các chi tiết màu xanh chuối, cả viền và đế giày cũng màu này. Đây là phiên bản cổ trung, lưỡi gà liền từ chất liệu sợi dệt mật độ cao, đảm bảo cảm giác ôm chân tuyệt vời.
                     </div>
                     <div className='select_size'>
                          <div className='table_size'>
                             <h4 className='choose_size'>Chọn size</h4>
                             <div className='size_details'>
                                <span className='pick_size'>36</span>
                                <span className='pick_size'>36.5</span>
                                <span className='pick_size'>37</span>
                                <span className='pick_size'>37.5</span>
                                <span className='pick_size'>38</span>
                                <span className='pick_size'>38.5</span>
                                <span className='pick_size'>39</span>
                                <span className='pick_size'>39.5</span>
                                <span className='pick_size'>40</span>
                                <span className='pick_size'>40.5</span>
                                <span className='pick_size'>41</span>
                                <span className='pick_size'>41.5</span>
                                <span className='pick_size'>42</span>
                                <span className='pick_size'>43</span>
                             </div>
                             
                          </div>
                     </div>
                     <div className='support'>
                        <ul class="hotline">
                            <li class="icon">
                                     <FontAwesomeIcon className='icon_mobile' icon={faMobile} />
                            </li>
							<li class="text">
                                    <a href="tel:09#####">
										Steven Thức:0184081-4281
                                    </a>
                            </li>
						</ul>

                     </div>
                     <button className='btn_click_oder'>
                            <div >
                               <Link to="/information">
                                   <span className='Oder_click'>ĐẶT HÀNG</span>
                               </Link>
                            </div>
                     </button>
                </div>
            </div>
        </div>
    )
}

export default Mechanical
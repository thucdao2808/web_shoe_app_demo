import React from 'react'
import "./Information.css"
import { Link } from 'react-router-dom'
const PerformDelivery = () => {
    return (
        <div className='Main-page_information_oder'>
              <div className='Main_infor'>
               <div className='resume'>
                <div className='information'>
                        <h2 className='name-oder'>
                            Họ và tên
                        </h2>
                        <input required="" placeholder='NHập họ tên đầy đủ của bạn' type="text" name="text" autocomplete="off" class="input_mechanical"/>
                </div>
                  <div className='information'>
                        <h2 className='address'>
                           Địa chỉ
                        </h2>
                        <input placeholder='điền địa chỉ của bạn' type="text" name="text" autocomplete="off" class="input_mechanical"/>
                </div>
                  <div className='information'>
                        <h2 className='email'>
                           Điền email
                        </h2>
                       <input required="" placeholder='nhập email' type="text" name="text" autocomplete="off" class="input_mechanical"/>
                </div>
                  <div className='information'>
                        <h2 className='phone_number'>
                           số điện thoại
                        </h2>
                        <input required="" placeholder='Phone Number' type="text" name="text" autocomplete="off" class="input_mechanical"/>
                </div>
                  <div className='information'>
                        <h2 className='note'>
                           ghi chú
                        </h2>
                        <input required="" placeholder='Ghi chú cho đơn hàng của bạn' type="text" name="text" autocomplete="off" class="input_mechanical"/>
                </div>
              </div>
              <div className='content_mechanical_oder'>
                 <div className='img_and_title'>
                    <img className='img-information' src='https://tse1.mm.bing.net/th?id=OIP.cgN4anWKuz-RbnKec90qiAHaHa&                                                                                  pid=Api&P=0&h=220'></img>
                    <div className='property'>
                        <h4 className='information_title'>Adidas Predator Accuracy .3 TF màu đen / xanh chuối IG0768</h4>
                        <div>
                            <span className='price_origin'>1.950.000 đ</span>
                            <span className='price_discount'>2.400.000 đ</span>
                        </div>
                    </div>
                 </div>
                 <hr></hr>
                 <div className='Total'>
                     <h4>TỔNG CỘNG</h4>
                     <span className='total_price'>1.950.000 đ</span>
                 </div>
                 <hr></hr>
                 <div className='form_checkout'>
                     <h4>Nhận Hàng Thanh Toán(COD)</h4>
                 </div>
                 <hr></hr>
                 <button className='btn_click_oder'>
                            <div >
                               <Link to ='/sucess'>
                                   <span className='Oder_click'>ĐẶT HÀNG</span>
                               </Link>
                            </div>
                     </button>
              </div>
            </div>
        </div>
    )
}

export default PerformDelivery
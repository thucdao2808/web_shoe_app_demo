import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const ListOpition = () => {
    // const listItems =[ 
    //     'sản phẩm ',
    //      'tin tức ',
    //     'hướng dẫn ',
    //     'sales',
    // ]
       
    
    return (
    <div className='select'>
        <div className='item-option'>
             <ul className='list-item'>
                 <li className='list-click'>Sản phẩm <FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><Link className='option' to="/container">Nike Cortez</Link></li>
                                  <li className='mount'><Link className='option' to="/MainPageShirt">Áo Đá Bóng</Link></li>
                                  <li className='mount'><Link className='option' to="/MainPageTrouser">Quần thể thao</Link></li>
                                  <li className='mount'><Link className='option' to="/MainPageSock">Tất Đá Bóng</Link></li>
                                  <li className='mount'><Link className='option' to="/MainPageKneeling">Bó gối</Link></li>
                                  <li className='mount'><Link className='option' to="/MainTape">BĂng cuốn cổ chân</Link></li>
                                 

                             </ul>
                 </li>
                 <li className='list-click'><Link  className='click-product' to='/PageStory'>Tin Tức</Link><FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><Link className='option' to='/PageStory' >Adiddas Blog</Link></li>
                                  <li className='mount'><Link className='option' to='/PageStory' >GK Blog</Link></li>
                                  <li className='mount'><Link className='option' to='/PageStory' >Nike Blog</Link></li>
                                  <li className='mount'><Link className='option' to='/PageStory' >Tin sales</Link></li>
                                 
                             </ul>
                </li>
                 <li className='list-click'><Link  className='click-product' to='/GuideOder'>Hướng dẫn</Link><FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><Link className='option' to='/GuideOder' >hướng dẫn đặt hàng</Link></li>
                                  <li className='mount'><Link className='option' to='/GuideCheckoutMain' >HƯớng dẫn thanh toán </Link></li>
                                  <li className='mount'><Link className='option' to='/MainPolicySell' >Chính sách bán hàng</Link></li>
                                  <li className='mount'><Link className='option' to='/MainQuestionNormal' >Câu hỏi thường gặp</Link></li>
                                 
                             </ul>
                  </li>
                 <li className='list-click'><Link className='click-product' to='' >Kids</Link><FontAwesomeIcon icon={faCaretDown} />
                             <ul class="list-instruct">
                                  <li className='mount'><Link className='option' to='/MainPageKidTeam' >Giày đá bóng trẻ em</Link></li>
                                  <li className='mount'><Link className='option' to='/MainGloveKid' >găng tay trẻ em</Link></li>
                             </ul>
                 </li>
            </ul>
      
        </div>
        <div className='hotline-contact'>
               <h1 className='contact'>HotLine: <Link href='#none'>0978402825</Link>-<Link href='#none'>0972997408</Link></h1>
        </div>
    </div>
    )
}

export default ListOpition
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faYoutube,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';
const EmailRearch = () => {
  return (
    <div>
      <div className="footer-item-email">
        <h4 className="footer-item__heading">Nhập email nhận voucher giảm giá</h4>
        <div className="footer-item__content">
          <form className="form-subscribe" method="POST" action="#">
             <div class="container-footer">
                   <input type="text" name="text" class="input-gmail" placeholder="Fill in email to search"/>
                   <button class="search__btn-footer">
                         <FontAwesomeIcon className='link-icon' icon={faEnvelopeCircleCheck}/> Gửi
              </button>
              </div>
              
          </form>
          <ul className="footer-follow">
            <li>
              <span className="footer-follow__label">Follow Us</span>
            </li>
            <li>
              <a className="footer-follow__link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/soccerstore.vn">
              <FontAwesomeIcon className='link-icon' icon={faFacebook} />
              </a>
            </li>
            <li>
              <a className="footer-follow__link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCKbHsKyduAfEjuM5bazVO7A">
              <FontAwesomeIcon className='link-icon' icon={faYoutube} />
              </a>
            </li>
            <li>
              <a className="footer-follow__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/soccerstorevn">
              <FontAwesomeIcon className='link-icon' icon={faInstagram} />
              </a>
            </li>
          </ul>
          <div className='certification-national'>
            Chứng nhận bởi 
            <a href="http://online.gov.vn/Home/WebDetails/5938">
                <img className='certification' src="https://soccerstore.vn/wp-content/uploads/2022/12/logoSaleNoti.png" alt="logoSaleNoti" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRearch;

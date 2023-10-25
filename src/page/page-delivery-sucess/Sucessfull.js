import React from 'react'
import "./Sucessfull.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
const Sucessfull = () => {
    return (
        <div className='oder-sucess'>
            <h1 className='manager-oder'> Quản lí Đơn hàng của bạn</h1>
             <div className='couter-icon'>
             <FontAwesomeIcon className='icon-sucess'  icon={faCircleCheck} />
             </div>
             <div className='confirm-order'>
                <h3 className='put-oder'>đặt hàng thành công</h3>
                <span className='code-exchange'>mã giao dịch:#8735275729</span>
             </div>
             <div>
                 <p className='param-es'> chúng tôi sẽ liên hệ với bạn ngay sau khi đơn hàng được đặt</p>
                 <span className='feel-satisfaction'>mọi chi tiết thắc mắc vui long liên hệ tới bô phận chăm sóc khách hàng qua sdt :0978402825</span>
             </div>
             <div className='sucess-last'>
                <Link to='/container'>
                    <div className='continue-buy'>Tiếp tục mua hàng</div>
                </Link>
                <Link to='/'>
                    <div className='end'>Thoát</div>
                </Link>
             </div>
        </div>
    )
}

export default Sucessfull
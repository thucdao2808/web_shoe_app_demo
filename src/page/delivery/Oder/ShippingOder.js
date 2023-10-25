import React from 'react'
import "./shipping.css"
const ShippingOder = () => {
    return (
        <div className='Oder'>
        <div className='deliver'>
            <h4 className='title-order'>Không có sản phẩm nào trong giỏ hàng</h4>
            <a href='#none' className='link_oder'>
                <h3 className='continue_shopping'>Tiếp tục mua hàng</h3>
            </a>
        </div>
    </div>
    )
}

export default ShippingOder
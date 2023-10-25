import React from 'react'
import "./Layout.css"

const GuideClient = () => {
    return (
        <div>
            <div className='main'>
                <h1 className='entry-title'>Hướng dẫn đặt hàng</h1>
                <strong className='entry-content'>
                    <p>
                      <strong>1.LIên hệ trực tiếp với người đại diện của Shop để nhận được dược sự trợ giúp</strong>
                      </p>
                </strong>
            <table className='Board_hotline'>
                <tr className='detail_of_table'>
                    <td>phương thức liên hệ</td>
                    <td>putin</td>
                    <td>Mr.kiên</td>
                </tr>
                <tr className='detail_of_table'>
                     <td>Email</td>
                     <td>sales@daothuc.vn</td>
                     <td>thaonv@thucdao.vn</td>
                </tr>
                <tr className='detail_of_table'>
                     <td>Zalo</td>
                     <td>078.###.####</td>
                     <td>0923.###.###</td>
                </tr>
                <tr className='detail_of_table'>
                     <td>Yahoo</td>
                     <td>sales@thucdao.vn</td>
                     <td></td>
                </tr>
                <tr className='detail_of_table'>
                     <td>FaceBook</td>
                     <td>sales@thucdao.vn</td>
                     <td></td>
                </tr>
            </table>
            <div className='location'>
                        <p>Địa chỉ:</p>
                        <p>Store 1: Số 2 ngõ 121 Thái Hà, quận Đống Đa, Hà Nội</p>
                        <p>Store 2: số 14LK25, đối diện số 86 Lê Lai, quận Hà Đông, Hà Nội</p>
                        <p>Store 3: số 22 ngõ 30 Trần Quý Kiên, quận Cầu Giấy, Hà Nội<br/>
                          Store 4: Số 748 Ngô Gia Tự, quận Hải An, TP Hải Phòng</p>
                        <p className='hotline-Facebook'><strong>2. Liên hệ qua facebook page:</strong></p>
                        <p>Facebook page chính thức của ngocthuc.vn tại :&nbsp;<a className='link_guide' href="https://www.facebook.com/thucdao.vn" target="_blank" rel="noopener noreferrer">https://www.facebook.com/thucdao.vn</a></p>
                        <p className='Oder_website'><strong>3. Đặt hàng trên website.</strong><br/></p>
                        <p>
                            – Truy cập www.thucdao.vn
                            – Chọn sản phẩm muốn đặt theo các hướng dẫn sau.<br></br>
                              1) Kiểm tra tình trạng sản phẩm<br/>
                              2) Chọn kích size sản phẩm.<br/>
                              3) Click vào nút ” Thêm vào giỏ hàng ”<br/>
                              4) Nhập các thông tin liên hệ.<br/>
                              5) Click vào nút ” Gửi đơn hàng ”<br/>
                              3. Gửi thông tin liên hệ theo các cách.<br/>
                                – Click vào mục” Liên hệ ” và gửi các thông tin đầy đủ như : sản phẩm quan tâm, số điện thoại liên hệ.<br/>
                                – Click pop up phía dưới trang, gửi các thông tin liên hệ đầy đủ như : sản phẩm quan tâm, số điện thoại liên hệ.<br/>
                                – Click vào mục online support, sử dung Zalo hoặc skype để chat với người phụ trách.
                        </p>
            </div>
        </div>
    </div>
    )
}

export default GuideClient
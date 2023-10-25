import React from 'react'
import { useState } from 'react'
import "./Layout.css"
const Slider = () => {
    const FeedbackBlog=[
        {
            id:"1",
            image:"https://soccerstore.vn/wp-content/uploads/2023/07/IMG_7362-scaled.jpg",
            link :"https://soccerstore.vn/top-5-doi-giay-da-bong-chan-be-duoc-ua-chuong-nhat-2023/",
            title:"Top 6 đôi giày đá bóng chân bè được ưa chuộng nhất 2023",
            feedback:" Với rất nhiều ae chơi bóng ở Việt Nam thì nỗi khổ khi tìm một đôi giày đá bóng dành cho chân bè là thường trực. Những người&nbsp; chân bè ám chỉ những aecó bàn chân rộng hơn so với bình thường. Điều này có nghĩa là chiều rộng của bàn chân, đặc biệt là […]"

        },
        {
            id:"2",
            image:"https://soccerstore.vn/wp-content/uploads/2023/09/z4631687024661_b0915430411a0d65abe9e26713702643.jpg",
            link :"https://soccerstore.vn/top-5-doi-giay-da-bong-chan-be-duoc-ua-chuong-nhat-2023/",
            title:"Giày bóng đá bị bốc mùi hôi phải làm sao?",
            feedback:" Giày bóng đá sử dụng một thời gian thường hay có mùi hôi, nguyên nhân là do vi khuẩn tích tụ lâu ngày trong giày sau mỗi lần sử dụng. Cụ thể có thể bao gồm các nguyên nhân chính sau: – Mồ hôi: Khi chơi bóng đá, hoạt động vận động dẫn đến tăng …"

        },
        {
            id:"3",
            image:"https://soccerstore.vn/wp-content/uploads/2023/07/Mua-1-tang-1-Final.jpg",
            link :"https://soccerstore.vn/top-5-doi-giay-da-bong-chan-be-duoc-ua-chuong-nhat-2023/",
            title:"Puma Elements pack là sản phẩm mới nhất tháng 5/2023",
            feedback:"Những ngày đầu mùa giải 2023/2024 của các giải bóng đá hấp dẫn nhất trên thế giới cũng đã khởi tranh, đánh dấu sự trở lại của những màn đối đầu đầy kịch tính. Chúng ta lại được chiêm ngưỡng những ngôi sao hàng đầu thế giới phô diễn trên sân cỏ mỗi buổi cuối […]"

        },
        {
            id:"4",
            image:"https://soccerstore.vn/wp-content/uploads/2023/07/cach-khu-mui-hoi-giay-720x409-1.jpg",
            link :"https://soccerstore.vn/top-5-doi-giay-da-bong-chan-be-duoc-ua-chuong-nhat-2023/",
            title:"Top 6 đôi giày đá bóng chân bè được ưa chuộng nhất 2023",
            feedback:" Với rất nhiều ae chơi bóng ở Việt Nam thì nỗi khổ khi tìm một đôi giày đá bóng dành cho chân bè là thường trực. Những người&nbsp; chân bè ám chỉ những aecó bàn chân rộng hơn so với bình thường. Điều này có nghĩa là chiều rộng của bàn chân, đặc biệt là […]  "

        },
        {
            id:"5",
            image:"https://soccerstore.vn/wp-content/uploads/2023/05/z4343547394933_1a08f3f667654380adb3ef75abeb5c8b.jpg",
            link :"https://soccerstore.vn/top-5-doi-giay-da-bong-chan-be-duoc-ua-chuong-nhat-2023/",
            title:"MUa Giày -Tặng Giày:chương trình khuyến mãi có một không hai",
            feedback:"Cực sốc: Chương trình khuyến mãi có một không hai: “Mua giày tặng giày”. từ 26/6 đến 15/7 Mua đôi bên trái, tặng đôi bên phải trong hình.&nbsp; Chi tiết và giá các mẫu nằm trong chương trình có tại Link: Xem ngay Diễn ra từ 26/6 đến 15/7, chương trình tri ân KH “Mua […]          "

        },
    ] 
    return (
        <div className='Blog'>
              {FeedbackBlog.map((item, index) => (
                 <div className='Content_blog' key={item.id}>
                   <a href={item.link}>
                      <img className="blog-item__image" src={item.image} alt={item.title} />
                      <h2 className='blog-item__heading'>{item.title}</h2>
                      <p className='feedback'>{item.feedback}</p>
                    </a>
                </div>
              ))}
        </div>
    )
}

export default Slider;
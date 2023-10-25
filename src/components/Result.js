import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Datas} from '../data-all';
import "./Result.css"
const Result = ({datas}) => {
    const {q}=useParams();
    const fitterProducts=Datas.filter((item) =>
        item.title.toLowerCase().includes(q.toLowerCase())
     );
     console.log(fitterProducts);
    return (
        <div>
            <h1 className='title-screen'>Bạn vừa tìm kiếm : {q}</h1>
            {fitterProducts.map((item) =>(
            <div key={item.id} className='limit'> 
                <div className='result-search' key={item.id}>
                  <img className="rearch-repair-img" src={item.image} alt={item.title} />
                    <h2 className='rearch-repair-title'>{item.title}</h2>
                    <div className='-search-price'>
                       <span className='search-repair-price'>{item.price}</span>
                       <span className='search-repair-price-sale'>{item.priceSale}</span>
                    </div>
                </div>
            </div>
            ))}
            <Link to='/chosen-buy'>
            <div className='chossen-buy'>
                    <span className='buy-product-clicked'>Mua sản phẩm</span>   
            </div>
            </Link>
        </div>
    )
}

export default Result
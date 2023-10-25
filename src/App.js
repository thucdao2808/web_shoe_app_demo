import React from 'react'; 
import "./App.css"
import ListOpition from './components/Header/ListOption';  
import TotalHeader from './components/TotalHeader';
import TotalFooter from './components/TotalFooter';
// mainPage là trang đầu 
import MainPage from './page/page_2/MainPage'; 
// PageStory là trang giới thiệu
import PageStory from "./page/Page_3/PageStory";
// delivery là trang đơn hàng
import Delivery from './page/delivery/Delivery';
// Container_page là trnag chứa sản phẩm và danh mục
// import Container_page from './page/page_1/ContainerPage';
// GUide  là trnag hướng dẫn
import GuideOder from "./page/Guide/GuideOder"
import "./App.css"
import Scroll from './page/page_1/Scoll-top.js/Scoll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from "./components/LogIn/LogIn"
import Page_main from "./components/Page_main"
import Page from "./page/page_1/Page"
import ButtonLogIn from './components/LogIn/LogIn/ButtonLogIn';
import SigIn from './page/SigIn/SigIn';
import Container_page from './page/page_1/ContainerPage';
import GuideCheckoutMain from './page/Guide/MainGuideCheckout';
import MainPolicySell from './page/Guide/MainPolicySell';
import MainQuestionNormal from './page/Guide/MainQuestionNormal';
import MainPageKidTeam from './page/MainKid_2/MainPageKidTeam';
import MainGloveKid from './page/PageGloveKid/MainGloveKid';
import MainPageShirt from './page/PageShirt/MainPageShirt';
import MainpageTrouser from './page/Trouser/MainpageTrouser';
import MainPageSock from './page/Page_Sock/MainPageSock';
import MainPageKneeling from './page/PageKneeling/MainPageKneeling';
import MainTape from './page/ListTape/MainTape';
import Oder from './page/YourOder/Oder';
import MainInformation from './page/information/MainInformation';
import OderSucess from './page/page-delivery-sucess/Render_oder_sucess/OderSucess';
import ToatalResult from './components/ToatalResult';
function App() {
  return (
      <div className='Web_main'>
   
         <BrowserRouter>
           <Routes>
            <Route path='/' element={<LogIn/>}></Route>
            <Route path='/ButtonLogIn' element={<MainPage/>}></Route>
            <Route path='/container' element={<Container_page/>}></Route>
            <Route path='/PageStory' element={<PageStory/>}></Route>
            <Route path='/GuideOder' element={<GuideOder/>}></Route>
            <Route path='/delivery' element={<Delivery/>}></Route>
            <Route path='/SigIn' element ={<SigIn/>}> </Route>
            <Route path='/GuideCheckoutMain' element ={<GuideCheckoutMain/>}> </Route>
            <Route path='/MainPolicySell' element ={<MainPolicySell/>}> </Route>
            <Route path='/MainQuestionNormal' element ={<MainQuestionNormal/>}> </Route>
            <Route path='/MainPageKidTeam' element ={<MainPageKidTeam/>}> </Route>
            <Route path='/MainGloveKid' element ={<MainGloveKid/>}> </Route>
            <Route path='/MainPageShirt' element ={<MainPageShirt/>}> </Route>
            <Route path='/MainPageTrouser' element ={<MainpageTrouser/>}> </Route>
            <Route path='/MainPageSock' element ={<MainPageSock/>}> </Route>
            <Route path='/MainPageKneeling' element ={<MainPageKneeling/>}> </Route>
            <Route path='/MainTape' element ={<MainTape/>}> </Route>
            <Route path='/Mechanical' element={<Oder/>}></Route>
            <Route path='/information' element={<MainInformation/>}></Route>
            <Route path='/sucess' element={<OderSucess/>}/>
            <Route path='/btn-result/:q' element={<ToatalResult/>}/>
            <Route path='/chosen-buy' element={<MainInformation/>}></Route>
           </Routes>
         </BrowserRouter>
     </div>

      
   
  );
}

export default App;

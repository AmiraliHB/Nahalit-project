import React, { useState } from 'react';
import './App.css';
import png from '../src/photo/atry1.png';
import png2 from '../src/photo/atry2.png';
import png3 from '../src/photo/atry3.png';
import png4 from '../src/photo/atry4 (1).png';
import png5 from '../src/photo/trustlogo.png';
import nahal from './photo/nahal.png'
import '../src/ScrollToTopButton';
import ScrollToTopButton from '../src/ScrollToTopButton';





function App() {


  
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  
  };

  return (
    <div className="container">
      <ScrollToTopButton/>
      <header className="navbar">
        <img className= 'logo' src={nahal} alt="" />
       

        <div className='nav-icons'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0  24 24" aria-hidden="true" class="text-[#57C053] text-3xl hover:text-[#62d15e]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>        
        </div>

        <div className='nav-icons2'>    
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[#57C053] text-3xl hover:text-[#62d15e]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
        </div>
            <div className='nav-member'>
          <button className='coopration'>فروشنده شوید</button>
          <button className="login-btn">ورود و عضویت</button>
        </div>
        

        <nav>
          <ul className="nav-links">
            <li>خدمات ما</li>
            <li>استخدام</li>
            <li>نمونه کار ها</li>
            <li>بلاگ</li>
            <li>ثبت سفارش</li>
            <li>محصولات</li>
            <li>صفحه اصلی</li>
          </ul>
        </nav>
        
      </header>

      <main className="hero">

        <div className='nahal'>
        <h1>Nahal IT</h1>
      
        <div className="search-container">
          <input
            type="text"
            placeholder="دنبال چی میگردی؟"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
          <svg width="14px" height="14px" viewBox="-24 -24 72.00 72.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(4, 0, 0, 4, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="1.656" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
        </div>
<h2>نهال آی تی | اولین وبسایت خدماتی فروشگاهی در حوزه آی تی در ایران</h2>
        <p>فروش سایت های آماده, طراحی سایت اختصاصی ,موشن گرافیک , خدمات پریمیر , خدمات سئو , خدمات گرافیک , خدمات شبکه های اجتماعی بدون پیش پرداخت</p>

        <h3>به همراه قرعه کشی ماهانه</h3>
       <h3>هر آنچه از حوزه آی تی میخواهید از نهال آی تی بخواهید</h3>
       <h3>پشتیبانی 24 ساعته : 02188867940 – 09927674217</h3>
   
       </div>
      
      <div className='services'>

<span className='services-font'>:خدمات تخصصی </span>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><circle fill="#4CAF50" cx="24" cy="24" r="21"></circle><g fill="#fff"><rect x="21" y="14" width="6" height="20"></rect><rect x="14" y="21" width="20" height="6"></rect></g></svg>
      

      </div>
       

       <div className='services-class'>
<div className='card'>
<a className='svg-card' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"></path></svg></a>
<a  className= 'links' href="">فروش قالب سایت</a>
<p>در این بخش، قالب های .html ، css ، جاوا اسکریپت (Java Script) ، ری اکت (React) ، ویو جی اس (vue js) ، نود جی اس (node js) ، وردپرس و غیره و ماژول های وردپرس، به فروش می رسد</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card2'>
<a className='svg-card2' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"></path></svg></a>
<a  className= 'links' href="">طراحی وبسایت اختصاصی</a>
<p className='card-text'>طراحی وب سایت اختصامحصول یکی از انواع طراحی وب است که توسط شرکت های طراح و توسعه دهنده وب حرفه ای انجام می شود که با توجه به نیاز مشتری ، وب سایت به صورت اختصاصی برای آنان طراحی می کنیم.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card3'>
<a className='svg-card3' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path><path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z"></path><path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></a>
<a  className= 'links' href="">خدمات وبسایت و سئو وب سایت</a>
<p className='card-text'>یکی از خدمات اصلی سایت که برای بهبود فروش و شناخته شدن شما و افزایش بازدید سایت شما می باشد ، خدمات سئو سایت می باشد. با این خدمات شما می توانید در صفحه گوگل در جایگاه بالاتر قرار بگیرید.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card4'>
<a className='svg-card4' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"></path></svg>  </a>
<a  className= 'links' href="">خدمات کسب و کار</a>
<p className='card-text'>  تیم خدمات کسب و کار نهال آی تی ، جهت بهبود سریع تر در کسب و کار های نوپا و انواع کسب و کارها، میتواند از ابتدای هر کسب و کاری، تا برند شدن و افزایش فروش آن کسب و کار ، به شما کمک کند.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card5'>
<a className='svg-card5' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M55.379 25l-28.4 142H172.27L256 83.271 339.729 167H485.02l-28.4-142zM256 108.727L179.729 185H41v302h158v-87c0-18.25 7.166-33.077 18.021-42.727C227.877 347.624 242 343 256 343s28.123 4.624 38.979 14.273C305.834 366.923 313 381.75 313 400v87h158V185H332.271zm0 38.544l57 57V297H199v-92.729zm0 25.456l-39 39V279h78v-67.271zM71 199h98v98H71zm272 0h98v98h-98zM89 217v30h62v-30zm272 0v30h62v-30zM89 265v14h62v-14zm272 0v14h62v-14zM71 359h98v98H71v-98zm272 0h98v98h-98v-98zm-87 2c-10 0-19.877 3.376-27.021 9.727C221.834 377.077 217 386.25 217 400v87h78v-87c0-13.75-4.834-22.923-11.979-29.273C275.877 364.376 266 361 256 361zM89 377v62h62v-62zm272 0v62h62v-62z"></path></svg>  </a>
<a  className= 'links' href="">فروش سایت اختصاصی و اقتصادی</a>
<p className='card-text'>در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی ، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>


<div className='card6'>
<a className='svg-card6' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg>  </a>
<a  className= 'links' href=""> خدمات شبکه های اجتماعی</a>
<p className='card-text'>اگر قصد دارید رشد سریع تری را در شبکه های اجتماعی مانند آپارات و اینستاگرام و تلگرام و لینکدین و توییتر و دیگر شبکه های اجتماعی تجربه کنید و حرفه ای کار کنید ، میتوانید از خدمات نهال آی تی استفاده کنید.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>


<div className='card7'>
<a className='svg-card7' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>  </a>
<a  className= 'links' href=""> خدمات موشن گرافیک</a>
<p className='card-text'> ویدیوهایی که پیام و محتوا را به صورت متحرک منتقل می کنند موشن هستند. واژه موشن Motionدر زبان فارسی پویا ترجمه می شود و به هر چیزی که دارای حرکت باشد. تیم موشن گرافیک نهال آی تی ، آماده انجام تمامی خدمات شما در حوزه گرافیکی می باشد.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card8'>
<a className='svg-card8' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg>  </a>
<a  className= 'links' href=""> خدمات گرافیک</a>
<p className='card-text'> تیم گرافیک نهال آی تی ، کارهای حرفه ای گرافیکی از جمله طراحی لوگو و پوستر و بروشور های تبلیغاتی، و طراحی انواع بنر های تبلیغاتی و کارت های ویزیت، همچنین طراحی انیمیشن و کاراکتر سازی و تیزر تبلیغاتی و همچنین طراحی UI/UX سایت را با سرعت بالا و کیفیت بالا انجام می دهد.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>


<div className='card9'>
<a className='svg-card9' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"></path></svg>  </a>
<a  className= 'links' href=""> تدوین پروپوزال</a>
<p className='card-text'>  در تیم مشاوره نهال آی تی ، ما از صفر تا صد نقشه کسب و کار شما را به صورت الکترونیکی و یا به صورت تلفنی ، به شما مشاوره میدهیم که چگونه کسب و کارهای خود را راه اندازی و مدیریت نمایید و به سوی برند شدن و افزایش فروش در کسب و کار خود بشتابید.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card10'>
<a className='svg-card10' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path></svg>  </a>
<a  className= 'links' href=""> خدمات اپلیکیشن موبایل</a>
<p className='card-text'>تیم اپلیکیشن نهال آی تی با استفاده از طرح ها و ایده های نو و با استفاده از تکنولوژی های به روز، میتواند کسب و کارهای شما را به صورت سریع و از طریق اپلیکیشن در اختیار مشتریان شما قرار دهد.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card11'>
<a className='svg-card11' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M275.5 96l-96 96h-96v128h96l96 96V96zm51.46 27.668l-4.66 17.387c52.066 13.95 88.2 61.04 88.2 114.945 0 53.904-36.134 100.994-88.2 114.945l4.66 17.387C386.81 372.295 428.5 317.962 428.5 256c0-61.963-41.69-116.295-101.54-132.332zm-12.425 46.365l-4.658 17.387C340.96 195.748 362.5 223.822 362.5 256s-21.54 60.252-52.623 68.58l4.658 17.387C353.402 331.552 380.5 296.237 380.5 256c0-40.238-27.098-75.552-65.965-85.967zm-12.424 46.363l-4.657 17.387C307.55 236.49 314.5 245.547 314.5 256s-6.95 19.51-17.047 22.217l4.658 17.387c17.884-4.792 30.39-21.09 30.39-39.604 0-18.513-12.506-34.812-30.39-39.604z"></path></svg></a>
<a  className= 'links' href="">خدمات تدوین صدا و صدا گذاری</a>
<p className='card-text'>در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات ما در حوزه ی تدوین صدا و صداگذاری ، کاربران میتوانند به راحتی با متخصصان مختلف در حوزه صداگذاری به صورت مشترک، مشاوره بگیرند.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>

<div className='card12'>
<a className='svg-card12' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-[#818a91] text-5xl" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM224 136V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248c-13.2 0-24-10.8-24-24zm96 144.016v111.963c0 21.445-25.943 31.998-40.971 16.971L224 353.941V392c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V280c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v38.059l55.029-55.013c15.011-15.01 40.971-4.491 40.971 16.97z"></path></svg></a>
<a  className= 'links' href="">خدمات پریمیر و تدوین فیلم</a>
<p className='card-text'>در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات پریمیر و تدوین فیلم ، کاربران میتوانند به راحتی با متخصصان مختلف در حوزه تدوین فیلم و نرم افزار پریمیر به صورت مشترک، مشاوره بگیرند.</p>
<button className='card-button'>ادامه مطلب و مشاهده کامل جزییات</button>
</div>
  </div>
       <div className="new-items">
  <div className="new-items-header">
    <div className="new-items-title-section">
      <span className="new-items-main-title">جدیدترین محصولات</span>
      <div className="new-items-icon-title">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="text-2xl text-orange-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
        <span className="new-items-sub-title">Latest Products</span>
      </div>
    </div>
    <div className="new-items-navigation">
      <svg className="new-items-nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg className="new-items-nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
  <div className="new-items-slider-container">
    <div className="slider-content">
      
    </div>
  </div>
</div>

<div className="box-main-container">
    <div className="box-card">
        <img src={png4} alt="" />
        <div className="box-text-container">
            <p className="box-title">طراحی استاندارد</p>
            <p className="box-subtitle">طرح ارسالی</p>
        </div>
    </div>
    <div className="box-card">
        <img src={png3} alt="" />
        <div className="box-text-container">
            <p className="box-title">پرداخت اقساطی</p>
            <p className="box-subtitle">به صورت آنلاین</p>
        </div>
    </div>
    <div className="box-card">
        <img src={png2}alt="fghjv" />
        <div className="box-text-container">
            <p className="box-title">تحویل فوری</p>
            <p className="box-subtitle">با بالاترین کیفیت</p>
        </div>
    </div>
    <div className="box-card">
        <img src={png} alt="giueigu" />
        <div className="box-text-container">
            <p className="box-title">پشتیبانی قوی</p>
            <p className="box-subtitle">به صورت آنی</p>
            
        </div>
    </div>
</div>

<div className="slider-container">
    <div className="slider-header">
        <p className="slider-header-title">پلن کسب و کار حرفه ای</p>
        <p className="slider-header-subtitle">برای بیزینس های تجاری و حرفه ای</p>
    </div>
    <div>
        <div className="slider-price-section">
            <p className="slider-price-range">بین ۲۶ تا ۵۳</p>
            <p className="slider-price-unit">میلیون تومان</p>
        </div>
        <div className="slider-features">
            <div className="slider-feature-item">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>دامین رایگان IR</p>
            </div>
            <div className="slider-feature-item">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="slider-feature-item">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>طراحی وب سایت حرفه ای</p>
            </div>
            <div className="slider-feature-item">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>طراحی اپلیکیشن موبایل</p>
            </div>
            <div className='slider-feature-item-text'>
              <p>طراحی موشن گرافیک برای تبلیغ سایت</p>
            <p>طراحی لوگو و بنرهای سایت</p>
            <p>مناسب کسب و کار های بزرگ و حرفه ای</p>
            </div>
        </div>
        <div className="slider-purchase-section">
            <a href="/our-business-plans">
                <button className="slider-purchase-button">خرید این پلن</button>
            </a>
            <p className="slider-update-note">این طرح شامل بروزرسانی های رایگان است.</p>
        </div>
    </div>
</div>

<div className="slider-container1">
    <div className="slider-header1">
        <p className="slider-header-title1">پلن کسب و کار نوپا</p>
        <p className="slider-header-subtitle1">برای بیزینس های تازه تاسیس</p>
    </div>
    <div>
        <div className="slider-price-section1">
            <p className="slider-price-range1">بین ۷ تا ۱۶  </p>
            <p className="slider-price-unit1">میلیون تومان</p>
        </div>
        <div className="slider-features1">
            <div className="slider-feature-item1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>دامین رایگان IR</p>
            </div>
            <div className="slider-feature-item1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="slider-feature-item1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>طراحی سایت متناسب با سلیقه شما</p>
            </div>
            <div className="slider-feature-item1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>راحی لوگو و بنر های وب سایت</p>
            </div>
            <div className='slider-feature-item-text1'>
              <p>تولید محتوا در ابتدای کسب و کار</p>
            <p>طراحی موشن گرافیک برای تبلیغ سایت</p>
            <p>مناسب کسب و کار های تازه تاسیس</p>
            </div>
        </div>
        <div className="slider-purchase-section1">
            <a href="/our-business-plans">
                <button className="slider-purchase-button">خرید این پلن</button>
            </a>
            <p className="slider-update-note1">این طرح شامل بروزرسانی های رایگان است.</p>
        </div>
    </div>
</div>
      
<div className="slider-container2">
    <div className="slider-header2">
        <p className="slider-header-title2">پلن کسب و کار خانگی</p>
        <p className="slider-header-subtitle2">برای بیزینس های کوچک و خانگی</p>
    </div>
    <div>
        <div className="slider-price-section2">
            <p className="slider-price-range2">بین ۳ تا ۷  </p>
            <p className="slider-price-unit2">میلیون تومان</p>
        </div>
        <div className="slider-features2">
            <div className="slider-feature-item2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>دامین رایگان IR</p>
            </div>
            <div className="slider-feature-item2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="slider-feature-item2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>طراحی سایت با وردپرس</p>
            </div>
            <div className="slider-feature-item2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="feature-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
                <p>طراحی لوگو سایت</p>
            </div>
            <div className='slider-feature-item-text2'>
              <p>طراحیکارت ویزیت</p>
            <p>تولید محتوا در ابتدای کسب و کار</p>
            <p>مناسب کسب و کار های کوچک</p>
            </div>
        </div>
        <div className="slider-purchase-section2">
            <a href="/our-business-plans">
                <button className="slider-purchase-button">خرید این پلن</button>
            </a>
            <p className="slider-update-note2">این طرح شامل بروزرسانی های رایگان است.</p>
        </div>
    </div>
</div>

<div className="new-items1">
  <div className="new-items-header">
    <div className="new-items-title-section">
      <span className="new-items-main-title">سایر محصولات</span>
      <div className="new-items-icon-title">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="text-2xl text-orange-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
        <span className="new-items-sub-title">Latest Products</span>
      </div>
    </div>
    <div className="new-items-navigation">
      <svg className="new-items-nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg className="new-items-nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
  <div className="new-items-slider-container">
    <div className="slider-content">
      
    </div>
  </div>
</div>
<section className="blog-section">
  
    <div className="header-book">
      <span className="title">
      <div className="icon">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#57c053" height="150" width="150" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 66.91V415.8c86.5 1 147.5 14.8 206 29.3V141.4c-45.3-30.1-90.4-58.75-206-74.49zm430 0C355.4 82.65 310.3 111.3 265 141.4v303.7c58.5-14.5 119.5-28.3 206-29.3zm-20.9 26.6l.8 66.99c-59.4 17.6-114.5 37.9-168.9 56-.4-20.9-.7-41.7-1.1-62.6 52.8-29.2 111.2-48.1 169.2-60.39zM69.01 105.3C129.8 119.4 184.1 136 226.1 150.1l.2 19c-41.6-13.9-101.3-32.3-161.35-46.3zm.12 46.6l35.97 6.5-3.2 17.8-35.97-6.5zm54.17 11.3l32.5 6.2-3.4 17.6-32.5-6.2zm53.2 10.5l49.6 9.6-3.4 17.6-49.6-9.6zm263.1 19.9l5.2 17.2-56 16.9-5.2-17.2zm-377.68 4.7C119.2 205 176 212.2 223.8 225l-4.6 17.4c-46-12.4-102.2-19.6-159.38-26.3zM357.1 216l4.8 17.4-71.7 19.8-4.8-17.4zm86.4 21l4.8 17.4-32.8 9.1-4.8-17.4zm-378.3 1.6l49.9 5.2-2 18-49.8-5.4zm76.9 9.8l82.1 12.3-2.6 17.8-82.1-12.3zm248.5 3.7l4.8 17.4L288.5 299l-4.8-17.4zm55.8 22.9l4.6 17.4L348.5 319l-4.6-17.4zm-388.06 6.4c29.84 3.1 61.96 7.5 84.46 13v111L59.2 398c-.33-38.9-.48-77.7-.86-116.6zm104.56 14.7l61.5 7.5-2.2 17.8-61.5-7.5zm161.5 11.8l4.2 17.5-37.8 9.1-4.2-17.5zm129.1 4.1l.4 82.2-78.5 10.2c-.3-23.8-.4-47.7-.7-71.5zM164 334.4l59.8 9.8-3 17.8-59.8-9.8zm271.7 1l-42.8 11.3.3 37.3 42.7-5.6zm-81.4 9.8l3.4 17.6-68.9 13.1-3.4-17.6zm-191.1 29.1l62.6 12.4-3.4 17.6-62.6-12.4zm186.6 6.8l4 17.6-62.5 13.9-4-17.6z"></path>
          </svg>
        </div>
        آخرین مطالب نهال آی تی
      </span>
      <span className="subtitle">L a t e s t  P o s t s  B l o g</span>
    </div>
  
</section>
      
        
      </main>

      

      <footer className="footer">
    <div className="footer-container">
        <div className="footer-section">
        <svg className='footer-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-4xl text-white" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path></svg>
           <i className="icon heart-icon"></i>
            <h3>نماد اعتماد الکترونیکی</h3>
            <p>جزو اتحادیه کسب و کار های مجازی</p>
           <img src={png5} alt="" />
        </div>
        <div className="footer-section">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl text-white" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"></path></svg>
            <i className="icon services-icon"></i>
            <h3>خدمات تیم نهال آی تی</h3>
            <ul>
                <li>خدمات گرافیک</li>
                <li>تدوین پروپوزال و بیزینس پلن</li>
                <li>خدمات اپلیکیشن موبایل</li>
                <li>خدمات پرمیر و تدوین فیلم</li>
                <li>خدمات تدوین صدا و صدا گذاری</li>
            </ul>
        </div>
        <div className="footer-section">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl text-white" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"></path></svg>
            <i className="icon services-icon"></i>
            <h3>خدمات تیم نهال آی تی</h3>
            <ul>
                <li>فروش سایت اختصاصی و اقساطی</li>
                <li>فروش قالب سایت</li>
                <li>طراحی سایت اختصاصی</li>
                <li>خدمات وبسایت و سئو وب سایت</li>
                <li>خدمات کسب و کار</li>
                <li>خدمات شبکه های اجتماعی</li>
                <li>خدمات موشن گرافیک</li>
            </ul>
        </div>
        <div className="footer-section">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-4xl text-white" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"></path><path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"></path></svg>
            <i className="icon admin-icon"></i>
            <h3>خدمات اداری</h3>
            <ul>
                <li>ایمیل مارکتینگ</li>
                <li>پیامک انبوه</li>
                <li>تولید محتوا</li>
                <li>ربات شبکه های اجتماعی</li>
            </ul>
        </div>
        <div className="footer-section">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-4xl text-white" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M14 3C14.5523 3 15 3.44772 15 4V9H20C20.5523 9 21 9.44772 21 10V20C21 20.5523 20.5523 21 20 21H10C9.44772 21 9 20.5523 9 20V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H14ZM13 5H5V13H9V10C9 9.44772 9.44772 9 10 9H13V5Z"></path></svg>
            <i className="icon links-icon"></i>
            <h3>لینک های کمکی</h3>
            <ul>
                <li>ثبت سفارش</li>
                <li>استخدام</li>
                <li>اخبار سایت نهال آی تی</li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
       
        <div className="social-icons">
          <a className='icon1' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-2xl hover:text-red-700 transition-all duration-200 text-[#ccc]" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>aparat</title><path d="M12.0014 1.5938C2.7317 1.5906-1.9119 12.7965 4.641 19.3515c2.975 2.976 7.4496 3.8669 11.3374 2.257 3.8877-1.61 6.4228-5.4036 6.4228-9.6116 0-5.7441-4.6555-10.4012-10.3997-10.4031zM6.11 6.783c.5011-2.5982 3.8927-3.2936 5.376-1.1028 1.4834 2.1907-.4216 5.0816-3.02 4.5822-1.6118-.3098-2.6668-1.868-2.356-3.4794zm4.322 8.9882c-.5045 2.5971-3.8965 3.288-5.377 1.0959-1.4807-2.1922.427-5.0807 3.0247-4.5789 1.612.3114 2.6655 1.8714 2.3524 3.483zm1.2605-2.405c-1.1528-.2231-1.4625-1.7273-.4917-2.3877.9708-.6604 2.256.18 2.0401 1.3343-.1347.7198-.8294 1.1924-1.5484 1.0533zm6.197 3.8375c-.501 2.5981-3.8927 3.2935-5.376 1.1028-1.4834-2.1908.4217-5.0817 3.0201-4.5822 1.6117.3097 2.6667 1.8679 2.356 3.4794zm-1.9662-5.5018c-2.5981-.501-3.2935-3.8962-1.1027-5.3795 2.1907-1.4834 5.0816.4216 4.5822 3.02-.3082 1.6132-1.8668 2.6701-3.4795 2.3595zm-2.3348 11.5618l2.2646.611c1.9827.5263 4.0167-.6542 4.5433-2.6368l.639-2.4016a11.3828 11.3828 0 0 1-7.4469 4.4274zM21.232 3.5985l-2.363-.6284a11.3757 11.3757 0 0 1 4.3538 7.619l.6495-2.4578c.5194-1.9804-.6615-4.0076-2.6403-4.5328zM.6713 13.8086l-.5407 2.04c-.5263 1.9826.6542 4.0166 2.6368 4.5432l2.1066.5618a11.3792 11.3792 0 0 1-4.2027-7.145zM10.3583.702L8.1498.1261C6.166-.4024 4.1296.7785 3.603 2.763l-.5512 2.082A11.3757 11.3757 0 0 1 10.3583.702Z"></path></svg></a>
          <a className='icon2' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-2xl hover:text-red-500 transition-all duration-200 text-[#ccc]" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>youtube</title><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path></svg></a> 
          <a className='icon3' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-2xl hover:text-sky-500 transition-all duration-200 text-[#ccc]" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>twitter</title><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg></a>
          <a className='icon4' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-2xl hover:text-rose-500 transition-all duration-200 text-[#ccc]" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>instagram</title><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg></a>
          <a className='icon5' href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-2xl hover:text-blue-500 transition-all duration-200 text-[#ccc]" height="2em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><title>telegram</title><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></a>
            
        </div>
         <p>توسعه و پشتیبانی : بهینه سازان سرزمین هوشمند</p>



        <div className="footer-links">
            <a href="#">درباره ما</a>
            <a href="#">تماس با ما</a>
            <a href="#">بلاگ</a>
            <a href="#">فروشگاه</a>
            <a href="#">سیاست و حریم خصوصی</a>
        </div>
    </div>
</footer>
    </div>
  );
}

export default App;
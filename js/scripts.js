const menuItems=document.querySelectorAll(".menu-item");menuItems.forEach((item)=>{item.addEventListener("click",function(){menuItems.forEach((item)=>item.classList.remove("active"));this.classList.add("active")})});function nextStep(stepNumber){document.querySelectorAll(".step").forEach((step)=>(step.style.display="none"));document.getElementById(`step${stepNumber}`).style.display="block"}
function showModal(){UIkit.modal("#confirmation-modal").show()}
function closeModal(){UIkit.modal("#confirmation-modal").hide()}
document.querySelectorAll(".uk-subnav-pill > li > a").forEach((link)=>{link.addEventListener("click",function(e){e.preventDefault();const targetId=this.getAttribute("href").substring(1);document.getElementById(targetId).scrollIntoView({behavior:"smooth"})})});function selectTab(element){document.querySelectorAll(".tab-item").forEach((tab)=>{tab.classList.remove("active")});element.classList.add("active")}
function openDrawer(){document.getElementById("experience-drawer").classList.add("open")}
function closeDrawer(){document.getElementById("experience-drawer").classList.remove("open")}
document.querySelectorAll(".star").forEach((star)=>{star.addEventListener("click",function(){const ratingValue=this.getAttribute("data-value");setStarRating(ratingValue)})});function setStarRating(value){document.querySelectorAll(".star").forEach((star)=>{star.classList.toggle("selected",star.getAttribute("data-value")<=value)})}
function saveExperience(){document.getElementById("confirmationModal").classList.add("visible")}
function closeModal(){document.getElementById("confirmationModal").classList.remove("visible");window.location.href="experiencia_vista.html"}
function openTagForm(){let tagInput=prompt("Ingresa tus etiquetas separadas por comas:");if(tagInput){alert("Tags agregados: "+tagInput)}}
function cancelExperience(){window.location.href="experiencia_vista.html"}
function scrollRight(){const wrapper=document.querySelector(".cards-wrapper");wrapper.scrollBy({left:200,behavior:"smooth"})}
function scrollInverse(){const wrapper=document.querySelector(".cards-wrapper");wrapper.scrollBy({left:-200,behavior:"smooth"})}
function scrollRightB(){const wrapper=document.querySelector(".popular-card-container");wrapper.scrollBy({left:200,behavior:"smooth"})}
function scrollInverseB(){const wrapper=document.querySelector(".popular-card-container");wrapper.scrollBy({left:-200,behavior:"smooth"})}
document.addEventListener("DOMContentLoaded",function(){const faqItems=document.querySelectorAll(".faq-item");faqItems.forEach((item)=>{const question=item.querySelector(".faq-question");question.addEventListener("click",()=>{item.classList.toggle("active")})});if(typeof Swiper!=="undefined"&&document.querySelector(".swiper")){const swiper=new Swiper(".swiper",{slidesPerView:4,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,},autoplay:{delay:2500,disableOnInteraction:!1,},})}
const btnViajeRedondo=document.getElementById("viaje-redondo");const btnViajeSencillo=document.getElementById("viaje-sencillo");const btnMultidestino=document.getElementById("multidestino");const barViajeRedondo=document.getElementById("viaje-redondo-bar");const barViajeSencillo=document.getElementById("viaje-sencillo-bar");const barMultidestino=document.getElementById("multidestino-bar");function changeSearchBar(selectedButton,selectedBar){[btnViajeRedondo,btnViajeSencillo,btnMultidestino].forEach((btn)=>btn.classList.remove("active"));[barViajeRedondo,barViajeSencillo,barMultidestino].forEach((bar)=>bar.classList.add("hidden"));selectedButton.classList.add("active");selectedBar.classList.remove("hidden")}
btnViajeRedondo.addEventListener("click",function(){changeSearchBar(btnViajeRedondo,barViajeRedondo)});btnViajeSencillo.addEventListener("click",function(){changeSearchBar(btnViajeSencillo,barViajeSencillo)});btnMultidestino.addEventListener("click",function(){changeSearchBar(btnMultidestino,barMultidestino)});const addFlightButton=document.getElementById("add-flight-btn");addFlightButton.addEventListener("click",function(event){event.preventDefault();const multidestinoBar=document.getElementById("multidestino-bar");const vueloCount=multidestinoBar.querySelectorAll(".flight-section").length+1;const newFlightSection=document.createElement("div");newFlightSection.classList.add("flight-cont");newFlightSection.innerHTML=`
            <h4>Vuelo ${vueloCount}</h4>
            <div class="flight-section">
                <div class="search-field">
                    <i class="bi bi-geo-alt icon"></i>
                    <input type="text" placeholder="Origen" class="form-control">
                </div>
                <div class="search-field">
                    <i class="bi bi-geo-alt icon"></i>
                    <input type="text" placeholder="Destino" class="form-control">
                </div>
                <div class="date-field">
                    <label>Fecha</label>
                    <input type="date" class="form-control">
                </div>
            </div>
        `;multidestinoBar.insertBefore(newFlightSection,addFlightButton)});function counter(){$(".counterUp").each(function(){var $this=$(this);var countTo=parseInt($this.attr("data-count"),10);if(!$this.hasClass("hasCounted")&&$this.offset().top<$(window).scrollTop()+$(window).height()){console.log(`Iniciando conteo en: ${countTo}`);$this.addClass("hasCounted");$({countNum:0}).animate({countNum:countTo},{duration:2000,easing:"swing",step:function(){$this.text(Math.floor(this.countNum))},complete:function(){$this.text(this.countNum)},})}})}
$(window).on("scroll",counter);counter()});const clientsSwiper=new Swiper(".clients-slider",{loop:!0,spaceBetween:40,slidesPerView:4,pagination:{el:".swiper-pagination",clickable:!0,},breakpoints:{1024:{slidesPerView:4,},768:{slidesPerView:2,},480:{slidesPerView:1,},},});document.addEventListener("DOMContentLoaded",()=>{const travelOptions=document.querySelectorAll(".travel-option");const searchBars=document.querySelectorAll(".search-bar");travelOptions.forEach((option)=>{option.addEventListener("click",()=>{travelOptions.forEach((opt)=>opt.classList.remove("active"));option.classList.add("active");const type=option.dataset.type;searchBars.forEach((bar)=>bar.classList.toggle("hidden",bar.dataset.type!==type))})});const addFlightButton=document.getElementById("add-flight-btn");const multidestinoContainer=document.getElementById("multidestino-container");addFlightButton.addEventListener("click",(event)=>{event.preventDefault();const newFlightSection=document.createElement("div");newFlightSection.classList.add("flight-section");newFlightSection.innerHTML=`
        <div class="search-input">
            <i class="icon-location"></i>
            <input type="text" placeholder="Origen">
        </div>
        <div class="search-input">
            <i class="icon-location"></i>
            <input type="text" placeholder="Destino">
        </div>
        <div class="search-input">
            <i class="icon-calendar"></i>
            <input type="date" placeholder="Fecha">
        </div>
        `;multidestinoContainer.appendChild(newFlightSection)})});document.addEventListener("DOMContentLoaded",()=>{const dropdownButton=document.querySelector(".uk-button-default");const dropdownOptions=document.querySelectorAll(".dropdown-option");dropdownOptions.forEach((option)=>{option.addEventListener("click",()=>{dropdownButton.innerHTML=`${option.textContent} <span uk-icon="icon: triangle-down"></span>`})})})
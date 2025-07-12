/***************global variables********************/
var unpaid_grid = document.getElementById("unpaid");
var teachers_list_container = document.getElementById(
  "teachers-list-container"
);

let view = document.getElementById("myview");
let student_li = document.getElementById("student");
let teacher_li = document.getElementById("teacher");
let event_li = document.getElementById("event");
let finance_li = document.getElementById("finance");
let food_li = document.getElementById("food");
let user_li = document.getElementById("user");
let chat_li = document.getElementById("chat");
let l_activity_li = document.getElementById("dashboard");
let dashboard_li = document.getElementById("dashboard");
/***************************************view ingection************************************************** */

/***************************html**************************** */
/**dashboard */
let dashboard_html = `
<div class="d-flex">

 <!------------------------dashboard--------------------------->


          <section class="dashboard  "> 
             <h2 class="d-inline-block">Dashboard</h2>
          


    <div class="search-section float-end bg-white">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23.6 21.8L18 16.2C19.3 14.5 20.1 12.4 20.1 10.1C20.1 4.60001 15.6 0.100006 10.1 0.100006C4.6 0.100006 0 4.60001 0 10.1C0 15.6 4.5 20.1 10 20.1C12.3 20.1 14.5 19.3 16.2 17.9L21.8 23.5C22 23.7 22.4 23.9 22.7 23.9C23 23.9 23.3 23.8 23.6 23.5C24.1 23.1 24.1 22.3 23.6 21.8ZM2.5 10.1C2.5 6.00001 5.9 2.60001 10 2.60001C14.1 2.60001 17.5 6.00001 17.5 10.1C17.5 14.2 14.1 17.6 10 17.6C5.9 17.6 2.5 14.3 2.5 10.1Z" fill="#4D44B5"/>
</svg>          
       <input class=" " type="text" name="search " id="search" placeholder="search here...">

    </div>
      

    <!------------------------num bar--------------------------->
            <div class="num-bar m-auto d-flex align-items-center ">
              <div class="num-card">
                <div class="num-icon st-num"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_102)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9288 38.75H8.75C6.67875 38.75 5 37.0713 5 35V24.5863C5 22.7738 6.29625 21.2213 8.07875 20.8975C10.7212 20.4163 15.2775 19.5875 17.855 19.12C19.2737 18.8612 20.7263 18.8612 22.145 19.12C24.7225 19.5875 29.2788 20.4163 31.9213 20.8975C33.7038 21.2213 35 22.7738 35 24.5863C35 27.3125 35 32.0825 35 35C35 37.0713 33.3212 38.75 31.25 38.75H17.9288ZM29.785 23.05L29.79 23.0563C30.0088 23.3838 30.06 23.795 29.9287 24.1662L29.0462 26.6662C28.9312 26.9925 28.685 27.2575 28.3675 27.3963L26.7075 28.12L27.3675 29.4412C27.5525 29.81 27.5425 30.2462 27.3425 30.6075L24.2075 36.25H31.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L29.785 23.05ZM26.3663 22.4275L21.6975 21.5788C20.575 21.375 19.425 21.375 18.3025 21.5788L13.6337 22.4275L12.6363 23.9238L13.13 25.3213L15.5 26.3537C15.8138 26.4912 16.0575 26.7512 16.175 27.0737C16.2925 27.3962 16.2712 27.7525 16.1175 28.0588L15.1625 29.9688L18.6525 36.25H21.3475L24.8375 29.9688L23.8825 28.0588C23.7288 27.7525 23.7075 27.3962 23.825 27.0737C23.9425 26.7512 24.1862 26.4912 24.5 26.3537L26.87 25.3213L27.3638 23.9238L26.3663 22.4275ZM10.215 23.05L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25H15.7925L12.6575 30.6075C12.4575 30.2462 12.4475 29.81 12.6325 29.4412L13.2925 28.12L11.6325 27.3963C11.315 27.2575 11.0688 26.9925 10.9538 26.6662L10.0712 24.1662C9.94 23.795 9.99125 23.3838 10.21 23.0563L10.215 23.05ZM28.75 30V32.5C28.75 33.19 29.31 33.75 30 33.75C30.69 33.75 31.25 33.19 31.25 32.5V30C31.25 29.31 30.69 28.75 30 28.75C29.31 28.75 28.75 29.31 28.75 30ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_102">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg> </div>
        
        
         <div class="text-num">
             <p>Students
           <br/>
              <span>932</span>
        </p>

         </div>
       
              </div>
              <div class="num-card">
                <div class="num-icon te-num"> 
                     <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_2_99)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_99">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
         
        
       <div class="text-num">
         <p>teachers
          <br/> 
          <span>754</span>
        </p>
       </div>
              </div>
              <div class="num-card">
                <div class="num-icon e-num">
                    <svg xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M30 8.75H27.5V7.5C27.5 7.16848 27.3683 6.85054 27.1339 6.61612C26.8995 6.3817 26.5815 6.25 26.25 6.25C25.9185 6.25 25.6005 6.3817 25.3661 6.61612C25.1317 6.85054 25 7.16848 25 7.5V8.75H21.25V7.5C21.25 7.16848 21.1183 6.85054 20.8839 6.61612C20.6495 6.3817 20.3315 6.25 20 6.25C19.6685 6.25 19.3505 6.3817 19.1161 6.61612C18.8817 6.85054 18.75 7.16848 18.75 7.5V8.75H15V7.5C15 7.16848 14.8683 6.85054 14.6339 6.61612C14.3995 6.3817 14.0815 6.25 13.75 6.25C13.4185 6.25 13.1005 6.3817 12.8661 6.61612C12.6317 6.85054 12.5 7.16848 12.5 7.5V8.75H10C9.00544 8.75 8.05161 9.14509 7.34835 9.84835C6.64509 10.5516 6.25 11.5054 6.25 12.5V30C6.25 30.9946 6.64509 31.9484 7.34835 32.6517C8.05161 33.3549 9.00544 33.75 10 33.75H30C30.9946 33.75 31.9484 33.3549 32.6517 32.6517C33.3549 31.9484 33.75 30.9946 33.75 30V12.5C33.75 11.5054 33.3549 10.5516 32.6517 9.84835C31.9484 9.14509 30.9946 8.75 30 8.75ZM8.75 12.5C8.75 12.1685 8.8817 11.8505 9.11612 11.6161C9.35054 11.3817 9.66848 11.25 10 11.25H12.5V12.5C12.5 12.8315 12.6317 13.1495 12.8661 13.3839C13.1005 13.6183 13.4185 13.75 13.75 13.75C14.0815 13.75 14.3995 13.6183 14.6339 13.3839C14.8683 13.1495 15 12.8315 15 12.5V11.25H18.75V12.5C18.75 12.8315 18.8817 13.1495 19.1161 13.3839C19.3505 13.6183 19.6685 13.75 20 13.75C20.3315 13.75 20.6495 13.6183 20.8839 13.3839C21.1183 13.1495 21.25 12.8315 21.25 12.5V11.25H25V12.5C25 12.8315 25.1317 13.1495 25.3661 13.3839C25.6005 13.6183 25.9185 13.75 26.25 13.75C26.5815 13.75 26.8995 13.6183 27.1339 13.3839C27.3683 13.1495 27.5 12.8315 27.5 12.5V11.25H30C30.3315 11.25 30.6495 11.3817 30.8839 11.6161C31.1183 11.8505 31.25 12.1685 31.25 12.5V16.25H8.75V12.5ZM31.25 30C31.25 30.3315 31.1183 30.6495 30.8839 30.8839C30.6495 31.1183 30.3315 31.25 30 31.25H10C9.66848 31.25 9.35054 31.1183 9.11612 30.8839C8.8817 30.6495 8.75 30.3315 8.75 30V18.75H31.25V30Z"
              fill="white"
            />
          </svg>
        </div>
         
        
       <div class="text-num">
         <p>Events
          <br/> 
          <span>40</span>
        </p>
       </div>
              </div>
              <div class="num-card">
                <div class="num-icon f">
                       <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M26.1758 10.875C26.1758 11.2187 26.1524 11.5625 26.1094 11.9023C26.1289 11.7656 26.1485 11.625 26.1641 11.4883C26.0703 12.168 25.8906 12.8281 25.6289 13.4609C25.6797 13.3359 25.7344 13.2109 25.7852 13.0859C25.5235 13.7031 25.1875 14.2812 24.7774 14.8125C24.8594 14.707 24.9414 14.6016 25.0235 14.4961C24.6172 15.0195 24.1446 15.4922 23.6211 15.8984C23.7266 15.8164 23.832 15.7344 23.9375 15.6523C23.4063 16.0586 22.8281 16.3984 22.211 16.6601C22.336 16.6094 22.461 16.5547 22.586 16.5039C21.9531 16.7656 21.293 16.9453 20.6133 17.0391C20.75 17.0195 20.8906 17 21.0274 16.9844C20.3438 17.0742 19.6563 17.0742 18.9727 16.9844C19.1094 17.0039 19.25 17.0234 19.3867 17.0391C18.707 16.9453 18.0469 16.7656 17.4141 16.5039C17.5391 16.5547 17.6641 16.6094 17.7891 16.6601C17.1719 16.3984 16.5938 16.0625 16.0625 15.6523C16.168 15.7344 16.2734 15.8164 16.3789 15.8984C15.8555 15.4922 15.3828 15.0195 14.9766 14.4961C15.0586 14.6016 15.1406 14.707 15.2227 14.8125C14.8164 14.2812 14.4766 13.7031 14.2149 13.0859C14.2656 13.2109 14.3203 13.3359 14.3711 13.4609C14.1094 12.8281 13.9297 12.168 13.8359 11.4883C13.8555 11.625 13.875 11.7656 13.8906 11.9023C13.8008 11.2187 13.8008 10.5312 13.8906 9.84765C13.8711 9.98437 13.8516 10.125 13.8359 10.2617C13.9297 9.58202 14.1094 8.92187 14.3711 8.28905C14.3203 8.41405 14.2656 8.53905 14.2149 8.66405C14.4766 8.04687 14.8125 7.46874 15.2227 6.93749C15.1406 7.04296 15.0586 7.14843 14.9766 7.2539C15.3828 6.73046 15.8555 6.2578 16.3789 5.85155C16.2734 5.93359 16.168 6.01562 16.0625 6.09765C16.5938 5.6914 17.1719 5.35155 17.7891 5.08984C17.6641 5.14062 17.5391 5.1953 17.4141 5.24609C18.0469 4.98437 18.707 4.80468 19.3867 4.71093C19.25 4.73046 19.1094 4.74999 18.9727 4.76562C19.6563 4.67577 20.3438 4.67577 21.0274 4.76562C20.8906 4.74609 20.75 4.72655 20.6133 4.71093C21.293 4.80468 21.9531 4.98437 22.586 5.24609C22.461 5.1953 22.336 5.14062 22.211 5.08984C22.8281 5.35155 23.4063 5.68749 23.9375 6.09765C23.832 6.01562 23.7266 5.93359 23.6211 5.85155C24.1446 6.2578 24.6172 6.73046 25.0235 7.2539C24.9414 7.14843 24.8594 7.04296 24.7774 6.93749C25.1836 7.46874 25.5235 8.04687 25.7852 8.66405C25.7344 8.53905 25.6797 8.41405 25.6289 8.28905C25.8906 8.92187 26.0703 9.58202 26.1641 10.2617C26.1445 10.125 26.125 9.98437 26.1094 9.84765C26.1524 10.1875 26.1719 10.5312 26.1758 10.875C26.1797 11.6914 26.8906 12.4766 27.7383 12.4375C28.5821 12.3984 29.3047 11.75 29.3008 10.875C29.293 9.0039 28.7305 7.08984 27.6289 5.5664C27.3321 5.15624 27.0156 4.7539 26.6641 4.39062C26.3086 4.02343 25.918 3.70702 25.5117 3.39843C24.7735 2.83593 23.9492 2.42187 23.0742 2.10155C19.5469 0.808586 15.293 1.96093 12.9063 4.86718C12.5781 5.26562 12.2656 5.67968 12 6.12499C11.7344 6.5664 11.5273 7.03515 11.3359 7.51171C10.9766 8.39452 10.793 9.33202 10.7188 10.2812C10.5742 12.1406 11.0586 14.082 12.0273 15.6758C12.9609 17.2148 14.3711 18.5351 16.0195 19.2812C16.5039 19.5 17 19.7031 17.5156 19.8476C18.0274 19.9883 18.5469 20.0664 19.0742 20.1289C20.0352 20.2422 21.0156 20.1641 21.9649 19.9726C25.5703 19.2383 28.5899 16.1328 29.1485 12.4883C29.2305 11.957 29.293 11.4258 29.293 10.8867C29.2969 10.0703 28.5703 9.28515 27.7305 9.32421C26.8867 9.35155 26.1758 9.99999 26.1758 10.875ZM31.3594 35.3008C30.5938 35.3008 29.8281 35.3008 29.0625 35.3008C27.2383 35.3008 25.418 35.3008 23.5938 35.3008C21.3985 35.3008 19.2031 35.3008 17.0039 35.3008C15.1094 35.3008 13.2149 35.3008 11.3164 35.3008C10.4297 35.3008 9.54297 35.3086 8.65625 35.3008C8.5586 35.3008 8.46094 35.293 8.36719 35.2812C8.50391 35.3008 8.64453 35.3203 8.78125 35.3359C8.625 35.3125 8.47657 35.2695 8.33203 35.2109C8.45703 35.2617 8.58203 35.3164 8.70703 35.3672C8.55078 35.3008 8.40625 35.2148 8.26953 35.1094C8.375 35.1914 8.48047 35.2734 8.58594 35.3555C8.46875 35.2578 8.35938 35.1523 8.26563 35.0351C8.34766 35.1406 8.42969 35.2461 8.51172 35.3516C8.40625 35.2148 8.32422 35.0703 8.25391 34.9141C8.30469 35.0391 8.35938 35.1641 8.41016 35.2891C8.35157 35.1445 8.3125 34.9922 8.28516 34.8398C8.30469 34.9766 8.32422 35.1172 8.33985 35.2539C8.27735 34.7812 8.32031 34.2812 8.32031 33.8047C8.32031 33.2461 8.32031 32.6914 8.32031 32.1328C8.32031 31.7148 8.34375 31.3008 8.39844 30.8867C8.37891 31.0234 8.35938 31.1641 8.34375 31.3008C8.45313 30.5 8.66407 29.7148 8.98047 28.9687C8.92969 29.0937 8.875 29.2187 8.82422 29.3437C9.12891 28.6328 9.51954 27.9648 9.99219 27.3516C9.91016 27.457 9.82813 27.5625 9.7461 27.668C10.2188 27.0625 10.7617 26.5156 11.3711 26.043C11.2656 26.125 11.1602 26.207 11.0547 26.2891C11.668 25.8164 12.3359 25.4258 13.0469 25.1211C12.9219 25.1719 12.7969 25.2266 12.6719 25.2773C13.418 24.9648 14.1992 24.75 15.0039 24.6406C14.8672 24.6601 14.7266 24.6797 14.5899 24.6953C15.168 24.6211 15.7422 24.6172 16.3242 24.6172C17.0391 24.6172 17.7539 24.6172 18.4688 24.6172C20.1367 24.6172 21.8047 24.6172 23.4727 24.6172C24.1172 24.6172 24.7578 24.6133 25.4024 24.6953C25.2656 24.6758 25.125 24.6562 24.9883 24.6406C25.7891 24.75 26.5742 24.9609 27.3203 25.2773C27.1953 25.2266 27.0703 25.1719 26.9453 25.1211C27.6563 25.4258 28.3242 25.8164 28.9375 26.2891C28.8321 26.207 28.7266 26.125 28.6211 26.043C29.2266 26.5156 29.7735 27.0586 30.2461 27.668C30.1641 27.5625 30.0821 27.457 30 27.3516C30.4727 27.9648 30.8633 28.6328 31.168 29.3437C31.1172 29.2187 31.0625 29.0937 31.0117 28.9687C31.3242 29.7148 31.5391 30.4961 31.6485 31.3008C31.6289 31.1641 31.6094 31.0234 31.5938 30.8867C31.668 31.4766 31.6719 32.0625 31.6719 32.6562C31.6719 33.3008 31.6719 33.9453 31.6719 34.5898C31.6719 34.8125 31.6797 35.0351 31.6524 35.2539C31.6719 35.1172 31.6914 34.9766 31.7071 34.8398C31.6836 34.9961 31.6406 35.1445 31.5821 35.2891C31.6328 35.1641 31.6875 35.0391 31.7383 34.9141C31.6719 35.0703 31.586 35.2148 31.4805 35.3516C31.5625 35.2461 31.6446 35.1406 31.7266 35.0351C31.6289 35.1523 31.5235 35.2617 31.4063 35.3555C31.5117 35.2734 31.6172 35.1914 31.7227 35.1094C31.586 35.2148 31.4414 35.2969 31.2852 35.3672C31.4102 35.3164 31.5352 35.2617 31.6602 35.2109C31.5156 35.2695 31.3633 35.3086 31.211 35.3359C31.3477 35.3164 31.4883 35.2969 31.625 35.2812C31.5391 35.293 31.4492 35.2969 31.3594 35.3008C30.9571 35.3047 30.543 35.4726 30.2539 35.7578C29.9844 36.0273 29.7774 36.4726 29.7969 36.8633C29.836 37.6992 30.4844 38.4375 31.3594 38.4258C32.8789 38.4023 34.2149 37.4101 34.6602 35.9531C34.836 35.375 34.7969 34.7539 34.7969 34.1601C34.7969 32.8008 34.8399 31.4531 34.6055 30.1055C34.2617 28.1328 33.2696 26.2773 31.9102 24.8203C30.5508 23.3633 28.7227 22.293 26.7891 21.8164C25.6797 21.543 24.5625 21.5 23.4297 21.5C22.2656 21.5 21.1055 21.5 19.9414 21.5C18.793 21.5 17.6484 21.5 16.5 21.5C15.3399 21.5 14.1875 21.5547 13.0586 21.8555C11.1406 22.3633 9.33594 23.4453 8.00391 24.9141C6.66016 26.3945 5.6875 28.2539 5.37109 30.2383C5.16016 31.5703 5.20312 32.9062 5.20312 34.25C5.20312 34.8672 5.16797 35.5117 5.39062 36.1016C5.67969 36.8594 6.14063 37.457 6.81641 37.9062C7.34375 38.2539 8.01172 38.4219 8.63672 38.4297C8.94141 38.4336 9.2461 38.4297 9.55079 38.4297C10.332 38.4297 11.1094 38.4297 11.8906 38.4297C13 38.4297 14.1055 38.4297 15.2149 38.4297C16.5039 38.4297 17.793 38.4297 19.082 38.4297C20.4063 38.4297 21.7266 38.4297 23.0508 38.4297C24.2617 38.4297 25.4688 38.4297 26.6797 38.4297C27.6289 38.4297 28.5781 38.4297 29.5235 38.4297C30.0664 38.4297 30.6094 38.4297 31.1524 38.4297C31.2227 38.4297 31.293 38.4297 31.3633 38.4297C32.1797 38.4297 32.9649 37.7109 32.9258 36.8672C32.8867 36.0156 32.2383 35.3008 31.3594 35.3008Z"
              fill="white"
            />
          </svg>
           
          </div>
          <div class="text-num">
            <p>Food
           <br/>
              <span>32k</span>
        </p>
          </div>
        
              </div>


            </div>

<!--------first chart div --------->
<div class="chart-one ">
<canvas id="myChart"></canvas>
</div>

<!-----------calender&school finance---------------->
<div class="cal-fi">
  <div class="cal-fin d-flex row justify-content-between">

     <div class="calendar_parent">  <h3>School Calendar</h3><div class="calender" id='calendar'></div></div>

<div class="finance "> <canvas id="barChart" ></canvas></div>
</div>
<div class="grid-container">

  
<div id="unpaid_grid" style="margin: 20px;"></div>
<!-- Pagination Buttons -->
<div id="pagination" style="text-align: center; margin-top: 10px;"></div></div>
</div>
</section>
<!-- side      -->
   




<div class="dashboard-inner-side">
                     <div class="buttons d-inline ">
<button > <svg  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2631 0.666672L9.41671 4.46615C8.93534 4.69779 8.47519 4.96458 8.03389 5.26563L4.32035 4.09636L0.583374 10.5703L3.39848 13.1484C3.28849 13.9648 3.33831 14.3672 3.39848 14.8516L0.583374 17.4297L4.32035 23.9037L8.03389 22.7344C8.47519 23.0354 8.93534 23.3022 9.41671 23.5339L10.2631 27.3333H17.737L18.5834 23.5339C19.0647 23.3022 19.5249 23.0354 19.9662 22.7344L23.6797 23.9037L27.4167 17.4297L24.6016 14.8516C24.6246 14.5682 24.6664 14.2845 24.6667 14C24.6678 13.7069 24.6216 13.4108 24.6016 13.1484L27.4167 10.5703L23.6797 4.09636L19.9662 5.26563C19.5249 4.96458 19.0647 4.69779 18.5834 4.46615L17.737 0.666672H10.2631ZM12.4037 3.33334H15.5964L16.2552 6.29167L16.9167 6.55209C17.6649 6.84512 18.3644 7.24846 18.9922 7.75001L19.5495 8.19271L22.4401 7.28386L24.0365 10.0495L21.8021 12.099L21.9089 12.8021C22.0346 13.5797 22.0101 14.4746 21.9089 15.1979L21.8021 15.901L24.0365 17.9505L22.4401 20.7162L19.5495 19.8073L18.9922 20.25C18.3644 20.7516 17.6649 21.1549 16.9167 21.4479L16.2552 21.7083L15.5964 24.6667H12.4037L11.7448 21.7083L11.0834 21.4479C10.3351 21.1549 9.63569 20.7516 9.00785 20.25L8.45056 19.8073L5.55994 20.7162L3.96358 17.9505L6.19796 15.901L6.09119 15.1979C5.96095 14.4046 5.98095 13.4967 6.09119 12.8021L6.19796 12.099L3.96358 10.0495L5.55994 7.28386L8.45056 8.19271L9.00785 7.75001C9.63569 7.24846 10.3351 6.84512 11.0834 6.55209L11.7448 6.29167L12.4037 3.33334ZM14 8.66667C11.0703 8.66667 8.66671 11.0703 8.66671 14C8.66671 16.9297 11.0703 19.3333 14 19.3333C16.9298 19.3333 19.3334 16.9297 19.3334 14C19.3334 11.0703 16.9298 8.66667 14 8.66667ZM14 11.3333C15.4886 11.3333 16.6667 12.5115 16.6667 14C16.6667 15.4886 15.4886 16.6667 14 16.6667C12.5115 16.6667 11.3334 15.4886 11.3334 14C11.3334 12.5115 12.5115 11.3333 14 11.3333Z" fill="#A098AE"/>
</svg>

</button>
                     <div class="buttons ">
<button ><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z" fill="#A098AE"/>
</svg>

</button>
<div class="admin">
<div class="d-inline">
<h5>Nabila A.</h5>
<p>admin</p>
</div>
<svg class="icon"width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#C1BBEB"/>
</svg>

</div>
</div>   
      
      

</div>
    


</div>


`;
/**making dashboard default */
view.innerHTML = dashboard_html;

/**********side bar functionality******** */
/**dashboard */
dashboard_li.addEventListener("click", function () {
  document.querySelectorAll("ul li").forEach((el) => {
    el.classList.remove("active");
  });

  dashboard_li.classList.add("active");

  view.innerHTML = dashboard_html;
  chart1();
  chart2();
  document.addEventListener("DOMContentLoaded", function () {
  cal();
});

  table();
});

/**food */ 
 
  food_li.addEventListener("click", function () {
  document.querySelectorAll("ul li").forEach((el) => el.classList.remove("active"));
  food_li.classList.add("active");
const foods = [
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Japanese Beef Ramen",
      rating: 4.8,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Mixed Salad",
      rating: 4.2,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Japanese Beef Ramen",
      rating: 4.8,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Mixed Salad",
      rating: 4.2,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Japanese Beef Ramen",
      rating: 4.8,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Mixed Salad",
      rating: 4.2,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Japanese Beef Ramen",
      rating: 4.8,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Mixed Salad",
      rating: 4.2,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Japanese Beef Ramen",
      rating: 4.8,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Mixed Salad",
      rating: 4.2,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
    {
      title: "Beef Steak with Fried Potato",
      rating: 4.9,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Lunch",
    },
    {
      title: "Pancake with Honey",
      rating: 4.7,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Breakfast",
    },
    {
      title: "Beef Meatball with Vegetable",
      rating: 4.5,
      orders: 1456,
      interest: 50,
      orderPercent: 26,
      type: "Snack",
    },
  ];

  function renderFoodList() {
    view.innerHTML = `
      <h2 class="food_h2">Food</h2>
      <div class="search-section float-end bg-white" style="width:30%">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23.6 21.8L18 16.2C19.3 14.5 20.1 12.4 20.1 10.1C20.1 4.60001 15.6 0.100006 10.1 0.100006C4.6 0.100006 0 4.60001 0 10.1C0 15.6 4.5 20.1 10 20.1C12.3 20.1 14.5 19.3 16.2 17.9L21.8 23.5C22 23.7 22.4 23.9 22.7 23.9C23 23.9 23.3 23.8 23.6 23.5C24.1 23.1 24.1 22.3 23.6 21.8ZM2.5 10.1C2.5 6.00001 5.9 2.60001 10 2.60001C14.1 2.60001 17.5 6.00001 17.5 10.1C17.5 14.2 14.1 17.6 10 17.6C5.9 17.6 2.5 14.3 2.5 10.1Z" fill="#4D44B5"/>
</svg>     
        <input type="text" id="search" placeholder="search here...">
      </div>
      <div class="food-list-container" id="food-list-container"></div>
      <div class="f-pagination"></div>
    `;

    const food_list_container = document.getElementById("food-list-container");
    const pagination_container = document.querySelector(".f-pagination");

    const itemsPerPage = 7;
    let currentPage = 1;

    function renderPage(pageNumber) {
      const start = (pageNumber - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      let html = "";

      for (let i = start; i < end && i < foods.length; i++) {
        const food = foods[i];
        html += `
          <div class="food-row" style="cursor:pointer;" data-index="${i}">
            <div class="food-icon"></div>
            <p class="food-name">${food.title}</p>
            <p class="food-rating"><svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0554 0.717387C13.3667 -0.178173 14.6333 -0.178173 14.9446 0.717387L17.5334 8.16501C17.6707 8.56008 18.0394 8.82795 18.4575 8.83647L26.3406 8.99711C27.2886 9.01643 27.6799 10.221 26.9244 10.7938L20.6413 15.5573C20.308 15.81 20.1671 16.2434 20.2883 16.6438L22.5715 24.1907C22.846 25.0982 21.8214 25.8426 21.0432 25.3011L14.5712 20.7975C14.2279 20.5586 13.7721 20.5586 13.4288 20.7975L6.95684 25.3011C6.1786 25.8426 5.15396 25.0982 5.42851 24.1907L7.71173 16.6438C7.83285 16.2434 7.69202 15.81 7.35873 15.5573L1.0756 10.7938C0.320066 10.221 0.711446 9.01643 1.65937 8.99711L9.54246 8.83647C9.96063 8.82795 10.3293 8.56008 10.4666 8.16501L13.0554 0.717387Z" fill="#FCC43E"/>
</svg>
 ${food.rating}</p>
            <div class="food-orders"><svg xmlns="http://www.w3.org/2000/svg" width="62" height="53" viewBox="0 0 62 53" fill="none">
<path d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z" fill="#4D44B5"/>
<path d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z" fill="#4D44B5"/>
<path d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z" fill="#4D44B5"/>
<path d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z" fill="#4D44B5"/>
</svg>${food.orders} <br/> total order</div>
            <div class="food-percent">${food.orderPercent}%</div>
          </div>
        `;
      }

      food_list_container.innerHTML = html;

      document.querySelectorAll(".food-row").forEach((row) => {
        row.addEventListener("click", () => {
          const index = row.dataset.index;
          showFoodDetails(foods[index]);
        });
      });

      renderPagination();
    }

    function renderPagination() {
      const totalPages = Math.ceil(foods.length / itemsPerPage);
      let buttonsHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        buttonsHTML += `
          <button class="page-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>
        `;
      }

      pagination_container.innerHTML = buttonsHTML;

      document.querySelectorAll(".page-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          currentPage = parseInt(e.target.dataset.page);
          renderPage(currentPage);
        });
      });
    }

    renderPage(currentPage);
  }

  function showFoodDetails(food) {
    view.innerHTML = `
      <div class="food-details-page p-4 bg-white rounded shadow">
      <svg width="361" height="239" viewBox="0 0 361 239" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="361" height="239" rx="18" fill="#C1BBEB"/>
</svg>

        <h2 class="mb-2">${food.title}</h2>
        <span class="badge bg-secondary mb-3">${food.type}</span>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div class="row g-4 mb-4">
          <div class="col"><p><strong>Total Order:</strong> ${food.orders}</p></div>
          <div class="col"><p><strong>Interest:</strong> ${food.interest}%</p></div>
          <div class="col"><p><strong>Order %:</strong> ${food.orderPercent}%</p></div>
          <div class="col"><p><strong>Rating:</strong> ${food.rating}</p></div>
        </div>

        <div class="mb-4">
          <h4>Ingredients</h4>
          <ul>
            <li>2 tablespoons butter, softened, divided</li>
            <li>1 teaspoon minced fresh parsley</li>
            <li>1/2 teaspoon minced garlic</li>
            <li>1/4 teaspoon reduced-sodium soy sauce</li>
            <li>1 beef flat iron steak (3/4 pound)</li>
            <li>1/8 teaspoon salt</li>
            <li>1/8 teaspoon pepper</li>
          </ul>
        </div>

        <div>
          <h4>Nutrition</h4>
          <ul>
            <li>Calories: 217</li>
            <li>Water: 61%</li>
            <li>Protein: 26.1 grams</li>
            <li>Carbs: 0 grams</li>
            <li>Sugar: 0 grams</li>
            <li>Fiber: 0 grams</li>
            <li>Fat: 11.8 grams</li>
          </ul>
        </div>

       
      </div>
    `;

    document.getElementById("back-to-list").addEventListener("click", () => {
      renderFoodList();
    });
  }

  renderFoodList();
});


/**teacher */

teacher_li.addEventListener("click", renderTeachersList);

function renderTeachersList(){ document
    .querySelectorAll("ul li")
    .forEach((el) => el.classList.remove("active"));
  teacher_li.classList.add("active");

  view.innerHTML = `
 <div class="tsidetags">
  <div class="buttons d-inline w-25">
    <button>
      <svg  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2631 0.666672L9.41671 4.46615C8.93534 4.69779 8.47519 4.96458 8.03389 5.26563L4.32035 4.09636L0.583374 10.5703L3.39848 13.1484C3.28849 13.9648 3.33831 14.3672 3.39848 14.8516L0.583374 17.4297L4.32035 23.9037L8.03389 22.7344C8.47519 23.0354 8.93534 23.3022 9.41671 23.5339L10.2631 27.3333H17.737L18.5834 23.5339C19.0647 23.3022 19.5249 23.0354 19.9662 22.7344L23.6797 23.9037L27.4167 17.4297L24.6016 14.8516C24.6246 14.5682 24.6664 14.2845 24.6667 14C24.6678 13.7069 24.6216 13.4108 24.6016 13.1484L27.4167 10.5703L23.6797 4.09636L19.9662 5.26563C19.5249 4.96458 19.0647 4.69779 18.5834 4.46615L17.737 0.666672H10.2631ZM12.4037 3.33334H15.5964L16.2552 6.29167L16.9167 6.55209C17.6649 6.84512 18.3644 7.24846 18.9922 7.75001L19.5495 8.19271L22.4401 7.28386L24.0365 10.0495L21.8021 12.099L21.9089 12.8021C22.0346 13.5797 22.0101 14.4746 21.9089 15.1979L21.8021 15.901L24.0365 17.9505L22.4401 20.7162L19.5495 19.8073L18.9922 20.25C18.3644 20.7516 17.6649 21.1549 16.9167 21.4479L16.2552 21.7083L15.5964 24.6667H12.4037L11.7448 21.7083L11.0834 21.4479C10.3351 21.1549 9.63569 20.7516 9.00785 20.25L8.45056 19.8073L5.55994 20.7162L3.96358 17.9505L6.19796 15.901L6.09119 15.1979C5.96095 14.4046 5.98095 13.4967 6.09119 12.8021L6.19796 12.099L3.96358 10.0495L5.55994 7.28386L8.45056 8.19271L9.00785 7.75001C9.63569 7.24846 10.3351 6.84512 11.0834 6.55209L11.7448 6.29167L12.4037 3.33334ZM14 8.66667C11.0703 8.66667 8.66671 11.0703 8.66671 14C8.66671 16.9297 11.0703 19.3333 14 19.3333C16.9298 19.3333 19.3334 16.9297 19.3334 14C19.3334 11.0703 16.9298 8.66667 14 8.66667ZM14 11.3333C15.4886 11.3333 16.6667 12.5115 16.6667 14C16.6667 15.4886 15.4886 16.6667 14 16.6667C12.5115 16.6667 11.3334 15.4886 11.3334 14C11.3334 12.5115 12.5115 11.3333 14 11.3333Z" fill="#A098AE"/>
</svg>
    </button>
  </div>

  <div class="buttons">
    <button>
      <svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z" fill="#A098AE"/>
</svg>
    </button>

    <div class="admin">
      <div class="d-inline">
        <h5>Nabila A.</h5>
        <p>admin</p>
      </div>
      <svg class="icon"width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#C1BBEB"/>
</svg>
    </div>
  </div>

  <button class="add-new-teacher">+ Add new teacher</button>
</div>

<h2 class="teacher_h2">Teachers</h2>

<div class="search-section bg-white" style="width:30%">
  
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M23.6 21.8L18 16.2C19.3 14.5 20.1 12.4 20.1 10.1C20.1 4.60001 15.6 0.100006 10.1 0.100006C4.6 0.100006 0 4.60001 0 10.1C0 15.6 4.5 20.1 10 20.1C12.3 20.1 14.5 19.3 16.2 17.9L21.8 23.5C22 23.7 22.4 23.9 22.7 23.9C23 23.9 23.3 23.8 23.6 23.5C24.1 23.1 24.1 22.3 23.6 21.8ZM2.5 10.1C2.5 6.00001 5.9 2.60001 10 2.60001C14.1 2.60001 17.5 6.00001 17.5 10.1C17.5 14.2 14.1 17.6 10 17.6C5.9 17.6 2.5 14.3 2.5 10.1Z" fill="#4D44B5"/>
</svg>         
  <input class="" type="text" name="search" id="search" placeholder="search here...">
</div>

<div class="teachers-list-container" id="teachers-list-container"></div>

<div class="-pagination"></div>

  `;

  const teachers = [
    {
      name: "Alexander Hamilton",
      field: "Political Science",
      location: "New York, USA",
      phone: "+1 555 009102",
      email: "alexander.hamilton@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Mechanics", "AI Ethics", "Astrophysics", "Cultural Studies"],
    },
    {
      name: "Margaret Kensington",
      field: "Environmental Studies",
      location: "Cairo, Egypt",
      phone: "+1 555 006872",
      email: "margaret.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Statistics",
        "Machine Learning",
        "World History",
      ],
    },
    {
      name: "Christopher Langford",
      field: "Modern History",
      location: "Toronto, Canada",
      phone: "+1 555 009210",
      email: "christopher.langford@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: ["Genetics", "Mechanics", "Astrophysics", "World History"],
    },
    {
      name: "Isabella Montgomery",
      field: "Comparative Literature",
      location: "Berlin, Germany",
      phone: "+1 555 001923",
      email: "isabella.montgomery@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "World History",
        "Cognitive Science",
        "Cultural Studies",
      ],
    },
    {
      name: "Benjamin Whitaker",
      field: "Applied Mathematics",
      location: "Tokyo, Japan",
      phone: "+1 555 007884",
      email: "benjamin.whitaker@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: [
        "Statistics",
        "Machine Learning",
        "AI Ethics",
        "Astrophysics",
      ],
    },
    {
      name: "Catherine Holloway",
      field: "Human Psychology",
      location: "Paris, France",
      phone: "+1 555 008376",
      email: "catherine.holloway@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Creative Writing",
        "Philosophy",
        "Genetics",
      ],
    },
    {
      name: "Nathaniel Hawthorne",
      field: "Creative Writing",
      location: "London, UK",
      phone: "+1 555 005128",
      email: "nathaniel.hawthorne@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Literature", years: "2013-2015" },
      ],
      expertise: [
        "Creative Writing",
        "Ancient Literature",
        "Cultural Studies",
        "Philosophy",
      ],
    },
    {
      name: "Elizabeth Fairchild",
      field: "Biomedical Engineering",
      location: "Jakarta, Indonesia",
      phone: "+1 555 002783",
      email: "elizabeth.fairchild@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Devices",
        "AI Ethics",
        "Machine Learning",
      ],
    },
    {
      name: "Sebastian Kingsley",
      field: "Astrophysics",
      location: "Berlin, Germany",
      phone: "+1 555 009217",
      email: "sebastian.kingsley@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Astrophysics", "Mechanics", "Quantum Physics", "Statistics"],
    },
    {
      name: "Victoria Wetherby",
      field: "International Relations",
      location: "Paris, France",
      phone: "+1 555 007392",
      email: "victoria.wetherby@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Political Science", years: "2013-2015" },
      ],
      expertise: [
        "Political Theory",
        "Cultural Studies",
        "World History",
        "Philosophy",
      ],
    },
    {
      name: "Jonathan Blackwood",
      field: "Artificial Intelligence",
      location: "Cairo, Egypt",
      phone: "+1 555 001529",
      email: "jonathan.blackwood@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Computer Science", years: "2013-2015" },
      ],
      expertise: [
        "AI Ethics",
        "Machine Learning",
        "Statistics",
        "Cognitive Science",
      ],
    },
    {
      name: "Penelope Worthington",
      field: "Philosophy of Science",
      location: "Toronto, Canada",
      phone: "+1 555 004658",
      email: "penelope.worthington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Philosophy", years: "2013-2015" },
      ],
      expertise: [
        "Philosophy",
        "AI Ethics",
        "World History",
        "Ancient Literature",
      ],
    },
    {
      name: "Frederick Ellington",
      field: "Ancient Civilizations",
      location: "Tokyo, Japan",
      phone: "+1 555 009731",
      email: "frederick.ellington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "Prehistoric",
        "World History",
        "Culture",
      ],
    },
    {
      name: "Charlotte Abernathy",
      field: "Genetic Biology",
      location: "London, UK",
      phone: "+1 555 003613",
      email: "charlotte.abernathy@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Engineering",
        "Cognitive Science",
        "Statistics",
      ],
    },
    {
      name: "Theodore Kensington",
      field: "Quantum Mechanics",
      location: "New York, USA",
      phone: "+1 555 009994",
      email: "theodore.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Quantum Physics", "Mechanics", "Astrophysics", "Philosophy"],
    },
    {
      name: "Alexander Hamilton",
      field: "Political Science",
      location: "New York, USA",
      phone: "+1 555 009102",
      email: "alexander.hamilton@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Mechanics", "AI Ethics", "Astrophysics", "Cultural Studies"],
    },
    {
      name: "Margaret Kensington",
      field: "Environmental Studies",
      location: "Cairo, Egypt",
      phone: "+1 555 006872",
      email: "margaret.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Statistics",
        "Machine Learning",
        "World History",
      ],
    },
    {
      name: "Christopher Langford",
      field: "Modern History",
      location: "Toronto, Canada",
      phone: "+1 555 009210",
      email: "christopher.langford@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: ["Genetics", "Mechanics", "Astrophysics", "World History"],
    },
    {
      name: "Isabella Montgomery",
      field: "Comparative Literature",
      location: "Berlin, Germany",
      phone: "+1 555 001923",
      email: "isabella.montgomery@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "World History",
        "Cognitive Science",
        "Cultural Studies",
      ],
    },
    {
      name: "Benjamin Whitaker",
      field: "Applied Mathematics",
      location: "Tokyo, Japan",
      phone: "+1 555 007884",
      email: "benjamin.whitaker@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: [
        "Statistics",
        "Machine Learning",
        "AI Ethics",
        "Astrophysics",
      ],
    },
    {
      name: "Catherine Holloway",
      field: "Human Psychology",
      location: "Paris, France",
      phone: "+1 555 008376",
      email: "catherine.holloway@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Creative Writing",
        "Philosophy",
        "Genetics",
      ],
    },
    {
      name: "Nathaniel Hawthorne",
      field: "Creative Writing",
      location: "London, UK",
      phone: "+1 555 005128",
      email: "nathaniel.hawthorne@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Literature", years: "2013-2015" },
      ],
      expertise: [
        "Creative Writing",
        "Ancient Literature",
        "Cultural Studies",
        "Philosophy",
      ],
    },
    {
      name: "Elizabeth Fairchild",
      field: "Biomedical Engineering",
      location: "Jakarta, Indonesia",
      phone: "+1 555 002783",
      email: "elizabeth.fairchild@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Devices",
        "AI Ethics",
        "Machine Learning",
      ],
    },
    {
      name: "Sebastian Kingsley",
      field: "Astrophysics",
      location: "Berlin, Germany",
      phone: "+1 555 009217",
      email: "sebastian.kingsley@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Astrophysics", "Mechanics", "Quantum Physics", "Statistics"],
    },
    {
      name: "Victoria Wetherby",
      field: "International Relations",
      location: "Paris, France",
      phone: "+1 555 007392",
      email: "victoria.wetherby@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Political Science", years: "2013-2015" },
      ],
      expertise: [
        "Political Theory",
        "Cultural Studies",
        "World History",
        "Philosophy",
      ],
    },
    {
      name: "Jonathan Blackwood",
      field: "Artificial Intelligence",
      location: "Cairo, Egypt",
      phone: "+1 555 001529",
      email: "jonathan.blackwood@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Computer Science", years: "2013-2015" },
      ],
      expertise: [
        "AI Ethics",
        "Machine Learning",
        "Statistics",
        "Cognitive Science",
      ],
    },
    {
      name: "Penelope Worthington",
      field: "Philosophy of Science",
      location: "Toronto, Canada",
      phone: "+1 555 004658",
      email: "penelope.worthington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Philosophy", years: "2013-2015" },
      ],
      expertise: [
        "Philosophy",
        "AI Ethics",
        "World History",
        "Ancient Literature",
      ],
    },
    {
      name: "Frederick Ellington",
      field: "Ancient Civilizations",
      location: "Tokyo, Japan",
      phone: "+1 555 009731",
      email: "frederick.ellington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "Prehistoric",
        "World History",
        "Culture",
      ],
    },
    {
      name: "Charlotte Abernathy",
      field: "Genetic Biology",
      location: "London, UK",
      phone: "+1 555 003613",
      email: "charlotte.abernathy@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Engineering",
        "Cognitive Science",
        "Statistics",
      ],
    },
    {
      name: "Theodore Kensington",
      field: "Quantum Mechanics",
      location: "New York, USA",
      phone: "+1 555 009994",
      email: "theodore.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Quantum Physics", "Mechanics", "Astrophysics", "Philosophy"],
    },
    {
      name: "Alexander Hamilton",
      field: "Political Science",
      location: "New York, USA",
      phone: "+1 555 009102",
      email: "alexander.hamilton@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Mechanics", "AI Ethics", "Astrophysics", "Cultural Studies"],
    },
    {
      name: "Margaret Kensington",
      field: "Environmental Studies",
      location: "Cairo, Egypt",
      phone: "+1 555 006872",
      email: "margaret.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Statistics",
        "Machine Learning",
        "World History",
      ],
    },
    {
      name: "Christopher Langford",
      field: "Modern History",
      location: "Toronto, Canada",
      phone: "+1 555 009210",
      email: "christopher.langford@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: ["Genetics", "Mechanics", "Astrophysics", "World History"],
    },
    {
      name: "Isabella Montgomery",
      field: "Comparative Literature",
      location: "Berlin, Germany",
      phone: "+1 555 001923",
      email: "isabella.montgomery@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "World History",
        "Cognitive Science",
        "Cultural Studies",
      ],
    },
    {
      name: "Benjamin Whitaker",
      field: "Applied Mathematics",
      location: "Tokyo, Japan",
      phone: "+1 555 007884",
      email: "benjamin.whitaker@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: [
        "Statistics",
        "Machine Learning",
        "AI Ethics",
        "Astrophysics",
      ],
    },
    {
      name: "Catherine Holloway",
      field: "Human Psychology",
      location: "Paris, France",
      phone: "+1 555 008376",
      email: "catherine.holloway@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Creative Writing",
        "Philosophy",
        "Genetics",
      ],
    },
    {
      name: "Nathaniel Hawthorne",
      field: "Creative Writing",
      location: "London, UK",
      phone: "+1 555 005128",
      email: "nathaniel.hawthorne@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Literature", years: "2013-2015" },
      ],
      expertise: [
        "Creative Writing",
        "Ancient Literature",
        "Cultural Studies",
        "Philosophy",
      ],
    },
    {
      name: "Elizabeth Fairchild",
      field: "Biomedical Engineering",
      location: "Jakarta, Indonesia",
      phone: "+1 555 002783",
      email: "elizabeth.fairchild@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Devices",
        "AI Ethics",
        "Machine Learning",
      ],
    },
    {
      name: "Sebastian Kingsley",
      field: "Astrophysics",
      location: "Berlin, Germany",
      phone: "+1 555 009217",
      email: "sebastian.kingsley@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Astrophysics", "Mechanics", "Quantum Physics", "Statistics"],
    },
    {
      name: "Victoria Wetherby",
      field: "International Relations",
      location: "Paris, France",
      phone: "+1 555 007392",
      email: "victoria.wetherby@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Political Science", years: "2013-2015" },
      ],
      expertise: [
        "Political Theory",
        "Cultural Studies",
        "World History",
        "Philosophy",
      ],
    },
    {
      name: "Jonathan Blackwood",
      field: "Artificial Intelligence",
      location: "Cairo, Egypt",
      phone: "+1 555 001529",
      email: "jonathan.blackwood@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Computer Science", years: "2013-2015" },
      ],
      expertise: [
        "AI Ethics",
        "Machine Learning",
        "Statistics",
        "Cognitive Science",
      ],
    },
    {
      name: "Penelope Worthington",
      field: "Philosophy of Science",
      location: "Toronto, Canada",
      phone: "+1 555 004658",
      email: "penelope.worthington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Philosophy", years: "2013-2015" },
      ],
      expertise: [
        "Philosophy",
        "AI Ethics",
        "World History",
        "Ancient Literature",
      ],
    },
    {
      name: "Frederick Ellington",
      field: "Ancient Civilizations",
      location: "Tokyo, Japan",
      phone: "+1 555 009731",
      email: "frederick.ellington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "Prehistoric",
        "World History",
        "Culture",
      ],
    },
    {
      name: "Charlotte Abernathy",
      field: "Genetic Biology",
      location: "London, UK",
      phone: "+1 555 003613",
      email: "charlotte.abernathy@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Engineering",
        "Cognitive Science",
        "Statistics",
      ],
    },
    {
      name: "Theodore Kensington",
      field: "Quantum Mechanics",
      location: "New York, USA",
      phone: "+1 555 009994",
      email: "theodore.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Quantum Physics", "Mechanics", "Astrophysics", "Philosophy"],
    },
    {
      name: "Alexander Hamilton",
      field: "Political Science",
      location: "New York, USA",
      phone: "+1 555 009102",
      email: "alexander.hamilton@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Mechanics", "AI Ethics", "Astrophysics", "Cultural Studies"],
    },
    {
      name: "Margaret Kensington",
      field: "Environmental Studies",
      location: "Cairo, Egypt",
      phone: "+1 555 006872",
      email: "margaret.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Statistics",
        "Machine Learning",
        "World History",
      ],
    },
    {
      name: "Christopher Langford",
      field: "Modern History",
      location: "Toronto, Canada",
      phone: "+1 555 009210",
      email: "christopher.langford@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: ["Genetics", "Mechanics", "Astrophysics", "World History"],
    },
    {
      name: "Isabella Montgomery",
      field: "Comparative Literature",
      location: "Berlin, Germany",
      phone: "+1 555 001923",
      email: "isabella.montgomery@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "World History",
        "Cognitive Science",
        "Cultural Studies",
      ],
    },
    {
      name: "Benjamin Whitaker",
      field: "Applied Mathematics",
      location: "Tokyo, Japan",
      phone: "+1 555 007884",
      email: "benjamin.whitaker@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: [
        "Statistics",
        "Machine Learning",
        "AI Ethics",
        "Astrophysics",
      ],
    },
    {
      name: "Catherine Holloway",
      field: "Human Psychology",
      location: "Paris, France",
      phone: "+1 555 008376",
      email: "catherine.holloway@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Creative Writing",
        "Philosophy",
        "Genetics",
      ],
    },
    {
      name: "Nathaniel Hawthorne",
      field: "Creative Writing",
      location: "London, UK",
      phone: "+1 555 005128",
      email: "nathaniel.hawthorne@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Literature", years: "2013-2015" },
      ],
      expertise: [
        "Creative Writing",
        "Ancient Literature",
        "Cultural Studies",
        "Philosophy",
      ],
    },
    {
      name: "Elizabeth Fairchild",
      field: "Biomedical Engineering",
      location: "Jakarta, Indonesia",
      phone: "+1 555 002783",
      email: "elizabeth.fairchild@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Devices",
        "AI Ethics",
        "Machine Learning",
      ],
    },
    {
      name: "Sebastian Kingsley",
      field: "Astrophysics",
      location: "Berlin, Germany",
      phone: "+1 555 009217",
      email: "sebastian.kingsley@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Astrophysics", "Mechanics", "Quantum Physics", "Statistics"],
    },
    {
      name: "Victoria Wetherby",
      field: "International Relations",
      location: "Paris, France",
      phone: "+1 555 007392",
      email: "victoria.wetherby@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Political Science", years: "2013-2015" },
      ],
      expertise: [
        "Political Theory",
        "Cultural Studies",
        "World History",
        "Philosophy",
      ],
    },
    {
      name: "Jonathan Blackwood",
      field: "Artificial Intelligence",
      location: "Cairo, Egypt",
      phone: "+1 555 001529",
      email: "jonathan.blackwood@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Computer Science", years: "2013-2015" },
      ],
      expertise: [
        "AI Ethics",
        "Machine Learning",
        "Statistics",
        "Cognitive Science",
      ],
    },
    {
      name: "Penelope Worthington",
      field: "Philosophy of Science",
      location: "Toronto, Canada",
      phone: "+1 555 004658",
      email: "penelope.worthington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Philosophy", years: "2013-2015" },
      ],
      expertise: [
        "Philosophy",
        "AI Ethics",
        "World History",
        "Ancient Literature",
      ],
    },
    {
      name: "Frederick Ellington",
      field: "Ancient Civilizations",
      location: "Tokyo, Japan",
      phone: "+1 555 009731",
      email: "frederick.ellington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "Prehistoric",
        "World History",
        "Culture",
      ],
    },
    {
      name: "Charlotte Abernathy",
      field: "Genetic Biology",
      location: "London, UK",
      phone: "+1 555 003613",
      email: "charlotte.abernathy@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Engineering",
        "Cognitive Science",
        "Statistics",
      ],
    },
    {
      name: "Theodore Kensington",
      field: "Quantum Mechanics",
      location: "New York, USA",
      phone: "+1 555 009994",
      email: "theodore.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Quantum Physics", "Mechanics", "Astrophysics", "Philosophy"],
    },
    {
      name: "Alexander Hamilton",
      field: "Political Science",
      location: "New York, USA",
      phone: "+1 555 009102",
      email: "alexander.hamilton@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Mechanics", "AI Ethics", "Astrophysics", "Cultural Studies"],
    },
    {
      name: "Margaret Kensington",
      field: "Environmental Studies",
      location: "Cairo, Egypt",
      phone: "+1 555 006872",
      email: "margaret.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Statistics",
        "Machine Learning",
        "World History",
      ],
    },
    {
      name: "Christopher Langford",
      field: "Modern History",
      location: "Toronto, Canada",
      phone: "+1 555 009210",
      email: "christopher.langford@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: ["Genetics", "Mechanics", "Astrophysics", "World History"],
    },
    {
      name: "Isabella Montgomery",
      field: "Comparative Literature",
      location: "Berlin, Germany",
      phone: "+1 555 001923",
      email: "isabella.montgomery@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "World History",
        "Cognitive Science",
        "Cultural Studies",
      ],
    },
    {
      name: "Benjamin Whitaker",
      field: "Applied Mathematics",
      location: "Tokyo, Japan",
      phone: "+1 555 007884",
      email: "benjamin.whitaker@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Mathematics", years: "2013-2015" },
      ],
      expertise: [
        "Statistics",
        "Machine Learning",
        "AI Ethics",
        "Astrophysics",
      ],
    },
    {
      name: "Catherine Holloway",
      field: "Human Psychology",
      location: "Paris, France",
      phone: "+1 555 008376",
      email: "catherine.holloway@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Cognitive Science",
        "Creative Writing",
        "Philosophy",
        "Genetics",
      ],
    },
    {
      name: "Nathaniel Hawthorne",
      field: "Creative Writing",
      location: "London, UK",
      phone: "+1 555 005128",
      email: "nathaniel.hawthorne@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Literature", years: "2013-2015" },
      ],
      expertise: [
        "Creative Writing",
        "Ancient Literature",
        "Cultural Studies",
        "Philosophy",
      ],
    },
    {
      name: "Elizabeth Fairchild",
      field: "Biomedical Engineering",
      location: "Jakarta, Indonesia",
      phone: "+1 555 002783",
      email: "elizabeth.fairchild@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Devices",
        "AI Ethics",
        "Machine Learning",
      ],
    },
    {
      name: "Sebastian Kingsley",
      field: "Astrophysics",
      location: "Berlin, Germany",
      phone: "+1 555 009217",
      email: "sebastian.kingsley@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Astrophysics", "Mechanics", "Quantum Physics", "Statistics"],
    },
    {
      name: "Victoria Wetherby",
      field: "International Relations",
      location: "Paris, France",
      phone: "+1 555 007392",
      email: "victoria.wetherby@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Political Science", years: "2013-2015" },
      ],
      expertise: [
        "Political Theory",
        "Cultural Studies",
        "World History",
        "Philosophy",
      ],
    },
    {
      name: "Jonathan Blackwood",
      field: "Artificial Intelligence",
      location: "Cairo, Egypt",
      phone: "+1 555 001529",
      email: "jonathan.blackwood@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Computer Science", years: "2013-2015" },
      ],
      expertise: [
        "AI Ethics",
        "Machine Learning",
        "Statistics",
        "Cognitive Science",
      ],
    },
    {
      name: "Penelope Worthington",
      field: "Philosophy of Science",
      location: "Toronto, Canada",
      phone: "+1 555 004658",
      email: "penelope.worthington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Philosophy", years: "2013-2015" },
      ],
      expertise: [
        "Philosophy",
        "AI Ethics",
        "World History",
        "Ancient Literature",
      ],
    },
    {
      name: "Frederick Ellington",
      field: "Ancient Civilizations",
      location: "Tokyo, Japan",
      phone: "+1 555 009731",
      email: "frederick.ellington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of History", years: "2013-2015" },
      ],
      expertise: [
        "Ancient Literature",
        "Prehistoric",
        "World History",
        "Culture",
      ],
    },
    {
      name: "Charlotte Abernathy",
      field: "Genetic Biology",
      location: "London, UK",
      phone: "+1 555 003613",
      email: "charlotte.abernathy@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Biology", years: "2013-2015" },
      ],
      expertise: [
        "Genetics",
        "Biomedical Engineering",
        "Cognitive Science",
        "Statistics",
      ],
    },
    {
      name: "Theodore Kensington",
      field: "Quantum Mechanics",
      location: "New York, USA",
      phone: "+1 555 009994",
      email: "theodore.kensington@university.edu",
      about:
        "Passionate educator with years of experience inspiring students through modern teaching strategies and real-world examples.",
      education: [
        { degree: "Bachelor of Education", years: "2008-2012" },
        { degree: "Master of Physics", years: "2013-2015" },
      ],
      expertise: ["Quantum Physics", "Mechanics", "Astrophysics", "Philosophy"],
    },
  ];

  const teachers_list_container = document.getElementById(
    "teachers-list-container"
  );
  const pagination_container = document.querySelector(".-pagination");

  const itemsPerPage = 20;
  let currentPage = 1;

  function renderPage(pageNumber) {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    let html = "";

    for (let i = start; i < end && i < teachers.length; i++) {
      html += `
      <div class="teacher_card" data-index="${i}">
        <div class="teacher_icon"></div>
        <p class="teacher-name">${teachers[i].name}</p>
        <p class="teacher-field">${teachers[i].field}</p>
        <div class="teacher-icons">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.4401 13C19.2201 13 18.9901 12.93 18.7701 12.88C18.3246 12.7818 17.8868 12.6515 17.4601 12.49C16.9962 12.3212 16.4862 12.33 16.0284 12.5146C15.5706 12.6992 15.1972 13.0466 14.9801 13.49L14.7601 13.94C13.7861 13.3982 12.8911 12.7252 12.1001 11.94C11.3149 11.149 10.6419 10.254 10.1001 9.27999L10.5201 8.99999C10.9635 8.78291 11.3109 8.40952 11.4955 7.95168C11.6801 7.49384 11.6889 6.9839 11.5201 6.51999C11.3613 6.09241 11.231 5.65479 11.1301 5.20999C11.0801 4.98999 11.0401 4.75999 11.0101 4.52999C10.8887 3.82561 10.5197 3.18773 9.96972 2.73123C9.41972 2.27473 8.7248 2.0296 8.0101 2.03999H5.0101C4.57913 2.03594 4.15235 2.1248 3.75881 2.30052C3.36527 2.47624 3.01421 2.73469 2.72953 3.05827C2.44485 3.38186 2.23324 3.76298 2.10909 4.1757C1.98494 4.58842 1.95118 5.02305 2.0101 5.44999C2.54284 9.63937 4.45613 13.5319 7.44775 16.5126C10.4394 19.4934 14.3388 21.3925 18.5301 21.91H18.9101C19.6475 21.9111 20.3595 21.6405 20.9101 21.15C21.2265 20.867 21.4792 20.5202 21.6516 20.1323C21.8239 19.7444 21.9121 19.3244 21.9101 18.9V15.9C21.8979 15.2054 21.6449 14.5365 21.1944 14.0077C20.744 13.4788 20.1239 13.1226 19.4401 13ZM19.9401 19C19.9399 19.142 19.9095 19.2823 19.8509 19.4116C19.7923 19.5409 19.7068 19.6563 19.6001 19.75C19.4884 19.8465 19.3577 19.9185 19.2165 19.9616C19.0753 20.0046 18.9267 20.0177 18.7801 20C15.035 19.5198 11.5563 17.8065 8.89282 15.1303C6.2293 12.4541 4.53251 8.96733 4.0701 5.21999C4.05419 5.07351 4.06813 4.92532 4.1111 4.78438C4.15407 4.64344 4.22517 4.51268 4.3201 4.39999C4.41381 4.29332 4.52916 4.20783 4.65848 4.14921C4.7878 4.09058 4.92812 4.06017 5.0701 4.05999H8.0701C8.30265 4.05482 8.52972 4.13087 8.71224 4.27506C8.89476 4.41925 9.02131 4.62256 9.0701 4.84999C9.1101 5.12332 9.1601 5.39332 9.2201 5.65999C9.33562 6.18713 9.48936 6.70517 9.6801 7.20999L8.2801 7.85999C8.1604 7.91491 8.05272 7.99294 7.96326 8.08959C7.87379 8.18623 7.8043 8.2996 7.75877 8.42318C7.71324 8.54677 7.69257 8.67812 7.69795 8.80971C7.70332 8.9413 7.73464 9.07054 7.7901 9.18999C9.2293 12.2727 11.7073 14.7508 14.7901 16.19C15.0336 16.29 15.3066 16.29 15.5501 16.19C15.6748 16.1454 15.7894 16.0764 15.8873 15.9872C15.9851 15.8979 16.0643 15.7901 16.1201 15.67L16.7401 14.27C17.2571 14.4549 17.7847 14.6085 18.3201 14.73C18.5868 14.79 18.8568 14.84 19.1301 14.88C19.3575 14.9288 19.5608 15.0553 19.705 15.2378C19.8492 15.4204 19.9253 15.6474 19.9201 15.88L19.9401 19Z" fill="white"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
<path d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z" fill="white"/>
</svg>
        </div>
      </div>
    `;
    }

    teachers_list_container.innerHTML = html;

    document.querySelectorAll(".teacher_card").forEach((card) => {
      card.addEventListener("click", () => {
        const index = card.dataset.index;
        showTeacherDetails(teachers[index]);
      });
    });

    renderPagination();
  }

  function showTeacherDetails(teacher) {
    view.innerHTML = "";
    pagination_container.innerHTML = "";

    const educationHTML = teacher.education
      .map((e) => `<li>${e.degree} <span>(${e.years})</span></li>`)
      .join("");
    const expertiseHTML = teacher.expertise
      .map((skill) => `<span class="tag">${skill}</span>`)
      .join("");

    view.innerHTML = `
    <div class="teacher-details bg-white p-4 rounded shadow-sm">
  <!-- Left side: Main info -->
  <div class="" style="min-width: 0;">
    <img src="assets/Masking.png" alt="${teacher.name}" class="img-fluid rounded mb-3 w-100">

    <h2 class="h4 fw-bold mb-2">${teacher.name}</h2>
   
   <p class="text-muted mb-1">${teacher.field}</p>
  <P>
   <span class="text-muted mb-1"><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 13.4 7.05 19.5 7.35 19.76C7.53113 19.9149 7.76165 20.0001 8 20.0001C8.23835 20.0001 8.46887 19.9149 8.65 19.76C9 19.5 16 13.4 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8 17.65C5.87 15.65 2 11.34 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8C14 11.34 10.13 15.66 8 17.65ZM8 4C7.20887 4 6.43552 4.2346 5.77772 4.67412C5.11992 5.11365 4.60723 5.73836 4.30448 6.46927C4.00173 7.20017 3.92252 8.00444 4.07686 8.78036C4.2312 9.55628 4.61216 10.269 5.17157 10.8284C5.73098 11.3878 6.44371 11.7688 7.21964 11.9231C7.99556 12.0775 8.79983 11.9983 9.53073 11.6955C10.2616 11.3928 10.8864 10.8801 11.3259 10.2223C11.7654 9.56448 12 8.79113 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39991 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z" fill="white"/>
</svg>
${teacher.location}</span>
    <span class="text-muted mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4396 13C19.2196 13 18.9896 12.93 18.7696 12.88C18.3241 12.7818 17.8863 12.6515 17.4596 12.49C16.9957 12.3212 16.4858 12.33 16.0279 12.5146C15.5701 12.6992 15.1967 13.0466 14.9796 13.49L14.7596 13.94C13.7856 13.3982 12.8906 12.7252 12.0996 11.94C11.3144 11.149 10.6414 10.254 10.0996 9.27999L10.5196 8.99999C10.963 8.78291 11.3104 8.40952 11.495 7.95168C11.6796 7.49384 11.6884 6.9839 11.5196 6.51999C11.3608 6.09241 11.2305 5.65479 11.1296 5.20999C11.0796 4.98999 11.0396 4.75999 11.0096 4.52999C10.8882 3.82561 10.5192 3.18773 9.96923 2.73123C9.41923 2.27473 8.72431 2.0296 8.00961 2.03999H5.00961C4.57864 2.03594 4.15186 2.1248 3.75832 2.30052C3.36478 2.47624 3.01372 2.73469 2.72904 3.05827C2.44436 3.38186 2.23275 3.76298 2.1086 4.1757C1.98445 4.58842 1.95069 5.02305 2.00961 5.44999C2.54235 9.63937 4.45564 13.5319 7.44726 16.5126C10.4389 19.4934 14.3383 21.3925 18.5296 21.91H18.9096C19.647 21.9111 20.359 21.6405 20.9096 21.15C21.226 20.867 21.4787 20.5202 21.6511 20.1323C21.8235 19.7444 21.9116 19.3244 21.9096 18.9V15.9C21.8974 15.2054 21.6444 14.5365 21.194 14.0077C20.7435 13.4788 20.1234 13.1226 19.4396 13ZM19.9396 19C19.9394 19.142 19.909 19.2823 19.8504 19.4116C19.7918 19.5409 19.7063 19.6563 19.5996 19.75C19.4879 19.8465 19.3572 19.9185 19.216 19.9616C19.0748 20.0046 18.9262 20.0177 18.7796 20C15.0345 19.5198 11.5558 17.8065 8.89233 15.1303C6.22881 12.4541 4.53202 8.96733 4.06961 5.21999C4.0537 5.07351 4.06765 4.92532 4.11061 4.78438C4.15358 4.64344 4.22468 4.51268 4.31961 4.39999C4.41332 4.29332 4.52867 4.20783 4.65799 4.14921C4.78731 4.09058 4.92763 4.06017 5.06961 4.05999H8.06961C8.30216 4.05482 8.52924 4.13087 8.71176 4.27506C8.89428 4.41925 9.02082 4.62256 9.06961 4.84999C9.10961 5.12332 9.15961 5.39332 9.21961 5.65999C9.33513 6.18713 9.48887 6.70517 9.67961 7.20999L8.27961 7.85999C8.15991 7.91491 8.05223 7.99294 7.96277 8.08959C7.87331 8.18623 7.80381 8.2996 7.75828 8.42318C7.71275 8.54677 7.69208 8.67812 7.69746 8.80971C7.70284 8.9413 7.73415 9.07054 7.78961 9.18999C9.22881 12.2727 11.7069 14.7508 14.7896 16.19C15.0331 16.29 15.3062 16.29 15.5496 16.19C15.6743 16.1454 15.7889 16.0764 15.8868 15.9872C15.9846 15.8979 16.0638 15.7901 16.1196 15.67L16.7396 14.27C17.2566 14.4549 17.7842 14.6085 18.3196 14.73C18.5863 14.79 18.8563 14.84 19.1296 14.88C19.357 14.9288 19.5604 15.0553 19.7045 15.2378C19.8487 15.4204 19.9248 15.6474 19.9196 15.88L19.9396 19Z" fill="white"/>
</svg>
 ${teacher.phone}</span>
    <span class="text-muted mb-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.427 6L12.6 10.8C12.4335 10.9267 12.2312 10.9976 12.022 11.0026C11.8129 11.0077 11.6074 10.9465 11.435 10.828L5.573 6H18.427ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.3L10.2 12.4C10.7159 12.7863 11.3435 12.9944 11.988 12.993C12.6551 12.992 13.3037 12.774 13.836 12.372L20 7.3V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z" fill="white"/>
</svg>
 ${teacher.email}</span>
<p/>
    <h5 class="fw-semibold mb-2">About</h5>
    <p class="mb-3">${teacher.about}</p>

    <h5 class="fw-semibold mb-2">Education</h5>
    <ul class="mb-3">
      ${educationHTML}
    </ul>

    <h5 class="fw-semibold mb-2">Expertise</h5>
    <div class="d-flex flex-wrap gap-2">
      ${expertiseHTML}
    </div>
  </div>

  
</div>
<!-- Right side: Schedule -->
  <div  class=" p-3 rounded sc-teacher">
   <div class="schedule-sidebar">
  <div class="sc-header"><h5>Schedule Details</h5> <p>Thursday, 10th April , 2021</p></div>
   
   
  <ul class="list-unstyled text-muted small">
    <li><p>
   <span>World History</span>
   Class VII-B
    </p>
    <p>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z" fill="#FB7D5B"/>
</svg>
March 20, 2021
    </p>
    <P><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#FCC43E"/>
<path d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z" fill="#FCC43E"/>
</svg>

09.00 - 10.00 AM</P></li>
   <li><p>
   <span>World History</span>
   Class VII-B
    </p>
    <p>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z" fill="#FB7D5B"/>
</svg>
March 20, 2021
    </p>
    <P><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#FCC43E"/>
<path d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z" fill="#FCC43E"/>
</svg>

09.00 - 10.00 AM</P></li>   <li><p>
   <span>World History</span>
   Class VII-B
    </p>
    <p>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z" fill="#FB7D5B"/>
</svg>
March 20, 2021
    </p>
    <P><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#FCC43E"/>
<path d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z" fill="#FCC43E"/>
</svg>

09.00 - 10.00 AM</P></li>   <li><p>
   <span>World History</span>
   Class VII-B
    </p>
    <p>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z" fill="#FB7D5B"/>
</svg>
March 20, 2021
    </p>
    <P><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#FCC43E"/>
<path d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z" fill="#FCC43E"/>
</svg>

09.00 - 10.00 AM</P></li>
  </ul>
</div>

  </div>

  `;
  }

  function renderPagination() {
    const totalPages = Math.ceil(teachers.length / itemsPerPage);
    let buttonsHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      buttonsHTML += `
        <button class="page-btn ${
          i === currentPage ? "active" : ""
        }" data-page="${i}">
          ${i}
        </button>
      `;
    }

    pagination_container.innerHTML = buttonsHTML;

    document.querySelectorAll(".page-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        currentPage = parseInt(e.target.dataset.page);
        renderPage(currentPage);
      });
    });
  }

  renderPage(currentPage);



document.querySelector(".add-new-teacher").addEventListener("click", () => {
  view.innerHTML = `
  <div class="tsidetags">
  <div class="buttons d-inline w-25">
    <button>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2631 0.666672L9.41671 4.46615C8.93534 4.69779 8.47519 4.96458 8.03389 5.26563L4.32035 4.09636L0.583374 10.5703L3.39848 13.1484C3.28849 13.9648 3.33831 14.3672 3.39848 14.8516L0.583374 17.4297L4.32035 23.9037L8.03389 22.7344C8.47519 23.0354 8.93534 23.3022 9.41671 23.5339L10.2631 27.3333H17.737L18.5834 23.5339C19.0647 23.3022 19.5249 23.0354 19.9662 22.7344L23.6797 23.9037L27.4167 17.4297L24.6016 14.8516C24.6246 14.5682 24.6664 14.2845 24.6667 14C24.6678 13.7069 24.6216 13.4108 24.6016 13.1484L27.4167 10.5703L23.6797 4.09636L19.9662 5.26563C19.5249 4.96458 19.0647 4.69779 18.5834 4.46615L17.737 0.666672H10.2631ZM12.4037 3.33334H15.5964L16.2552 6.29167L16.9167 6.55209C17.6649 6.84512 18.3644 7.24846 18.9922 7.75001L19.5495 8.19271L22.4401 7.28386L24.0365 10.0495L21.8021 12.099L21.9089 12.8021C22.0346 13.5797 22.0101 14.4746 21.9089 15.1979L21.8021 15.901L24.0365 17.9505L22.4401 20.7162L19.5495 19.8073L18.9922 20.25C18.3644 20.7516 17.6649 21.1549 16.9167 21.4479L16.2552 21.7083L15.5964 24.6667H12.4037L11.7448 21.7083L11.0834 21.4479C10.3351 21.1549 9.63569 20.7516 9.00785 20.25L8.45056 19.8073L5.55994 20.7162L3.96358 17.9505L6.19796 15.901L6.09119 15.1979C5.96095 14.4046 5.98095 13.4967 6.09119 12.8021L6.19796 12.099L3.96358 10.0495L5.55994 7.28386L8.45056 8.19271L9.00785 7.75001C9.63569 7.24846 10.3351 6.84512 11.0834 6.55209L11.7448 6.29167L12.4037 3.33334ZM14 8.66667C11.0703 8.66667 8.66671 11.0703 8.66671 14C8.66671 16.9297 11.0703 19.3333 14 19.3333C16.9298 19.3333 19.3334 16.9297 19.3334 14C19.3334 11.0703 16.9298 8.66667 14 8.66667ZM14 11.3333C15.4886 11.3333 16.6667 12.5115 16.6667 14C16.6667 15.4886 15.4886 16.6667 14 16.6667C12.5115 16.6667 11.3334 15.4886 11.3334 14C11.3334 12.5115 12.5115 11.3333 14 11.3333Z" fill="#A098AE"/>
</svg>
    </button>
  </div>

  <div class="buttons">
    <button>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z" fill="#A098AE"/>
</svg>
    </button>

    <div class="admin">
      <div class="d-inline">
        <h5>Nabila A.</h5>
        <p>admin</p>
      </div>
      <svg class="icon"width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#C1BBEB"/>
</svg>
    </div>
  </div>
</div>
    <div id="add-teacher-form" style="margin-top:20px;">
      <h3>Add New Teacher</h3>

      <div class="personal-details">
        <h4>Personal Details</h4>
        <div class="form-row">
        <div class="form-group">
          <label>First Name *</label>
          <input type="text" placeholder="Enter first name" value="Maria" />
        </div>
        <div class="form-group">
          <label>Last Name *</label>
          <input type="text" placeholder="Enter last name" value="Historia" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Email *</label>
          <input type="email" placeholder="Enter email" value="Historia@gmail.com" />
        </div>
        <div class="form-group">
          <label>Phone *</label>
          <input type="text" placeholder="Enter phone number" value="+1234567890" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Address *</label>
          <textarea placeholder="Enter address...">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
          <div class="address-note">0/2000</div>
        </div>
        <div class="form-group photo-upload">
          <label>Photo *</label>
          <label class="upload-label" for="photo-upload">
             Drag and drop or click here to select file
          </label>
          <input type="file" id="photo-upload" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Date of Birth *</label>
          <input type="text" value="24 February 1997" />
        </div>
        <div class="form-group">
          <label>Place of Birth *</label>
          <input type="text" value="Jakarta, Indonesia" />
        </div>
      </div>

      <div class="education-details" style="margin-top: 30px;">
        <h4>Education</h4>
        <div class="input-group">
          <label>University *</label>
          <input type="text" id="teacher-university" placeholder="University Akademi Historia" />
        </div>
        <div class="input-group">
          <label>Degree *</label>
          <input type="text" id="teacher-degree" placeholder="History Major" />
        </div>
        <div class="input-group">
          <label>Start & End Date *</label>
          <div style="display: flex; gap: 10px;">
            <input type="text" id="teacher-start" placeholder="September 2013" />
            <input type="text" id="teacher-end" placeholder="September 2017" />
          </div>
        </div>
        <div class="input-group">
          <label>City *</label>
          <input type="text" id="teacher-city" placeholder="Yogyakarta, Indonesia" />
        </div>
      </div>

      <div style="margin-top: 20px;">

        <button class="btn btn-primary" id="submit-teacher">Submit</button>
      </div>
    </div>
  `;

  document.getElementById("submit-teacher").addEventListener("click", submitNewTeacher);
});


function submitNewTeacher() {
  const firstName = document.getElementById("teacher-firstname").value.trim();
  const lastName = document.getElementById("teacher-lastname").value.trim();
  const email = document.getElementById("teacher-email").value.trim();
  const phone = document.getElementById("teacher-phone").value.trim();
  const address = document.getElementById("teacher-address").value.trim();
  const dob = document.getElementById("teacher-dob").value.trim();
  const birthplace = document.getElementById("teacher-birthplace").value.trim();
  const university = document.getElementById("teacher-university").value.trim();
  const degree = document.getElementById("teacher-degree").value.trim();
  const startDate = document.getElementById("teacher-start").value.trim();
  const endDate = document.getElementById("teacher-end").value.trim();
  const city = document.getElementById("teacher-city").value.trim();

  if (!firstName || !lastName || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  const newTeacher = {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    address,
    dob,
    birthplace,
    university,
    degree,
    startDate,
    endDate,
    city
  };

  teachers.push(newTeacher);
  console.log(teachers);
    alert("Teacher added successfully!");
renderTeachersList(); 
  
}}

//**************************************************************************dashboard js************************************************* */

/***********************chart*********************** */


  function chart1(){
  const ctx = document.getElementById("myChart").getContext("2d");

  // Gradient for first line
  const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, "rgba(251, 125, 91, 0.4)");
  gradient1.addColorStop(1, "rgba(251, 125, 91, 0)");

  // Gradient for second line
  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, "rgba(252, 196, 62, 0.4)");
  gradient2.addColorStop(1, "rgba(252, 196, 62, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Last Week",
          data: [10, 20, 35, 40, 30, 25, 50, 60, 45, 70, 55, 80],
          borderColor: "rgba(251, 125, 91, 1)",
          backgroundColor: gradient1,
          tension: 0.4,
          fill: true,
        },
        {
          label: "This Week",
          data: [15, 25, 20, 35, 45, 40, 60, 55, 65, 75, 85, 90],
          borderColor: "rgba(252, 196, 62, 1)",
          backgroundColor: gradient2,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: "rgba(0,0,0,0.05)",
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 25,
            beginAtZero: true,
            max: 100,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 10,
            padding: 20,
          },
        },
      },
    },
  });
}chart1()
/*********************sec char********************** */
function chart2() {
  const barCtx = document.getElementById("barChart").getContext("2d");

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // Gradient colors
  const grad1 = barCtx.createLinearGradient(0, 0, 0, 300);
  grad1.addColorStop(0, "rgb(251, 125, 91)");
  grad1.addColorStop(1, "rgb(251, 125, 91)");

  const grad2 = barCtx.createLinearGradient(0, 0, 0, 300);
  grad2.addColorStop(0, "rgb(252, 196, 62)");
  grad2.addColorStop(1, "rgb(252, 196, 62)");

  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "Last Week",
          data: [10, 20, 35, 40, 30, 25, 50],
          backgroundColor: grad1,
          borderRadius: 5,
          barThickness: 10,
        },
        {
          label: "This Week",
          data: [15, 25, 20, 35, 45, 40, 60],
          backgroundColor: grad2,
          borderRadius: 5,
          barThickness: 10,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
          },
          grid: {
            display: true,
            color: "rgba(0,0,0,0.05)",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
      },
    },
  });
};chart2();
/****************calender****************** */
function cal(){
  document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "title",
        right: "prev,next",
      },
      events: [
        {
          title: "Important",
          start: "2021-03-08",
          color: "white",
          className: "fc-event-important",
        },
      ],
    });

    calendar.render();
  });
};
cal();
/*************************table************************************ */
function table() {
  const students = [
    {
      name: "Samantha William",
      id: "123456789",
      class: "VII A",
      fees: "$50,036",
    },
    { name: "Tony Soap", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Jordan Nico", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Karen Hope", id: "123456789", class: "VII A", fees: "$50,036" },

    {
      name: "Samantha William",
      id: "123456789",
      class: "VII A",
      fees: "$50,036",
    },
    { name: "Tony Soap", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Jordan Nico", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Karen Hope", id: "123456789", class: "VII A", fees: "$50,036" },

    {
      name: "Samantha William",
      id: "123456789",
      class: "VII A",
      fees: "$50,036",
    },
    { name: "Tony Soap", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Jordan Nico", id: "123456789", class: "VII A", fees: "$50,036" },
    { name: "Karen Hope", id: "123456789", class: "VII A", fees: "$50,036" },

    {
      name: "Samantha William",
      id: "123456789",
      class: "VII A",
      fees: "$50,036",
    },
    { name: "Tony Soap", id: "123456789", class: "VII A", fees: "$50,036" },
  ];

  const itemsPerPage = 4;
  const unpaid_grid = document.getElementById("unpaid_grid");
  const pagination = document.getElementById("pagination");

  unpaid_grid.innerHTML = `
    <table id="students-table">
     
      <tbody></tbody>
    </table>
  `;

  const tableBody = document.querySelector("#students-table tbody");

  function showPage(pageNumber) {
    const start = pageNumber * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleStudents = students.slice(start, end);

    tableBody.innerHTML = visibleStudents
      .map(
        (student) => `
      <tr>
        <td><div class="table-icon"></div></td>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td> <svg style="background-color:#fb7d5b;padding:5px; border-radius:50%" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.7055 6.52503C15.7055 6.73128 15.6914 6.93753 15.6656 7.14144C15.6773 7.05941 15.689 6.97503 15.6984 6.893C15.6422 7.30081 15.5344 7.69691 15.3773 8.07659C15.4078 8.00159 15.4406 7.92659 15.4711 7.85159C15.314 8.22191 15.1125 8.56878 14.8664 8.88753C14.9156 8.82425 14.9648 8.76097 15.014 8.69769C14.7703 9.01175 14.4867 9.29534 14.1726 9.53909C14.2359 9.48987 14.2992 9.44066 14.3625 9.39144C14.0437 9.63519 13.6969 9.83909 13.3265 9.99612C13.4015 9.96566 13.4765 9.93284 13.5515 9.90237C13.1719 10.0594 12.7758 10.1672 12.368 10.2235C12.45 10.2118 12.5344 10.2 12.6164 10.1907C12.2062 10.2446 11.7937 10.2446 11.3836 10.1907C11.4656 10.2024 11.55 10.2141 11.632 10.2235C11.2242 10.1672 10.8281 10.0594 10.4484 9.90237C10.5234 9.93284 10.5984 9.96566 10.6734 9.99612C10.3031 9.83909 9.95623 9.63753 9.63748 9.39144C9.70076 9.44066 9.76404 9.48987 9.82732 9.53909C9.51326 9.29534 9.22967 9.01175 8.98592 8.69769C9.03514 8.76097 9.08436 8.82425 9.13357 8.88753C8.88982 8.56878 8.68592 8.22191 8.52889 7.85159C8.55936 7.92659 8.59217 8.00159 8.62264 8.07659C8.4656 7.69691 8.35779 7.30081 8.30154 6.893C8.31326 6.97503 8.32498 7.05941 8.33436 7.14144C8.28045 6.73128 8.28045 6.31878 8.33436 5.90863C8.32264 5.99066 8.31092 6.07503 8.30154 6.15706C8.35779 5.74925 8.4656 5.35316 8.62264 4.97347C8.59217 5.04847 8.55936 5.12347 8.52889 5.19847C8.68592 4.82816 8.88748 4.48128 9.13357 4.16253C9.08436 4.22581 9.03514 4.28909 8.98592 4.35238C9.22967 4.03831 9.51326 3.75472 9.82732 3.51097C9.76404 3.56019 9.70076 3.60941 9.63748 3.65863C9.95623 3.41488 10.3031 3.21097 10.6734 3.05394C10.5984 3.08441 10.5234 3.11722 10.4484 3.14769C10.8281 2.99066 11.2242 2.88284 11.632 2.82659C11.55 2.83831 11.4656 2.85003 11.3836 2.85941C11.7937 2.8055 12.2062 2.8055 12.6164 2.85941C12.5344 2.84769 12.45 2.83597 12.368 2.82659C12.7758 2.88284 13.1719 2.99066 13.5515 3.14769C13.4765 3.11722 13.4015 3.08441 13.3265 3.05394C13.6969 3.21097 14.0437 3.41253 14.3625 3.65863C14.2992 3.60941 14.2359 3.56019 14.1726 3.51097C14.4867 3.75472 14.7703 4.03831 15.014 4.35238C14.9648 4.28909 14.9156 4.22581 14.8664 4.16253C15.1101 4.48128 15.314 4.82816 15.4711 5.19847C15.4406 5.12347 15.4078 5.04847 15.3773 4.97347C15.5344 5.35316 15.6422 5.74925 15.6984 6.15706C15.6867 6.07503 15.675 5.99066 15.6656 5.90863C15.6914 6.11253 15.7031 6.31878 15.7055 6.52503C15.7078 7.01487 16.1344 7.48597 16.643 7.46253C17.1492 7.43909 17.5828 7.05003 17.5805 6.52503C17.5758 5.40238 17.2383 4.25394 16.5773 3.33988C16.3992 3.09378 16.2094 2.85238 15.9984 2.63441C15.7851 2.41409 15.5508 2.22425 15.307 2.03909C14.864 1.70159 14.3695 1.45316 13.8445 1.26097C11.7281 0.485188 9.17576 1.17659 7.74373 2.92034C7.54685 3.15941 7.35935 3.40784 7.19998 3.67503C7.0406 3.93988 6.91639 4.22113 6.80154 4.50706C6.58592 5.03675 6.47576 5.59925 6.43123 6.16878C6.34451 7.28441 6.63513 8.44925 7.21639 9.4055C7.77654 10.3289 8.62264 11.1211 9.6117 11.5688C9.90233 11.7 10.2 11.8219 10.5094 11.9086C10.8164 11.993 11.1281 12.0399 11.4445 12.0774C12.0211 12.1453 12.6094 12.0985 13.1789 11.9836C15.3422 11.543 17.1539 9.67972 17.489 7.493C17.5383 7.17425 17.5758 6.8555 17.5758 6.53206C17.5781 6.04222 17.1422 5.57113 16.6383 5.59456C16.132 5.61097 15.7055 6.00003 15.7055 6.52503ZM18.8156 21.1805C18.3562 21.1805 17.8969 21.1805 17.4375 21.1805C16.343 21.1805 15.2508 21.1805 14.1562 21.1805C12.839 21.1805 11.5219 21.1805 10.2023 21.1805C9.06561 21.1805 7.92889 21.1805 6.78982 21.1805C6.25779 21.1805 5.72576 21.1852 5.19373 21.1805C5.13513 21.1805 5.07654 21.1758 5.02029 21.1688C5.10232 21.1805 5.1867 21.1922 5.26873 21.2016C5.17498 21.1875 5.08591 21.1617 4.9992 21.1266C5.0742 21.1571 5.1492 21.1899 5.2242 21.2203C5.13045 21.1805 5.04373 21.1289 4.9617 21.0657C5.02498 21.1149 5.08826 21.1641 5.15154 21.2133C5.08123 21.1547 5.0156 21.0914 4.95935 21.0211C5.00857 21.0844 5.05779 21.1477 5.10701 21.211C5.04373 21.1289 4.99451 21.0422 4.95232 20.9485C4.98279 21.0235 5.0156 21.0985 5.04607 21.1735C5.01091 21.0868 4.98748 20.9953 4.97107 20.9039C4.98279 20.986 4.99451 21.0703 5.00388 21.1524C4.96638 20.8688 4.99216 20.5688 4.99216 20.2828C4.99216 19.9477 4.99216 19.6149 4.99216 19.2797C4.99216 19.0289 5.00623 18.7805 5.03904 18.5321C5.02732 18.6141 5.0156 18.6985 5.00623 18.7805C5.07185 18.3 5.19841 17.8289 5.38826 17.3813C5.35779 17.4563 5.32498 17.5313 5.29451 17.6063C5.47732 17.1797 5.7117 16.7789 5.99529 16.411C5.94607 16.4742 5.89685 16.5375 5.84763 16.6008C6.13123 16.2375 6.45701 15.9094 6.82264 15.6258C6.75935 15.675 6.69607 15.7242 6.63279 15.7735C7.00076 15.4899 7.40154 15.2555 7.8281 15.0727C7.7531 15.1032 7.6781 15.136 7.6031 15.1664C8.05076 14.9789 8.51951 14.85 9.00232 14.7844C8.92029 14.7961 8.83592 14.8078 8.75389 14.8172C9.10076 14.7727 9.44529 14.7703 9.79451 14.7703C10.2234 14.7703 10.6523 14.7703 11.0812 14.7703C12.082 14.7703 13.0828 14.7703 14.0836 14.7703C14.4703 14.7703 14.8547 14.768 15.2414 14.8172C15.1594 14.8055 15.075 14.7938 14.993 14.7844C15.4734 14.85 15.9445 14.9766 16.3922 15.1664C16.3172 15.136 16.2422 15.1032 16.1672 15.0727C16.5937 15.2555 16.9945 15.4899 17.3625 15.7735C17.2992 15.7242 17.2359 15.675 17.1726 15.6258C17.5359 15.9094 17.864 16.2352 18.1476 16.6008C18.0984 16.5375 18.0492 16.4742 18 16.411C18.2836 16.7789 18.518 17.1797 18.7008 17.6063C18.6703 17.5313 18.6375 17.4563 18.607 17.3813C18.7945 17.8289 18.9234 18.2977 18.9891 18.7805C18.9773 18.6985 18.9656 18.6141 18.9562 18.5321C19.0008 18.886 19.0031 19.2375 19.0031 19.5938C19.0031 19.9805 19.0031 20.3672 19.0031 20.7539C19.0031 20.8875 19.0078 21.0211 18.9914 21.1524C19.0031 21.0703 19.0148 20.986 19.0242 20.9039C19.0101 20.9977 18.9844 21.0868 18.9492 21.1735C18.9797 21.0985 19.0125 21.0235 19.043 20.9485C19.0031 21.0422 18.9516 21.1289 18.8883 21.211C18.9375 21.1477 18.9867 21.0844 19.0359 21.0211C18.9773 21.0914 18.9141 21.1571 18.8437 21.2133C18.907 21.1641 18.9703 21.1149 19.0336 21.0657C18.9516 21.1289 18.8648 21.1782 18.7711 21.2203C18.8461 21.1899 18.9211 21.1571 18.9961 21.1266C18.9094 21.1617 18.818 21.1852 18.7266 21.2016C18.8086 21.1899 18.893 21.1782 18.975 21.1688C18.9234 21.1758 18.8695 21.1782 18.8156 21.1805C18.5742 21.1828 18.3258 21.2836 18.1523 21.4547C17.9906 21.6164 17.8664 21.8836 17.8781 22.118C17.9016 22.6196 18.2906 23.0625 18.8156 23.0555C19.7273 23.0414 20.5289 22.4461 20.7961 21.5719C20.9016 21.225 20.8781 20.8524 20.8781 20.4961C20.8781 19.6805 20.9039 18.8719 20.7633 18.0633C20.557 16.8797 19.9617 15.7664 19.1461 14.8922C18.3305 14.018 17.2336 13.3758 16.0734 13.0899C15.4078 12.9258 14.7375 12.9 14.0578 12.9C13.3594 12.9 12.6633 12.9 11.9648 12.9C11.2758 12.9 10.589 12.9 9.89998 12.9C9.20389 12.9 8.51248 12.9328 7.83514 13.1133C6.68435 13.418 5.60154 14.0672 4.80232 14.9485C3.99607 15.8367 3.41248 16.9524 3.22263 18.143C3.09607 18.9422 3.12185 19.7438 3.12185 20.55C3.12185 20.9203 3.10076 21.3071 3.23435 21.661C3.40779 22.1157 3.68435 22.4742 4.08982 22.7438C4.40623 22.9524 4.80701 23.0532 5.18201 23.0578C5.36482 23.0602 5.54763 23.0578 5.73045 23.0578C6.1992 23.0578 6.6656 23.0578 7.13435 23.0578C7.79998 23.0578 8.46326 23.0578 9.12889 23.0578C9.90233 23.0578 10.6758 23.0578 11.4492 23.0578C12.2437 23.0578 13.0359 23.0578 13.8305 23.0578C14.557 23.0578 15.2812 23.0578 16.0078 23.0578C16.5773 23.0578 17.1469 23.0578 17.714 23.0578C18.0398 23.0578 18.3656 23.0578 18.6914 23.0578C18.7336 23.0578 18.7758 23.0578 18.818 23.0578C19.3078 23.0578 19.7789 22.6266 19.7555 22.1203C19.732 21.6094 19.343 21.1805 18.8156 21.1805Z" fill="white"/>
</svg>  ${student.class}</td>
        <td>${student.fees}</td>
        <td>...</td>
      </tr>
    `
      )
      .join("");

    // Update active button
    document.querySelectorAll(".page-btn").forEach((btn, index) => {
      btn.classList.toggle("active", index === pageNumber);
    });
  }

  function setupPagination() {
    const pageCount = Math.ceil(students.length / itemsPerPage);
    pagination.innerHTML = "";

    for (let i = 0; i < pageCount; i++) {
      const btn = document.createElement("button");
      btn.innerText = i + 1;
      btn.classList.add("page-btn");
      btn.addEventListener("click", () => showPage(i));
      pagination.appendChild(btn);
    }

    showPage(0); // Show first page
    pagination.querySelector(".page-btn").classList.add("active");
  }

  setupPagination();
};table();

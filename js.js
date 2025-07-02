let student_html = `
  <div class="container y-container">
        <div class="first-div">
            <div><h1>Student</h1></div>
            <div class="notifications">
               <div class="bell">
                <img src="image/bell.svg" width="32px" height="32px">
            </div>
            <div class="gear">
                <img src="image/gear.svg" width="32px" height="32px">
            </div>
            <div class="name">
                <span>Nabila A.</span>
                <p>Admin</p>
            </div>
            <div class="profile-pic"></div>
            </div>
        </div>
        <div class="second-div">
            <div class="search-bar">
                <div><img src="image/Search.svg"></div>
                <div><p>Search here...</p></div>
            </div>
            <div class="btns">
                <button class="line"> Newest <i class="fas fa-caret-down"></i></button>
                <button class="filled">  <i class="fas fa-plus"></i> New Student </button>
            </div>
        </div>
        <div class="third-div">
           <div class="table">
            <table class="custom-table">
                <thead>
                    <tr>
                    <th> 
                        <div class="row-1">
                        <div><input type="checkbox"></div>
                        Name
                    </div>
                  </th>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Parent Name</th>
                    <th>City</th>
                    <th>Contact</th>
                    <th>Grade</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Samanta William</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>Mana William </p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#FB7D5B; padding: 4px 8px 4px 8px; border: #FB7D5B; border-radius: 40px;">VII A</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                  <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Tony Soap</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>James Soap </p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#fcc43e; padding: 4px 8px 4px 8px; border: #fcc43e; border-radius: 40px;">VII B</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                  <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Karen Hope</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>Justin Hope</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#4D44B5; padding: 4px 8px 4px 8px; border: #4D44B5; border-radius: 40px;">VII C</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                  <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Jordan Nico</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>Amanda Nico </p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#FCC43E; padding: 4px 8px 4px 8px; border: #FCC43E; border-radius: 40px;">VII A</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                  <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Nadila Adja</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>Jack Adja </p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#FB7D5B; padding: 4px 8px 4px 8px; border: #FB7D5B; border-radius: 40px;">VII A</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                 <tr>
                 <td>
                 <div class="row-body">
                       <div><input type="checkbox"></div>
                       <div class="first-part">
                         <div class="profile-pic2"></div>
                           <h4 style="font-size: 18px; font-weight: 600;">Johnny Ahmad</h4>
                           </div>
                 </div>
                   </td>
                   <td style="font-size: 18px; font-weight: 600; color: #4D44B5;">#123456789</td>
                   <td style="font-size: 14px; font-weight: 400; color: #A098AE;"><p>March 25, 2021</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;"><p>Danny Ahmad</p></td>
                   <td style="font-size: 14px; font-weight: 400; color: #4D44B5;">Jakarta</td>
                   <td>
                    <div class="contact-col" style="display: flex; gap:16px; ">
                        <div class="phone" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;" ><img src="image/Call.svg"></div>
                        <div class="mail" style="width:40px; height: 40px; background-color: #edecf8; display:flex; align-items: center; justify-content: center; border-radius:20px;"><img src="image/Email.svg"></div>
                    </div>
                   </td> 
                 <td>
                     <button style=" width: 80px; height:40px; color:#ffffff; background-color:#FCC43E; padding: 4px 8px 4px 8px; border: #FCC43E; border-radius: 40px;">VII A</button>
                 </td>
                 <td><div><img src="image/menu.svg"></div></td> <!-- Action -->
                 </tr>
                </tbody>
            </table>
               <div class="no-data2">
                <div class="showing-list">
                    <p>Showing <span> 1-5 </span> from <span>100 </span> data</p>
                </div>
                <div class="numbers">
                   <ul>
                     <li class="arrow"><i class=" fas fa-caret-left"></i></li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li class="arrow"><i class="fas fa-caret-right"></i></li>
                   </ul>
                    
                </div>
            </div>
           </div>
        </div>
    </div>
`;
student_li.addEventListener("click", function () {
    document.querySelectorAll("ul li").forEach((el) => {
        el.classList.remove("active");
    });
    student_li.classList.add("active");
    view.innerHTML = student_html;
});
let student_details_html = `
  <div class="container y-container">
      <div class="first-div">
        <div><h1>Student Details</h1></div>
        <div class="notifications">
          <div class="bell">
            <img src="image/bell.svg" width="32px" height="32px" />
          </div>
          <div class="gear">
            <img src="image/gear.svg" width="32px" height="32px" />
          </div>
          <div class="name">
            <span>Nabila A.</span>
            <p>Admin</p>
          </div>
          <div class="profile-pic"></div>
        </div>
      </div>
      <div class="gr-divs">
        <div class="left">
          <div class="top-div">
            <div><img src="image/cover.jpg" class="top-img" alt="" /></div>
            <div class="profile-pic-stu"></div>
            <div class="stu-data">
                <div class="stu-name">
                  <h3>Karen Hope</h3>
                  <span>Student</span>
                </div>
                <div class="data-l">
                  <div class="d-1">
                    <span>Parents:</span>
                    <div class="info">
                     <div class="img"><img src="image/User.svg"></div> 
                      <h5>Justin Hope</h5>
                    </div>
                  </div>
                   <div class="d-1">
                    <span>Address:</span>
                    <div class="info">
                     <div class="img"><img src="image/Location.svg"></div> 
                      <h5>Jakarta, Indonesia</h5>
                    </div>
                  </div>
                   <div class="d-1">
                    <span>Phone:</span>
                    <div class="info">
                     <div class="img"><img src="image/Call-w.svg"></div> 
                      <h5> +12 345 6789 0 </h5>
                    </div>
                  </div>
                   <div class="d-1">
                    <span>Emial:</span>
                    <div class="info">
                     <div class="img"><img src="image/Email-w.svg"></div> 
                      <h5>Hope@mail.com</h5>
                    </div>
                  </div>
                </div>

            </div>
          </div>

          <div class="down-div">
            <div><h3>Payment History</h3></div>
            <div class="payment-data">
              <div class="status">
                <div class="f-status">
                  <div class="s-img"><img src="image/trending.svg" /></div>
                  <span
                    style="color: #303972; font-size: 18px; font-weight: 600"
                    >#123456789</span
                  >
                </div>
                <p style="color: #a098ae; font-size: 14px; font-weight: 400">
                  2 March 2021, 13:45 PM
                </p>
                <h4 style="font-size: 18px; font-weight: 600; color: #303972">
                  $ 50,036
                </h4>
                <h5 style="font-size: 18px; font-weight: 600; color: #4cbc9a">
                  Complete
                </h5>
              </div>
              <div class="status">
                <div class="f-status">
                  <div class="s-img"><img src="image/trending.svg" /></div>
                  <span
                    style="color: #303972; font-size: 18px; font-weight: 600"
                    >#123456789</span
                  >
                </div>
                <p style="color: #a098ae; font-size: 14px; font-weight: 400">
                  2 March 2021, 13:45 PM
                </p>
                <h4 style="font-size: 18px; font-weight: 600; color: #303972">
                  $ 50,036
                </h4>
                <h5 style="font-size: 18px; font-weight: 600; color: #a098ae">
                  Pending
                </h5>
              </div>
              <div class="status">
                <div class="f-status">
                  <div class="s-img"><img src="image/trending.svg" /></div>
                  <span
                    style="color: #303972; font-size: 18px; font-weight: 600"
                    >#123456789</span
                  >
                </div>
                <p style="color: #a098ae; font-size: 14px; font-weight: 400">
                  2 March 2021, 13:45 PM
                </p>
                <h4 style="font-size: 18px; font-weight: 600; color: #303972">
                  $ 50,036
                </h4>
                <h5 style="font-size: 18px; font-weight: 600; color: #ff4550">
                  Canceled
                </h5>
              </div>
              <div class="status">
                <div class="f-status">
                  <div class="s-img"><img src="image/trending.svg" /></div>
                  <span
                    style="color: #303972; font-size: 18px; font-weight: 600"
                    >#123456789</span
                  >
                </div>
                <p style="color: #a098ae; font-size: 14px; font-weight: 400">
                  2 March 2021, 13:45 PM
                </p>
                <h4 style="font-size: 18px; font-weight: 600; color: #303972">
                  $ 50,036
                </h4>
                <h5 style="font-size: 18px; font-weight: 600; color: #4cbc9a">
                  Complete
                </h5>
              </div>
            </div>
            <div class="no-data">
              <div class="showing-list">
                <p>Showing <span> 1-5 </span> from <span>100 </span> data</p>
              </div>
              <div class="numbers">
                <ul>
                  <li class="arrow"><i class="fas fa-caret-left"></i></li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li class="arrow"><i class="fas fa-caret-right"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="right-div">
          <div class="box1">
            <h3>Schedule Details</h3>
            <p>Thursday, 10th April , 2021</p>
          </div>
          <div class="box2" style="border-left: 20px solid #4d44b5">
            <div class="data">
              <h3>Basic Algorithm</h3>
              <p>Algorithm</p>
            </div>
            <div class="details">
              <div class="d-1">
                <span
                  ><i
                    class="far fa-calendar-alt"
                    style="color: #fb7d5b; padding-right: 16px"
                  ></i>
                  March 20, 2021</span
                >
                <span
                  ><i
                    class="far fa-clock"
                    style="color: #fcc43e; padding-right: 16px"
                  ></i>
                  09.00 - 10.00 AM</span
                >
              </div>
              <div class="d-2">
                <div class="profile-pic"></div>
              </div>
            </div>
          </div>
          <div class="box2" style="border-left: 20px solid #fb7d5b">
            <div class="data">
              <h3>Basic Art</h3>
              <p>Art</p>
            </div>
            <div class="details">
              <div class="d-1">
                <span
                  ><i
                    class="far fa-calendar-alt"
                    style="color: #fb7d5b; padding-right: 16px"
                  ></i>
                  March 20, 2021</span
                >
                <span
                  ><i
                    class="far fa-clock"
                    style="color: #fcc43e; padding-right: 16px"
                  ></i>
                  09.00 - 10.00 AM</span
                >
              </div>
              <div class="d-2">
                <div class="profile-pic"></div>
              </div>
            </div>
          </div>
          <div class="box2" style="border-left: 20px solid #fcc43e">
            <div class="data">
              <h3>HTML & CSS Class</h3>
              <p>Programming</p>
            </div>
            <div class="details">
              <div class="d-1">
                <span
                  ><i
                    class="far fa-calendar-alt"
                    style="color: #fb7d5b; padding-right: 16px"
                  ></i>
                  March 20, 2021</span
                >
                <span
                  ><i
                    class="far fa-clock"
                    style="color: #fcc43e; padding-right: 16px"
                  ></i>
                  09.00 - 10.00 AM</span
                >
              </div>
              <div class="d-2">
                <div class="profile-pic"></div>
              </div>
            </div>
          </div>
          <div class="box2" style="border-left: 20px solid #303972">
            <div class="data">
              <h3>Simple Past Tense</h3>
              <p>English</p>
            </div>
            <div class="details">
              <div class="d-1">
                <span
                  ><i
                    class="far fa-calendar-alt"
                    style="color: #fb7d5b; padding-right: 16px"
                  ></i>
                  March 20, 2021</span
                >
                <span
                  ><i
                    class="far fa-clock"
                    style="color: #fcc43e; padding-right: 16px"
                  ></i>
                  09.00 - 10.00 AM</span
                >
              </div>
              <div class="d-2">
                <div class="profile-pic"></div>
              </div>
            </div>
          </div>
          <div
            style="
              background-color: #e2e2f8;
              border-radius: 40px;
              display: flex;
              justify-content: center;
            "
          >
            <button
              style="
                color: #4d44b5;
                font-weight: 600;
                padding: 17px;
                background-color: #e2e2f8;
                border: none;
                border-radius: 40px;
              "
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
 `;
/*student_details_li.addEventListener("click", function () {
  document.querySelectorAll("ul li").forEach((el) => {
    el.classList.remove("active");
  });
  student_details_li.classList.add("active");
  view.innerHTML = student_details_html;
});*/

let finance_html = `
<div  class="p-5 y-container">
      <div class="header ">
        <div > <h1>Finance</h1></div>
        <div  class="d-flex gap-3">
            <div class="search-bar"> 
             <img src="image/Search.svg " >
             <p>Search here...</p>
            </div>

            <div class="bell">
                <img src="image/bell.svg" width="32px" height="32px">
            </div>
            <div class="gear">
                <img src="image/gear.svg" width="32px" height="32px">
            </div>
            <div class="name">
                <span>Nabila A.</span>
                <p>Admin</p>
            </div>
            <div class="profile-pic"></div>
        </div>
      </div>
      <div class="second-div">
        <div class="box1" style="padding: 30px 32px;">
        <div class="b1-img"> <img src="image/Student (1).svg"></div>
        <div>
            <p>Total Students</p>
            <h3>932</h3>
            <p><span>+10%</span> than last month</p>
        </div>
        </div>
         <div class="box2" style="padding: 30px 24px 30px 32px;">
        <div class="b2-img"> <img src="image/Teacher.svg"></div>
        <div>
            <p>Total Teachers</p>
            <h3>754</h3>
            <p><span>-0,5%</span> than last month</p>
        </div>
        </div>
        <div class="box3" style="padding: 30px 24px 30px 32px;">
        <div class="b3-img"> <img src="image/Finance.svg"></div>
        <div>
            <p>School Balance</p>
            <h3>$123,456</h3>
            <p><span>+23%</span> than last month</p>
        </div>
        <div  > <img src="image/Graph (1).png " width="281" height="83"></div>
        </div>

      </div>
      <div class="third-div">
           <div class="graph-data">
            <div><h2>Balance Analytics</h2></div>
            <div class="numeric-data">
              <div class="expence">
                <span><i class="far fa-circle" style="color:#FCC43E;"></i>Expense</span>
                <p>1.245</p>
              </div>
              <div class="income">
               <span><i class="far fa-circle" style="color:#FB7D5B;"></i> Income</span>
                <p>1.356</p>
              </div>
              <button>More <i class="fas fa-caret-down"></i></button>
            </div>
            </div>
            <div class="graph-draw">
                <canvas id="myChartFinance"></canvas>
            </div>
      </div>
      <div class="fourth-div">
        <div class="unpaid-students">
            <div><h3>Unpaid Student Intuition</h3></div>
            <div class="list-names">
              <div class="stu1">
                <div class="profile-pic" style="margin-right: 24px;"></div>
                <h4 >Samantha W.</h4>
                <span style="margin-left: 54px;">ID 123456789</span>
                <div class="user" style="margin-left: 67px;">
                    <div class="u-img"><img src="image/User.svg"></div>
                    <div class="user-data">
                        <p>class</p>
                        <span>VII A</span>
                    </div>
                </div>
                <h4 style="margin-left: 67px;">$ 50,036</h4>
                <div style="margin-left: 67px;"><img src="image/menu.svg"></div>
              </div>
               <div class="stu1">
                <div class="profile-pic" style="margin-right: 24px;"></div>
                <h4 >Tony Soap</h4>
                <span style="margin-left: 82px;">ID 123456789</span>
                <div class="user" style="margin-left: 67px;">
                    <div class="u-img"><img src="image/User.svg"></div>
                    <div class="user-data">
                        <p>class</p>
                        <span>VII A</span>
                    </div>
                </div>
                <h4 style="margin-left: 67px;">$ 50,036</h4>
                <div style="margin-left: 67px;"><img src="image/menu.svg"></div>
              </div>
               <div class="stu1">
                <div class="profile-pic" style="margin-right: 24px;"></div>
                <h4 >Jordan Nico</h4>
                <span style="margin-left: 67px;">ID 123456789</span>
                <div class="user" style="margin-left: 67px;">
                    <div class="u-img"><img src="image/User.svg"></div>
                    <div class="user-data">
                        <p>class</p>
                        <span>VII A</span>
                    </div>
                </div>
                <h4 style="margin-left: 67px;">$ 50,036</h4>
                <div style="margin-left: 67px;"><img src="image/menu.svg"></div>
              </div>
               <div class="stu1">
                <div class="profile-pic" style="margin-right: 24px;"></div>
                <h4 >Karen Hope</h4>
                <span style="margin-left: 67px;">ID 123456789</span>
                <div class="user" style="margin-left: 67px;">
                    <div class="u-img"><img src="image/User.svg"></div>
                    <div class="user-data">
                        <p>class</p>
                        <span>VII A</span>
                    </div>
                </div>
                <h4 style="margin-left: 67px;">$ 50,036</h4>
                <div style="margin-left: 67px;"><img src="image/menu.svg"></div>
              </div> 
              <div class="stu1">
                <div class="profile-pic" style="margin-right: 24px;"></div>
                <h4 >Nadila Adja</h4>
                <span style="margin-left: 71px;">ID 123456789</span>
                <div class="user" style="margin-left: 67px;">
                    <div class="u-img"><img src="image/User.svg"></div>
                    <div class="user-data">
                        <p>class</p>
                        <span>VII A</span>
                    </div>
                </div>
                <h4 style="margin-left: 67px;">$ 50,036</h4>
                <div style="margin-left: 67px;"><img src="image/menu.svg"></div>
              </div>

            </div>
            <div class="no-data">
                <div class="showing-list">
                    <p>Showing <span> 1-5 </span> from <span>100 </span> data</p>
                </div>
                <div class="numbers">
                   <ul>
                     <li class="arrow"><i class=" fas fa-caret-left"></i></li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li class="arrow"><i class="fas fa-caret-right"></i></li>
                   </ul>
                    
                </div>
            </div>
        </div>
        <div class="school-expence">
            <div><h3>School Expense</h3></div>
            <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5>Complete</h5>
                </div>
                <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5 style="color: #A098AE;">Pending</h5>
                </div>
                <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5 style="color: #FF4550;">Canceled</h5>
                </div>
                <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5>Complete</h5>
                </div>
                <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5>Complete</h5>
                </div>
                <div class="status" >
                <div class="f-status">
                    <div class="s-img"><img src="image/trending.svg"></div>
                    <div class="status-data">
                        <span>#123456789</span>
                        <p>2 March 2021, 13:45 PM</p>
                    </div>
                    </div>
                     <h4>$ 50,036</h4>
                     <h5>Complete</h5>
                </div>
            <div class="no-data2">
                <div class="showing-list">
                    <p>Showing <span> 1-5 </span> from <span>100 </span> data</p>
                </div>
                <div class="numbers">
                   <ul>
                     <li class="arrow"><i class=" fas fa-caret-left"></i></li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li class="arrow"><i class="fas fa-caret-right"></i></li>
                   </ul>
                    
                </div>
            </div>
        </div>

      </div>
    </div>
    
`;
finance_li.addEventListener("click", function () {
    console.log("HAHAHA");
    document.querySelectorAll("ul li").forEach((el) => {
        el.classList.remove("active");
    });
    finance_li.classList.add("active");
    view.innerHTML = finance_html;
    const ctx = document.getElementById("myChartFinance").getContext("2d");

    const myChartFinance = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "نسبة الإنجاز",
                    data: [10, 20, 30, 45, 50, 60, 65, 75, 85, 90, 95, 100],
                    fill: false,
                    borderColor: "#FB7D5B",
                    tension: 0.4,
                    pointBackgroundColor: "#4d44b5",
                    pointRadius: 5,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 25,
                    },
                },
            },
        },
    });
});
let chat_html = `
<div class="container-chat y-container">
    <div class="first-div">
        <div><h1>Chat</h1></div>
        <div class="header-left-side">
        <div class="search-bar">
                <div><img src="image/Search.svg"></div>
                <div><p>Search here...</p></div>
            </div>
        <div class="notifications">
          <div class="bell">
            <img src="image/bell.svg" width="32px" height="32px" />
          </div>
          <div class="gear">
            <img src="image/gear.svg" width="32px" height="32px" />
          </div>
          <div class="name">
            <span>Nabila A.</span>
            <p>Admin</p>
          </div>
          <div class="profile-pic"></div>
        </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="chat-box-left">
            <div class="title-part" style="margin-bottom: 40px;">
                <h2 style="color: #303972; font-size: 24px; font-weight: 700;">Messages</h2>
                 <div class="search-bar" style="border: 2px solid #A098AE ">
                <div><img src="image/Search.svg"></div>
                <div><p>Search here...</p></div>
            </div>
            </div>
            <div class="groups" style="margin-bottom: 24px;" >
               <div style="margin-bottom: 24px;"><span style="font-size: 18px; font-weight: 600; color: #A098AE;"> Groups</span></div> 
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #4D44B5;"></div>
                        <div class="g-name">
                            <h4>Class History VII-A</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                        <p class="msg-no" style=" color: white; width: 24px; height: 24px; background-color: #FB7D5B; border-radius: 40px; display: flex; align-items: center; justify-content: center;">2</p>
                    </div>
                </div>
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #FB7D5B;"></div>
                        <div class="g-name">
                            <h4>Class VII-A</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                        <p class="msg-no" style=" color: white; width: 24px; height: 24px; background-color: #FB7D5B; border-radius: 40px; display: flex; align-items: center; justify-content: center;">2</p>
                    </div>
                </div>
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #FCC43E;"></div>
                        <div class="g-name">
                            <h4>All Student VII</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin-top:-30px; ">12:45 PM</span>
                    </div>
                </div>

            </div>

            <div class="groups" style="margin-bottom: 24px;" >
               <div style="margin-bottom: 24px;"><span style="font-size: 18px; font-weight: 600; color: #A098AE;"> Chats</span></div> 
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #C1BBEB;"></div>
                        <div class="g-name">
                            <h4>Samantha William</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                        <p class="msg-no" style=" color: white; width: 24px; height: 24px; background-color: #FB7D5B; border-radius: 40px; display: flex; align-items: center; justify-content: center;">2</p>
                    </div>
                </div>
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #C1BBEB;"></div>
                        <div class="g-name">
                            <h4>Tony Soap</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                        <p class="msg-no" style=" color: white; width: 24px; height: 24px; background-color: #FB7D5B; border-radius: 40px; display: flex; align-items: center; justify-content: center;">2</p>
                    </div>
                </div>
                <div class="class-history" style="height: 82px; ">
                    <div class="class-right">
                        <div class="profile-pic" style="background-color: #C1BBEB;"></div>
                        <div class="g-name">
                            <h4>Karen Hope</h4>
                            <span>Lorem ipsum dolor sit amet...</span>
                        </div>
                    </div>
                    <div class="class-left" >
                        <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin-top:-30px; ">12:45 PM</span>
                    </div>
                </div>
                <button
              style="
              margin-top: 24px;
                color: #4d44b5;
                font-weight: 600;
                padding: 17px;
                background-color: #e2e2f8;
                border: none;
                border-radius: 40px;
                width: 443px;
                height: 61px;
              "
            >
              View More
            </button>

            </div>
        </div>
        <div class="chat-box-right">
            <div class="upper-chat">
                <div class="upper-chat-left">
                      <div class="profile-pic" style="background-color: #C1BBEB;"></div>
                        <div class="g-name">
                            <h4 style="white-space:nowrap;">Samantha William</h4>
                            <div class="online">
                                <div class="status-indicator"></div>
                                <span>online</span>
                            </div> 
                    </div> 
                </div>
                <div class="upper-chat-right">
                    <img src="image/43-Video.svg">
                    <img src="image/menu.svg">
                </div>
                      
            </div>
            <div class="middle-chat">
                <div class="m-left" style="max-width: 416px; width: 100%; display: flex; flex-direction: column; gap: 16px; padding: 25px;">
                    <div class="w-msg" style="width: 160px; height: 60px; " ><p > Hello Nabila! </p></div>
                    <div class="w-msg" style="border-bottom-left-radius:0 ;"><p> Can i see your history lesson homework?  </p></div>
                    <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                </div>
                 <div class="m-right" style="max-width: 416px; width: 100%; display: flex; flex-direction: column; gap: 16px; padding: 25px; margin-top: 223px; align-items: end;">
                    <div class="w-msg-2" style="width: 160px; height: 60px; " ><p > Hello Samantha! </p></div>
                    <div class="w-msg-2" style="border-bottom-right-radius:0 ;"><p> I’m not finished yet, why don’t work 
together to finish homework? </p></div>
                    <span style="color: #A098AE; font-size: 16px; font-weight: 400; margin:0px; ">12:45 PM</span>
                </div>
            </div>
            <div class="last-chat">
                <div class="msg-box" >
                    <p>Write your message...</p>
                    <div class="send-icons" style="display:flex ; gap: 14px; ">
                     <img src="image/Layer 5.svg">
                     <button style="background-color:#4D44B5; border-radius:40px ; color:white; font-size: 18px; font-weight: 600; border: none; padding:15px; width: 136px;">Send <i class="fa-regular fa-paper-plane"></i> </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
   </div>
`;
chat_li.addEventListener("click", function () {
    document.querySelectorAll("ul li").forEach((el) => {
        el.classList.remove("active");
    });
    chat_li.classList.add("active");
    view.innerHTML = chat_html;
});

import React, { Fragment } from 'react'
import './Authentication.css'
import { Link } from 'react-router-dom'

const AuthenticationForm = () => {
  return (
    <div className="section-right max-w-md w-[100%] pl-8 mt-8 bg-gray-100 rounded-md">
      <h2>Welcome to <span class="text-global">My Revision+</span> </h2>
      <div class="tab">
        <button class="tablinks active" id="defaultOpen"> Login My Revision V2</button>
        <button class="tablinks" > Login My Revision V1</button>
      </div>
      <form>
        <div className="mb-4 mt-4">
          <div class="relative">
            <input type="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-gray-500 focus:ring-0 focus:border-blue-900 peer" placeholder=" " />

            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Email</label>
          </div>
        </div>
        <div className="mb-4">
          <div class="relative">
            <input type="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
          </div>
        </div>
        <div class="touch-form2">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label class="remember" for="vehicle1"> Remember me</label>
          <Link to="#" class="forgot-password">Forgot Password?</Link>
        </div>

        <div class="touch-form2">
          <button type="submit" name="login" class="submit-now">Continue</button>
        </div>
      </form>
    </div>
  )
}

export default AuthenticationForm
    // <Fragment>
    //     <div class="section-right">

    //         <h2>Welcome to <span class="text-global">IB Global</span> <span class="text-academy">Academy</span></h2>


    //         <div class="tab">
    //             <button class="tablinks active" id="defaultOpen"> Login My Revision V2</button>
    //             <button class="tablinks" > Login My Revision V1</button>
    //         </div>
    //         <form class="auth-login-form mt-2" >
    //             <input type="hidden" /><div id="ib-mk" class="tabcontent" >
    //                 <div class="login-box">
    //                     <div class="touch-form">
    //                         <label>
    //                             <input id="email" type="email" name="email" placeholder="john@example.com" aria-describedby="login-email" autofocus="" tabindex="1" />
    //                             <span>Email</span>
    //                         </label>
    //                     </div>

    //                     <div class="touch-form1">
    //                         <label>
    //                             <input id="password" type="password" name="password" placeholder="············" aria-describedby="login-password" tabindex="2" required="" autocomplete="current-password" />
    //                             <span>Password</span>
    //                         </label>
    //                     </div>
    //                     <div class="touch-form2">
    //                         <a href="https://ibgakiosk.com/v2/forgot-password" class="forgot-password">Forgot Password?</a>
    //                     </div>
    //                     <div class="touch-form2">
    //                         <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    //                         <label class="remember" for="vehicle1"> Remember me</label>
    //                     </div>

    //                     <div class="touch-form2">
    //                         <button class="btn btn-primary w-100 submit-now" tabindex="4">Continue</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </form>

    //         <div id="ib-mk1" class="tabcontent" style={{ display: 'none' }}>

    //             <div class="ib-box">

    //                 <div class="ib-login">
    //                     <label>
    //                         <input type="radio" value="stu" name="anything" class="radioCls" id="yes" checked="" />Student Login
    //                     </label>
    //                 </div>
    //                 <div class="ib-login">
    //                     <label>
    //                         <input type="radio" value="teach" name="anything" class="radioCls" id="no" />Teacher Login
    //                     </label>
    //                 </div>

    //             </div>

    //             <form class="form-horizontal m-t-30" action="../stu_login.php" method="post">
    //                 <div class="someData activeTab" id="first">
    //                     <div class="login-box">
    //                         <input type="radio" style={{ display: 'none' }} name="loginFlag" value="Student" checked="" />
    //                         <div class="touch-form">
    //                             <label>
    //                                 <input type="email" class="form-control custom" name="username" autocomplete="off" placeholder="Enter username" required="" />
    //                                 <span>Email</span>
    //                             </label>
    //                         </div>

    //                         <div class="touch-form1">
    //                             <label>
    //                                 <input type="password" class="form-control custom" name="password" autocomplete="off" placeholder="Enter password" required="" />
    //                                 <span>Password</span>
    //                             </label>
    //                         </div>

    //                         <div class="touch-form2">
    //                             <a href="../std-forget-password.php" class="forgot-password">Forgot Password?</a>
    //                         </div>

    //                         <div class="touch-form2">
    //                             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    //                             <label class="remember" for="vehicle1"> Remember me</label>
    //                         </div>
    //                         <div class="touch-form2">
    //                             <button type="submit" name="login" class="submit-now">Continue</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </form>

    //             <form class="form-horizontal m-t-30" action="../teacher_login.php" method="post">
    //                 <div class="someData" id="second">
    //                     <p></p>
    //                     <div class="login-box">
    //                         <div class="touch-form">
    //                             <label>
    //                                 <input type="email" placeholder="Email" name="username" autocomplete="off" required="" />
    //                                 <span>Email</span>
    //                             </label>
    //                         </div>
    //                         <div class="touch-form1">
    //                             <label>
    //                                 <input type="password" placeholder="Password" name="password" autocomplete="off" required="" />
    //                                 <span>Password</span>
    //                             </label>
    //                         </div>
    //                         <div class="touch-form2">
    //                             <a href="#" class="forgot-password">Forgot Password?</a>
    //                         </div>
    //                         <div class="touch-form2">
    //                             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    //                             <label class="remember" for="vehicle1"> Remember me</label>
    //                         </div>
    //                         <div class="touch-form2">
    //                             <button type="submit" name="login" class="submit-now">Continue</button>
    //                         </div>
    //                     </div></div>
    //             </form>
    //         </div>
    //     </div>
    // </Fragment>
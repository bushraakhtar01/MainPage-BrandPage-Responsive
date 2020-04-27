import React, { Component } from 'react';




import {Link} from 'react-router-dom';
import './scroll.js';
import  './main.css';

class TopNav extends Component{
       

    render(){
        

        return(

            <div className="container-fluid" id='container' >
                  <button   id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>
               {/* logo row */}
               <div className="row">
                  <div className="col">
                 <Link to="/mainpage"> <center><img src="logo1.jpg" className="mainlogo"/></center></Link>
                
                  </div>

               </div>
              
                  {/* sign in , register and cart row */}

                <div className="row" >
                  {/* <div className="col-md-11 col-9" style={{textAlign:'right'}} >  <i class="user outline icon"></i>
                    <p style={{display:'inline-block'}}> Sign in &nbsp; /Register</p>
                  </div>
                  {/* <div className="col-md-2 col-3" style={{backgroundColor:'pink', textAlign:'center'}}><i class="edit outline icon"></i>
                  
                     Register
                  </div> */}
                   {/* <div className="col-md-1 col-3" style={{ textAlign:'left'}}>
                      <i class="opencart icon"></i>
                     <p style={{display:'inline-block'}}>Cart</p>
                  </div>  */}

                  <div className="col " id="signinpara"  >
                     <ul style={{float:'right'}} >
                        <li className="login-cart"  ><i class="user outline large icon"></i> &nbsp; &nbsp; </li>
                        <li className="login-cart"><i class="shopping cart large icon"></i></li>
                        
                     </ul>
                  </div>
                   </div>
                      {/* New arrivals , brands row */}

                      {/* <div className="row" id="newarrivals" >
                     <div className='col-md-4 col-4'  style={{textAlign:'right'}}>
                     NEW ARRIVALS

                     </div>
                     <div className='col-md-1 col-4' style={{textAlign:'center'}} >
                        FANCY

                     </div>
                     <div className='col-md-1 col-4' style={{textAlign:'center'}} >
                        STITCHED

                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                       KURTI

                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                     UNSTITCHED


                     </div>
                     <div className='col-md-1 col-3' style={{textAlign:'center'}}>
                        LAWN

                     </div>
               
                     <div className='col-md-3 col-3' >
                        Brands

                     </div>
                   

               </div> */}
               <nav className="navbar navbar-expand-lg navbar-light " >
  <button  className="navbar-toggler navtogglebutton" type="button"  data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"  ></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav"   >
    <ul className="navbar-nav" >
       
      <li class="nav-item" >
        <p  > NEW ARRIVALS &nbsp; &nbsp;</p>
        
   
      </li>
      <li class="nav-item">
        <p > UNSTITCHED &nbsp; &nbsp;</p>
        
      </li>
      <li class="nav-item">

        <p > STITCHED &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
        <p >FANCY &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
          <p > KURTI &nbsp; &nbsp;</p>
      </li>
      <li class="nav-item">
      
      <Link to="/brandfullpage" className="brandsLink"><p > BRANDS &nbsp; &nbsp;</p></Link>  
      </li>
    
    </ul>
  </div>
</nav>
        

              </div>
      
        )
    }

}
export default TopNav;


//  //import react libraries
//  import React, { Component } from 'react';
//  import {Link} from "react-router-dom";
//  import './main.css';



//  class TopNav extends Component{ 
//    render(){
//     return(

//       <div >
//         <div className="mainnavbardv" >
//           {/* logo img */}
//          <center><Link to='/mainpage'><img src="logo.jpg" className="mainlogo" ></img></Link></center> 
               

//                {/* right side text */}
//          <div className="signin" > 

//          <Link to='/login'> <p className="signinpara"  >  
//            <i class="user outline icon"></i>Sign in</p></Link>

//       <p className="registerpara" ><i class="edit outline icon">
//         </i>Register</p>
//       <p className="shoppingcartpara" ><i class="opencart icon"></i>Shopping Cart</p>
  
//          </div> 
   
//         </div>
//   {/* nav */}
// <center><nav className="mainnav" >
//   <ul >
//     <li className="newarrivalnav" >
//       NEW ARRIVALS
   
//     </li>
//     <li className="othersnav"  >
//    UNSTITCHED
   
//     </li>
//     <li className="othersnav" >
//     STITCHED
//     </li>
//     <li className="othersnav" >
//     LAWN
   
//     </li>
//     <li className="othersnav" >
//      FANCY
   
//     </li>
//     <li className="othersnav" >
//      KURTI
   
//     </li>
//     <li className="othersnav" >
//     <Link to='/brandfullpage'>BRANDS</Link> 
   
//     </li>
//     <li className="brandnav" >
//      </li>
//   </ul>
// </nav>
// </center>

// </div>
//     );
//    }
     
 
//  }
//  export default TopNav;
 
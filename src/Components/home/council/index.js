import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Council extends Component {
state = {
show:false
}
render() {
return (
<div style={{paddingTop:"100px"}}>
   <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="controls-top">
         <a style={{paddingLeft:'15px',paddingRight:'15px', background:"rgb(14, 23, 49) none repeat scroll 0% 0%", color:"#ffffff"}} className="btn-floating btn-secondary featured_text" href="#myCarousel" data-slide-to="0">SE</a>
         <a style={{paddingLeft:'15px',paddingRight:'15px', background:"rgb(14, 23, 49) none repeat scroll 0% 0%", color:"#ffffff"}} className="btn-floating btn-secondary featured_text" href="#myCarousel" data-slide-to="1">TE</a>
         <a style={{paddingLeft:'15px',paddingRight:'15px', background:"rgb(14, 23, 49) none repeat scroll 0% 0%", color:"#ffffff"}} className="btn-floating btn-secondary featured_text" href="#myCarousel" data-slide-to="2">BE</a>
      </div>

      <div className="carousel-inner">
         <div className="item">
            <h2>
               <center>SE COUNCIL</center>
            </h2>
            <div className="container" style={{width:"auto"}}>
               <div className="row">
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                           <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/tina.png')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Tina Chandwani</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                            <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/jatin.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Jatin Bhagchandani</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/rithika.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Rithika Ranadive</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/rahul.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Rahul Tejwani</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/yash.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Yash Diwan</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/raj.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Raj Shetye</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/rohit.jpeg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Rohit Pandey</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Operations Officer/valeed.jpeg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Valeed Kotvala</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Technical Officer/anish.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Anish Chhabria</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Technical Officer/aditi.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Aditi Saptarishy</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Technical Officer/Kunal.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Kunal Bhatija</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr.PRO/apoorva.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Apporva Sudheesh</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr.PRO/meetali.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Meetali Dulera</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr.PRO/vrudhi.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Vrudhi Israni</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr.PRO/sahil.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Sahil Gangwani</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Web Editors/sujit.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Sujitkumar Singh</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Web Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Web Editors/aditya.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Aditya Raute</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Web Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Web Editors/ritesh.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Ritesh Yadav</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Web Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Editor/aishwarya.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Aishwarya Sahoo</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/SE/Jr. Editor/atharva.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Atharva Gupte</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Editor</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <h2>
               <center>TE COUNCIL</center>
            </h2>
            <div className="container" style={{width:"auto"}}>
               <div className="row">
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Top 4/soham.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Soham Sakpal</div>
                        </div>
                        <div className="post">
                           <div className="text">Co-Chairperson</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Top 4/ariscia.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Ariscia Mendes</div>
                        </div>
                        <div className="post">
                           <div className="text">Operations Secretary</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Top 4/tarun.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Tarun Dadlani</div>
                        </div>
                        <div className="post">
                           <div className="text">Managing Secretary</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Top 4/ajay.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Ajay More</div>
                        </div>
                        <div className="post">
                           <div className="text">Jr. Treasurer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/pramod.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>

                        </div>
                        <div className="name">
                           <div className="text">Pramodkumar Choudhary</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/manoj.jpeg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Manoj Ochaney</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/jairaj.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Jairaj Khushalani </div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/richa.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Richa Jaisinghani </div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/abdus.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Abdus Shaikh </div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/naman.png')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Naman Varyomalani</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Technical Officers/Karan.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Karan Hemdev</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Technical Officers/Mitesh.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Mitesh Goplani</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Technical Officers/Pranit.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Pranit Naik</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Technical Officers/Pradyumn.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Pradyumn Gupta</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Technical Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr PROs/karan.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Karan Bulani</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr PROs/Urjita.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Urjita Bedekar</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr PROs/Apeksha.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Apeksha Sansare</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Public Relations Officer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr. Web Editors/Aditya.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Aditya Mane</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Web Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr. Web Editors/ashutosh.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Ashutosh Matai</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Technical Officer </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Editor/Padmaja.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Padmaja Borwankar</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Editor</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">  
                        <Image src={require('../../../Resources/images/Council/TE/Sr Operational Officers/divya.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Divya Manoj</div>
                        </div>
                        <div className="post">
                           <div className="text">Sr. Operations Officer</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="item active">
            <h2>
               <center>BE COUNCIL</center>
            </h2>
            <div className="container" style={{width:"90%"}}>
               <div className="row">
                  <div className="col-md-4" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/adarsh.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Adarsh Shetty</div>
                        </div>
                        <div className="post">
                           <div className="text">Chairperson</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/sanket.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Sanket Paratkar</div>
                        </div>
                        <div className="post">
                           <div className="text">Treasurer</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/jagrit.jpeg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Jagrit Bhat</div>
                        </div>
                        <div className="post">
                           <div className="text">Secretary</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/saahil.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Saahil Hiranandani</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/jenika.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Jenika Dhawan</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/aakash.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Aakash Birari</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/harsha.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Harsha Tolani</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/bhavik.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Bhavik Jain</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/rushikesh.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Rushikesh Gawande</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/kaushal.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Kaushal Mhalgi</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/anikesh.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Anikesh S.M</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/neha.JPG')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Neha Patil</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/shivani.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Shivani Singh</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3" style={{padding:30}} >
                     <div className="picture">
                        <div className="hvr-radial-out">
                        <Image src={require('../../../Resources/images/Council/BE/siddharth.jpg')} alt="Avatar" className="image" style={{width:"100%"}}/>
                        </div>
                        <div className="name">
                           <div className="text">Siddharth Dekhane</div>
                        </div>
                        <div className="post">
                           <div className="text">Executive Committee</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
export default Council;
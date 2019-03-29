import React from 'react';
import Carrousel from './Carrousel';


const SecondPage = () => {
    const container = {border: '3px solid #f1f1f1',width:'100%', height:'500px', margin:'10px'};
    const smallerimage = {margin:'10px'};
    const styleImage1 = {width:'300px', height:'300px', margin:'10px'};
    const styleImage = {width:'100px', height:'100px', margin:'10px'};
    return (
        <div>
        <div style={{position:'relative', background:'#000000'}}>
            <Carrousel/>
            
            </div>     
<div className="row" style={{background:"#ffffff"}}>
<div className="col-md-6" >
    <div>
        <center><div className="gallerytitle">GITHUB</div></center>
    <section style={container}>
       
            <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/github.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/github.jpg')} alt=""/>
            </a>
        </center>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/git1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/git1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/git2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/git2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/git3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/git3.jpg')} alt=""/>
            </a>
            </center>
    </section>
    </div>

</div>
<div className="col-md-6" >

    <div>
    <center><div className="gallerytitle">PHP</div></center>
    <section style={container}>
        <center >
            <a className="example-image-link" href={require('../../../Resources/images/workshop/php.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/php.jpg')} alt=""/>
            </a>
        </center>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/php1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/php1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/php2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/php2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/php3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/php3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>

</div>
<div className="col-md-6">

    <div>
    <center><div className="gallerytitle">IRC</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/irc.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/irc.jpg')} alt=""/>
            </a>
        </center>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/irc1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/irc1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/irc2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/irc2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/irc3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/irc3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>

    </div>
<div className="col-md-6">


    <div>
    <center><div className="gallerytitle">BOOTSTRAP</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/boot.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/boot.jpg')} alt=""/>
            </a>
        </center>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/boot1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/boot1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/boot2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/boot2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/boot3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/boot3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>


    </div>
<div className="col-md-6" >

    <div>
    <center><div className="gallerytitle">PYTHON</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/python.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/python.jpg')} alt=""/>
            </a>
            </center>
            <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/py1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/py1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/py2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/py2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/py3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/py3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>

    </div>
<div className="col-md-6" >

    <div>
    <center><div className="gallerytitle">TECHNICAL PAPER PRESENTATION</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/tpp.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/tpp.jpg')} alt=""/>
            </a>
            </center>
            <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/tpp1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/tpp1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/tpp2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/tpp2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/tpp3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/workshop/tpp3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>  

    </div>
<div className="col-md-6">

    <div>
    <center><div className="gallerytitle">PLACEMENT TALKS</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/placement.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/placement.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>  

    </div>
<div className="col-md-6" >

    <div>
    <center><div className="gallerytitle">LARAVEL</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/workshop/laravel.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/workshop/laravel.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>  
</div>

<div className="row">

<div className="col-md-6">
    <div>
    <center><div className="gallerytitle">THE AMAZING RACE</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/collab/race_winners.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/collab/race_winners.jpg')} alt=""/>
            </a>
        </center>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/collab/race_winners.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/collab/race_winners.jpg')} alt=""/>
            </a>
           
        </center>
    </section>
    </div>    

</div>
<div className="col-md-6">

    <div>
    <center><div className="gallerytitle">MACHINE LEARNING</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/collab/ml.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/collab/ml.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>    

</div>
<div className="col-md-6">
    <div>
    <center><div className="gallerytitle">SHERLOCK & WATSON</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/collab/Sherlock_winners.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/collab/Sherlock_winners.jpg')} alt=""/>
            </a>
           
        </center>
    </section>
    </div>    
</div>
<div className="col-md-6">

    <div>
    <center><div className="gallerytitle">CODE KNIGHTS</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/collab/ck_winners.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/collab/ck_winners.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>    
    </div>
</div>

<div>
<div className="col-md-6">
    <div>
    <center><div className="gallerytitle">CRIC-O-MANIA</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/fun/crico_main.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/fun/crico_main.jpg')} alt=""/>
            </a>
            </center>
            <center>
            <a className="example-image-link" href={require('../../../Resources/images/fun/crico_winners.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/fun/crico_winners.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/fun/crico1.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/fun/crico1.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/fun/crico2.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/fun/crico2.jpg')} alt=""/>
            </a>
            <a className="example-image-link" href={require('../../../Resources/images/fun/crico3.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage} className="example-image" src={require('../../../Resources/images/fun/crico3.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>   

</div>
<div className="col-md-6">

     <div>
     <center><div className="gallerytitle">LAN GAMING</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/fun/lan_main.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/fun/lan_main.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>   

    </div>
<div className="col-md-6">

     <div>
     <center><div className="gallerytitle">HIDDEN CIPHER</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/fun/hc_main.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/fun/hc_main.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>   

    </div>
<div className="col-md-6">
     <div>
     <center><div className="gallerytitle">CITYSCAPE</div></center>
    <section style={container}>
        <center>
            <a className="example-image-link" href={require('../../../Resources/images/fun/cityscape_main.jpg')} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img style={styleImage1} className="example-image" src={require('../../../Resources/images/fun/cityscape_main.jpg')} alt=""/>
            </a>
        </center>
    </section>
    </div>   
    </div>
</div>

   </div>       
</div>
    );
};

export default SecondPage;
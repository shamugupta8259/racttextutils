import React, { useState } from "react"


export default function About() {
    const [myStyle,setmyStyle]=useState({
        backgroundColor:"white",
        color: "black",
        border:"1px black"
    });
    const [btn,setmybtn]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color==="black"){
            setmyStyle({
                border:"1px solid white",
                color:"white",
                backgroundColor:"black"
            })
            
            setmybtn("Enable White Mode")
        }
        else{
            setmyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setmybtn("Enable Dark Mode")
        }
    }
    return (
            <div className="container" style={myStyle}>
        <h1>About us</h1>
                <div id="accordion">
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse"  style={myStyle}data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"  style={myStyle}data-parent="#accordion">
                            <div className="card-body"  style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse"  style={myStyle}data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body"  style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={myStyle}>
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse"  style={myStyle}data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body"  style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btn}</button>
                 </div>
            </div>
          
      
    )
}


// Include React
import React, { Component }from "react";


class Skill extends Component {
    render(){
        return(
            <div className="row">				
                 <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Web Design</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={style.progress1}><span>55%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Web Development</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100" style={style.progress2}><span>79%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>PSD To Html</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={style.progress3}><span>80%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>UI/UX Design</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={style.progress4}><span>95%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>HTML5/CSS3</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={style.progress5}><span>70%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Wordpress</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={style.progress6}><span>65%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Web Design</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={style.progress7}><span>55%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Web Development</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100" style={style.progress8}><span>79%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    progress1: {
        width: "50%"
    },
    progress2: {
        width: "79%"
    },
    progress3: {
        width: "80%"
    },

    progress4: {
        width: "95%"
    },

    progress5: {
        width: "70%"
    },

    progress6: {
        width: "65%"
    },

    progress7: {
        width: "55%"
    },

    progress8: {
        width: "79%"
    }

}
export default Skill;
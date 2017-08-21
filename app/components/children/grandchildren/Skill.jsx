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
                            <h4>UX/UI Design | Responsive Design</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={style.progress1}><span>90%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Web Development | SEO | Google Adwords</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100" style={style.progress2}><span>95%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>HTML5 | CSS3 | JavaScript(ES6) | JQuery</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={style.progress3}><span>98%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>MERN Stack (Mongo | ExpressJs | ReactJs | NodeJs)</h4>
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
                            <h4>Bootstrap | Materialize </h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={style.progress5}><span>97%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>MySQL | Firebase (Real-Time Database)</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={style.progress6}><span>91%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>MVC | ORM</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={style.progress7}><span>90%</span></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {/* Single Skill  */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Restful API | JSON | XML | AJAX</h4>
                        </div>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100" style={style.progress8}><span>99%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    progress1: {
        width: "90%"
    },
    progress2: {
        width: "95%"
    },
    progress3: {
        width: "98%"
    },

    progress4: {
        width: "95%"
    },

    progress5: {
        width: "97%"
    },

    progress6: {
        width: "91%"
    },

    progress7: {
        width: "90%"
    },

    progress8: {
        width: "99%"
    }

}
export default Skill;
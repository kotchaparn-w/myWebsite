// Include React
import React, { Component } from "react";

//Import high level mainComponent
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {

    constructor(props){
        super(props)
        this.loadScript = this.loadScript.bind(this);
    }

    componentDidMount(){
        this.loadScript();
    }

    componentDidUpdate(){
        this.loadScript();
    }
    render(){  
            return(
                <div id="main-div">
                    <Header location={this.props.location.pathname}/>
                        {this.props.children}
                    <Footer location={this.props.location.pathname}/>
                </div>
            )    
    } 

    loadScript(){
        // 	Mobile Menu
        $('.menu').slicknav({
			prependTo:".mobile-nav",
        });
        
        // Sticky JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 1) {
                $('#header').addClass("sticky");
            } else {
                $('#header').removeClass("sticky");
            }
        });

        // 	Social JS
        $('.social-icon li a').on( "click", function(){
            $('.social').toggleClass('active');
        });

        //Extra JS
        $('.arrow a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
    }
}

export default Main;
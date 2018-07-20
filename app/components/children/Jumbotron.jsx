// Include React
import React, { Component } from "react";
import Particles from 'react-particles-js';

// Create Jumbotron class
class Jumbotron extends Component {
	constructor(){
		super()
		this.animateScript = this.animateScript.bind(this);
	}

	componentDidMount(){
		this.animateScript();
	}

    render() {
			return(
					<section id="personal-area" className="particle">
						{/*  Start Personal Area */}
						{/* <div id="particles-js"></div>  */}
						<Particles params={particles}/>
						<div className="table">  
							<div className="table-cell">
								<div className="personal-main">
									<div className="personal-single">
										<div className="container">
											<div className="row">
												<div className="col-md-12 col-sm-12 col-xs-12">
													{/* Personal Text */}
													<div className="personal-text">
														<div className="my-info">
															<h1>Kotchaparn <span id="lastname">Wongkor</span></h1>
															<h2 className="cd-headline clip is-full-width">
															A Professional &nbsp;
																<span className="cd-words-wrapper">
																	<b className="is-visible">UI/UX DESIGNER</b>
																	<b>Full-Stack Web Developer</b>
																	<b>Marketing Analyst</b>
																</span>
															</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*Arrow  */}
								<div className="arrow">
									<a href="#about-me"><i className="f a fa-angle-down"></i></a>
								</div>
							</div>
						</div>
					</section>
			);
	}

	// animate config
	animateScript(){
		//set animation timing
		var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;

		initHeadline();


		function initHeadline() {
			//insert <i> element for each letter of a changing word
			singleLetters($('.cd-headline.letters').find('b'));
			//initialise headline animation
			animateHeadline($('.cd-headline'));
		}

		function singleLetters($words) {
			$words.each(function(){
				var word = $(this),
					letters = word.text().split(''),
					selected = word.hasClass('is-visible');
				for (i in letters) {
					if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
				}
				var newLetters = letters.join('');
				word.html(newLetters).css('opacity', 1);
			});
		}

		function animateHeadline($headlines) {
			var duration = animationDelay;
			$headlines.each(function(){
				var headline = $(this);
				
				if(headline.hasClass('loading-bar')) {
					duration = barAnimationDelay;
					setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
				} else if (headline.hasClass('clip')){
					var spanWrapper = headline.find('.cd-words-wrapper'),
						newWidth = spanWrapper.width() + 10
					spanWrapper.css('width', newWidth);
				} else if (!headline.hasClass('type') ) {
					//assign to .cd-words-wrapper the width of its longest word
					var words = headline.find('.cd-words-wrapper b'),
						width = 0;
					words.each(function(){
						var wordWidth = $(this).width();
						if (wordWidth > width) width = wordWidth;
					});
					headline.find('.cd-words-wrapper').css('width', width);
				};

				//trigger animation
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);
			
			if($word.parents('.cd-headline').hasClass('type')) {
				var parentSpan = $word.parent('.cd-words-wrapper');
				parentSpan.addClass('selected').removeClass('waiting');	
				setTimeout(function(){ 
					parentSpan.removeClass('selected'); 
					$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
				}, selectionDuration);
				setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
			
			} else if($word.parents('.cd-headline').hasClass('letters')) {
				var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
				hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
				showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
					switchWord($word, nextWord);
					showWord(nextWord);
				});

			} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
				$word.parents('.cd-words-wrapper').removeClass('is-loading');
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
				setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

			} else {
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, animationDelay);
			}
		}

		function showWord($word, $duration) {
			if($word.parents('.cd-headline').hasClass('type')) {
				showLetter($word.find('i').eq(0), $word, false, $duration);
				$word.addClass('is-visible').removeClass('is-hidden');

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
					setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
				});
			}
		}

		function hideLetter($letter, $word, $bool, $duration) {
			$letter.removeClass('in').addClass('out');
			
			if(!$letter.is(':last-child')) {
				setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
			} else if($bool) { 
				setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
			}

			if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
				var nextWord = takeNext($word);
				switchWord($word, nextWord);
			} 
		}

		function showLetter($letter, $word, $bool, $duration) {
			$letter.addClass('in').removeClass('out');
			
			if(!$letter.is(':last-child')) { 
				setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
			} else { 
				if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
				if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
			}
		}

		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}

		function takePrev($word) {
			return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}
			}
}

// particles config
const particles ={
	"particles": {
	"number": {
	"value": 20,
	"density": {
	"enable": true,
	"value_area": 800
	}
	},
	"color": {
	"value": "#ffffff"
	},
	"shape": {
	"type": "star",
	"stroke": {
	"width": 0,
	"color": "#000000"
	},
	"polygon": {
	"nb_sides": 5
	},
	"image": {
	"src": "img/github.svg",
	"width": 100,
	"height": 100
	}
	},
	"opacity": {
	"value": 0.5,
	"random": false,
	"anim": {
	"enable": false,
	"speed": 1,
	"opacity_min": 0.1,
	"sync": false
	}
	},
	"size": {
	"value": 3.9458004845442964,
	"random": true,
	"anim": {
	"enable": false,
	"speed": 40,
	"size_min": 0.1,
	"sync": false
	}
	},
	"line_linked": {
	"enable": true,
	"distance": 150,
	"color": "#ffffff",
	"opacity": 0.4,
	"width": 1
	},
	"move": {
	"enable": true,
	"speed": 6,
	"direction": "none",
	"random": false,
	"straight": false,
	"out_mode": "bounce",
	"bounce": false,
	"attract": {
	"enable": false,
	"rotateX": 600,
	"rotateY": 1200
	}
	}
	},
	"interactivity": {
	"detect_on": "canvas",
	"events": {
	"onhover": {
	"enable": true,
	"mode": "repulse"
	},
	"onclick": {
	"enable": true,
	"mode": "push"
	},
	"resize": true
	},
	"modes": {
	"grab": {
	"distance": 400,
	"line_linked": {
	"opacity": 1
	}
	},
	"bubble": {
	"distance": 400,
	"size": 40,
	"duration": 2,
	"opacity": 8,
	"speed": 3
	},
	"repulse": {
	"distance": 200,
	"duration": 0.4
	},
	"push": {
	"particles_nb": 4
	},
	"remove": {
	"particles_nb": 2
	}
	}
	},
	"retina_detect": true
			}
// Export Jumbotron
export default Jumbotron;
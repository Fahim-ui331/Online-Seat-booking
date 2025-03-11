import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import MayLikeItem from './MayLikeItem';

class ItemsCarousel extends React.Component {

	render() {
    	return (
	      <OwlCarousel nav loop {...options} className="owl-theme owl-carousel-five offers-interested-carousel">
	         <div className="item">
	         	<MayLikeItem 
	         		title='Putine'
	         		price='2500tk'
			   		image='img/list/1.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
	         		title='Cashew nut salad'
	         		price='2600tk'
			   		image='img/list/2.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
	         		title='Chicken ball'
	         		price='1200tk'
			   		image='img/list/3.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
	         		title='Soup'
	         		price='3500tk'
			   		image='img/list/4.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
	         		title='Combo Package'
	         		price='3500tk'
			   		image='img/list/5.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	         <div className="item">
	         	<MayLikeItem 
	         		title='Family Combo'
	         		price='$760'
			   		image='img/list/6.png'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   	/>
	         </div>
	      </OwlCarousel>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    lazyLoad: true,
    pagination: "false",
    loop: true,
    dots: false,
    autoPlay: 2000,
    nav: true,
    navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
}

export default ItemsCarousel;
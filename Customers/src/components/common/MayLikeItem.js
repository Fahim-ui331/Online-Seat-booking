import React from 'react';
import PropTypes from 'prop-types'; 
import { Image } from 'react-bootstrap';

class MayLikeItem extends React.Component {
	render() {
    	return (
    		<div className={"position-relative " + this.props.boxClass}>
                <Image src={this.props.image} className={this.props.imageClass} alt={this.props.imageAlt} />
                {this.props.title?
	               <h6>{this.props.title}</h6>
	               :""
	            }
	            {this.props.price?
	              <small>{this.props.price}</small>
	               :""
	            }
            </div>
		);
	}
}

MayLikeItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  imageAlt: PropTypes.string,
  boxClass: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

MayLikeItem.defaultProps = {
  imageAlt: '',
  image: '',
  imageClass: '',
  boxClass: 'mall-category-item',
  title: '',
  price: '',
};

export default MayLikeItem;
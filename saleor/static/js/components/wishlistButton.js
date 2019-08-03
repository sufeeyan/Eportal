import $ from 'jquery';
import { observer } from 'mobx-react';
import React, { Component } from 'react';


import PropTypes from 'prop-types'

@observer
export default class WishlistButton extends Component {
  static propTypes = {
    product: PropTypes.string.isRequired,
    variantStore: PropTypes.object.isRequired,
    wishlistUrl: PropTypes.string,
    variantSelector: PropTypes.object
  };

  handleAddToWishlist = (event) => {
    event.preventDefault();
    const { variantStore, product, variantSelector } = this.props;
    let selectedAttributes = JSON.stringify(variantStore.selection);
    let variantPk = variantSelector ? variantSelector.value : null;
    $.ajax({
      url: this.props.wishlistUrl,
      method: 'post',
      data: {
        product: product,
        variant: variantPk,
        attributes: selectedAttributes
      },
      success: (response) => {
        const { next } = response;
        if (next) {
          window.location = next;
        } else {
          location.reload();
        }
      },
      error: (response) => {
        const { error } = response.responseJSON;
        if (error) {
          this.setState({ errors: response.responseJSON.error });
        }
      }
    });
  };

  render() {
    const { wishlistUrl } = this.props;
    if (wishlistUrl) {
      return (<div>
        <a
          href="#"
          onClick={this.handleAddToWishlist}>
          {pgettext('wishlist', 'Add to wishlist')}
        </a>
      </div>);
    }
    return (
      <div></div>
    );
  }
}

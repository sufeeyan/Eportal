import 'jquery';
import 'jquery.cookie';
import 'bootstrap';

import '../scss/storefront.scss';

import './components/address-form';
import './components/checkout';
import './components/footer';
import './components/language-picker';
import './components/misc';
import './components/navbar';
import './components/password-input';
import './components/product-filters';
import './components/sorter';
import './components/styleguide';
import './components/variant-picker';
import WishlistButton from './components/wishlistButton';

import ReactDOM from 'react-dom';
import React from 'react';
import variantPickerStore from './stores/variantPicker';


const addToWishlistContainer = document.getElementById('add-to-wishlist');
const variantSelector = document.getElementById('id_variant');


if (addToWishlistContainer) {
  ReactDOM.render(
    <WishlistButton
      product={addToWishlistContainer.dataset.product}
      variantStore={variantPickerStore}
      wishlistUrl={addToWishlistContainer.dataset.wishlisturl}
      variantSelector={variantSelector}
    />,
    addToWishlistContainer
  );
}


$('.modal-trigger-custom').on('click', function (e) {
  let that = this;
  $.ajax({
    url: $(this).data('href'),
    method: 'get',
    success: function (response) {
      var $modal = $($(that).attr('href'));
      $modal.html(response);
      $modal.modal();
    }
  });

  e.preventDefault();
});



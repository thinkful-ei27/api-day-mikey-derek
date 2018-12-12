'use strict';
/* global $, store, shoppingList */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mikey-derek';

  const errorCallback = function(error) {
    store.errorMessage(error.responseJSON.message);
    shoppingList.render();
  };

  const getItems = function(callback){
    $.getJSON(BASE_URL +'/items', callback);
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      name,
    });

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: api.errorCallback
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: api.errorCallback
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
      error: api.errorCallback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
    errorCallback
  };
}());
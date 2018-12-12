'use strict';
/* global $ */

const api = (function() {
  console.log('api function ran');
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mikey-derek';
  const getItems = function(callback){
    $.getJSON(BASE_URL +'/items', callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,
    });

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
    console.log('update item api ran');
  };

  return {
    getItems,
    createItem,
    updateItem
  };
}());
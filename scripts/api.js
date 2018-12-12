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
  

  };

  return {
    getItems,
    createItem,

  };
}());
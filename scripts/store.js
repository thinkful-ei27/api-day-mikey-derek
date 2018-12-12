'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData) {
    const oldData = this.findById(id);
    Object.assign(oldData, newData);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };
  
  const errorMessage = function(error){
    this.error = error;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error: null,

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    errorMessage,
  };
  
}());

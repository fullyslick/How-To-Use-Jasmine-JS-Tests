// Address class constructor.
function AddressBook() {
  this.contact = [];
}

// Method that adds some object to the contact property of the address book.
AddressBook.prototype.addContact = function(inputObject) {
  this.contact.push(inputObject);
}

// Method that returns the value of the contact property of the address book.
AddressBook.prototype.getContact = function(index){
  return this.contact[index];
}

// Method that deletes a contact from the array above. It returns the value of the deleted element.
AddressBook.prototype.deleteContact = function(index){
  this.contact.splice(index, 1);
}

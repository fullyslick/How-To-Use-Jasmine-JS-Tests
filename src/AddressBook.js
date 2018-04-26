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

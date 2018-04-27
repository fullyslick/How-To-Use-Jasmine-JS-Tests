// Address class constructor.
function AddressBook() {
  this.contact = [];
  this.initialComplete = false;
}

// Method that adds some object to the contact property of the address book.
AddressBook.prototype.addContact = function(inputObject) {
  this.contact.push(inputObject);
}

// Method that returns the value of the contact property of the address book.
AddressBook.prototype.getContact = function(index) {
  return this.contact[index];
}

// Method that deletes a contact from the array above. It returns the value of the deleted element.
AddressBook.prototype.deleteContact = function(index) {
  this.contact.splice(index, 1);
}


// Method that simulates async call to some API on server.
AddressBook.prototype.getInitialContacts = function(callBack) {
  // Variable that will refer to newly constructed object;
  var self = this;

  // This simulates callback to a server API.
  setTimeout(function() {

    // Notify AddressBook object that calling server was successful, by changing one of its initialComplete = true
    self.initialComplete = true;

    // If there is any callback returned, return the callBack :)
    if (callBack) {

      return callBack();
    }
  }, 3);
}

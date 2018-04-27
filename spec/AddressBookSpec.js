// Group set of tests using 'describe'.
// 'String with the group of tests' , function - containing the tests.
describe('Address Book', function() {
  // Global variables accessed by all tests below.
  var addressBook;
  var thisContact;

  // Before each test, you can perform some tasks.
  // For example:
  // Place here variable assignments or functions that will be accessed by all test.
  beforeEach(function() {
    // Create new address book object and assign it to a global variable
    addressBook = new AddressBook();
    // Create new contact object and assign it to a global variable
    thisContact = new Contact();
  });

  // Define the test.
  // Type a string with the purpose of test.
  // Type a function that will be executed to run the test.
  it('should be able to add a contact', function() {

    // Add the thisContact object to the addressBook object
    // Should define 'addContact' method in the prototype of AddressBook constructor
    addressBook.addContact(thisContact);
    // TEST if 'thisContact' was added to 'addressBook'
    // Should define 'getContact' method in the prototype of AddressBook constructor.
    // expect - (the return of a function that we are testing).method defined by Jasmine, that will return true or false. In this case check if the return value is something - toBe(something).
    expect(addressBook.getContact(0)).toBe(thisContact);
    // OR addressBook.getContact(0) === thisContact
  });

  // Define the test.
  // Type a string with the purpose of test.
  // Type a function that will be executed to run the test.
  it('should be able to delete a contact', function() {
    // Add the thisContact object to the addressBook object using defined method in AddressBook prototype
    addressBook.addContact(thisContact);
    // Should define 'deleteContact' method in the prototype of AddressBook constructor.
    addressBook.deleteContact(0);
    // expect - (the return of a function that we are testing).method defined by Jasmine, that will return true or false. In this case check if the return value is something - toBe(something).
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

// New set of test for testing async calls to server API.
describe('Async Address Book', function() {
  // Create new object from the constructor class (check AddressBook.js).
  var addressBook = new AddressBook();

  // !!! To test async calls, you should wait for the server to respond first,
  // and then run the test.
  // So before each test, run the simulation to server call,
  // and after the simulation got a response from server close the beforeEach function.
  beforeEach(function(done){
    addressBook.getInitialContacts(function(){
      // This is the returned promise that will close the async function.
      done();
    });
  });

  // Run the Test after there was a server response. Using done notfier.
  it('should grab initial contacts', function(done) {

    // Call the prototype method 'getInitialContacts' of addressBook.
    addressBook.getInitialContacts();

    // Check if there is returned result from the server.
    expect(addressBook.initialComplete).toBe(true);

    done();
  })
});

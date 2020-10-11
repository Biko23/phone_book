var Contact = /** @class */ (function () {
    function Contact(Name, phone, email) {
    }
    return Contact;
}());
var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = [];
    }
    PhoneBook.prototype.addContact = function () {
        var contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
        this.contacts.push(contact1);
    };
    PhoneBook.prototype.listContacts = function () {
        console.log(this.contacts);
    };
    PhoneBook.prototype.editContact = function () {
    };
    return PhoneBook;
}());
var biko = new PhoneBook();
biko.addContact();
biko.listContacts();

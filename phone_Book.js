var Contact = /** @class */ (function () {
    function Contact(Name, phone, email) {
    }
    return Contact;
}());
var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = [];
    }
    PhoneBook.prototype.addContact = function (contact) {
        // let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
        this.contacts.push(contact);
    };
    PhoneBook.prototype.listContacts = function () {
        console.log(this.contacts);
    };
    PhoneBook.prototype.editContact = function () {
    };
    return PhoneBook;
}());
var biko = new PhoneBook();
biko.addContact({ Name: "Biko Jeremy Biteete", phone: "+256 789940343", email: "bikojeremy@gmail.com" });
biko.listContacts();

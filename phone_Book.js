var fs = require('fs');
// const readLine = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
var Contact = /** @class */ (function () {
    function Contact(Name, phone, email) {
        this.Name = Name;
        this.phone = phone;
        this.email = email;
    }
    return Contact;
}());
var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = [];
    }
    PhoneBook.prototype.addContact = function (contact) {
        // let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
        // rl.question("Phone: ", (phone1) => {
        //     return phone1;
        // })
        this.contacts.push(contact);
    };
    PhoneBook.prototype.listContacts = function () {
        console.log(this.contacts);
    };
    PhoneBook.prototype.editContact = function () {
    };
    PhoneBook.prototype.deleteContact = function () {
    };
    return PhoneBook;
}());
var biko = new PhoneBook();
biko.addContact({ Name: "Biko Jeremy Biteete", phone: "+256 789940343", email: "bikojeremy@gmail.com" });
biko.listContacts();
// let contact1 = "This phone book is proving a problem."
fs.writeFile('phoneBook.txt', Contact, function (err) {
    if (err)
        throw console.error();
});

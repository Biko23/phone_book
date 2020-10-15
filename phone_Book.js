"use strict";
exports.__esModule = true;
var fs = require('fs');
// const readLine = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
var readLine = require("readline");
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question('Name: ', (nameAnswer) => {
//         let Name = nameAnswer;
// console.log(Name);
// rl.question('Phone: ', (phoneAnswer) => {
//     let Phone = phoneAnswer;
// console.log(Phone);
// rl.close();
// });
// switch(answer.toLowerCase()) {
//   case 'y':
//     console.log('Super!');
//     break;
//   case 'n':
//     console.log('Sorry! :(');
//     break;
//   default:
//     console.log('Invalid answer!');
// }
// rl.close();
//   });
var Contact = /** @class */ (function () {
    function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
        // console.log(this);
    }
    return Contact;
}());
var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = [];
    }
    PhoneBook.prototype.addContact = function (contact) {
        var _this = this;
        fs.readFile("phoneBook.json", function (err, infor) {
            if (err)
                throw console.error();
            _this.contacts = JSON.parse(infor);
            _this.contacts.push(contact);
            console.log(_this.contacts);
            infor = JSON.stringify(_this.contacts);
            fs.appendFile("phoneBook.json", infor, function (err) {
                if (err)
                    throw console.error();
            });
        });
        return this.contacts;
        // console.log(".......")
    };
    return PhoneBook;
}());
rl.question('Name: ', function (answer) {
    rl.question('Phone: ', function (tel) {
        var b = new Contact(answer, tel);
        var a = new PhoneBook();
        a.addContact(b);
        // console.log(a);
        rl.close();
    });
});
//et c = new Contact("Dex", "54698");
//let a = new PhoneBook();
//a.addContact(b);
// a.addContact(c);
// class Contact {
//     Name : String;
//     phone : String;
//     email : String;
//     constructor (Name: String, phone: String, email: String) {
//         this.Name = Name;
//         this.phone = phone;
//         this.email = email;
//     }
// }
// class PhoneBook {
//     // contact: Contact;
//     contacts = [];
//     contact1 = new Contact("Biko Jeremy Biteete", "+256 789 940343", "bikojeremy@gmail.com")
//     addContact() {
//         // let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
//         // rl.question("Phone: ", (phone1) => {
//         //     return phone1;
//         // })
//         //contact = 
//         this.contacts.push(this.contact1);
//         console.log(this.contacts);
//         for(let i = 0; i <= this.contacts.length; i++) {
//             fs.appendFile('phoneBook.txt', this.contacts[i].Name, (err) => {
//                 if (err) throw console.error();
//             });
//         }
//     }
//     listContacts() {
//         console.log(this.contacts);
//     }
//     editContact() {
//     }
//     deleteContact() {
//     }
// }
// PhoneBook();
// const biko = new PhoneBook();
// biko.addContact();
// biko.listContacts();
// let contact1 = "This phone book is proving a problem."

"use strict";
exports.__esModule = true;
var fs = require('fs');
var readLine = require("readline");
// import inquirer from "inquirer";
var inquirer = require('inquirer');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
            console.log(infor);
            fs.writeFile("phoneBook.json", infor, function (err) {
                if (err)
                    throw console.error();
            });
        });
        return this.contacts;
        // console.log(".......")
    };
    PhoneBook.prototype.deleteContact = function (contact) {
        var _this = this;
        fs.readFile("phoneBook.json", function (err, infor) {
            if (err)
                throw console.error();
            _this.contacts = JSON.parse(infor);
            var xd = _this.contacts.indexOf(contact);
            console.log(xd);
            // let hm = this.contacts.splice(this.contacts.indexOf(contact), 1);
            // // console.log(hm);
            // console.log(this.contacts)
            // infor = JSON.stringify(this.contacts);
            // fs.writeFile("phoneBook.json", infor, (err) =>{
            //     if(err) throw console.error();
            //     })
        });
    };
    return PhoneBook;
}());
inquirer.prompt([{
        name: "menu",
        type: "list",
        message: "Menu: ",
        choices: ["Add Contacts", "Search Contacts", "Delete contacts", "Update Contacts"]
    },
]).then(function (answer) {
    if (answer.menu == "Add Contacts") {
        inquirer.prompt([{
                name: "name",
                type: "input",
                masseage: "Name: "
            },
        ]).then(function (answer) {
            var Name = answer.name;
            inquirer.prompt([{
                    name: "phone",
                    type: "input",
                    message: "Phone: "
                },
            ]).then(function (answer) {
                var Phone = answer.phone;
                var b = new Contact(Name, Phone);
                var a = new PhoneBook();
                a.addContact(b);
            });
        });
        // rl.question('Name: ', (answer)=>{
        //     rl.question('Phone: ', (tel)=>{
        //         let b = new Contact(answer, tel);
        //         let a = new PhoneBook();
        //         a.addContact(b);
        //         // console.log(a);
        //         rl.close();
        //     })
        // }) 
    }
    else {
        console.log("We can only add contacts right now.....");
    }
});

const fs = require ('fs');

import * as readLine from "readline";

// import inquirer from "inquirer";
const inquirer = require('inquirer');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Contact {
    
    name: String;
    phone: String;
    constructor(name: String, phone: String) {
            
        this.name = name;
        this.phone = phone;

        // console.log(this);
    }
}

class PhoneBook {
    
    contacts = [];

    addContact(contact : Contact) {
        fs.readFile("phoneBook.json", (err, infor)=>{
            if(err) throw console.error();

            this.contacts = JSON.parse(infor);

            this.contacts.push(contact);

            console.log(this.contacts);

            infor = JSON.stringify(this.contacts);

            console.log(infor)

            fs.writeFile("phoneBook.json", infor, (err) =>{
                if(err) throw console.error();
                })
            
        })
        return this.contacts;
       // console.log(".......")
    }
    searchContacts(search){
        fs.readFile("phoneBook.json", (err, infor) =>{
            if(err) throw console.error();

            this.contacts = JSON.parse(infor);
            let index = this.contacts.findIndex(c => c.name === search);
            console.log(this.contacts[index]);
            
        })
    }

    deleteContact(contact: Contact) {
        fs.readFile("phoneBook.json", (err, infor)=>{
            if(err) throw console.error();

            this.contacts = JSON.parse(infor);



            let xd = this.contacts.indexOf(contact)
            console.log(xd)

            // let hm = this.contacts.splice(this.contacts.indexOf(contact), 1);

            // // console.log(hm);
            // console.log(this.contacts)

            // infor = JSON.stringify(this.contacts);

            // fs.writeFile("phoneBook.json", infor, (err) =>{
            //     if(err) throw console.error();
            //     })
            
        })

    }
}

inquirer.prompt([{
    name: "menu",
    type: "list",
    message: "Menu: ",
    choices: ["Add Contacts", "Search Contacts", "Delete Contacts", "Update Contacts"],

},
]).then((answer) => {
    if (answer.menu == "Add Contacts"){
        inquirer.prompt([{
            name: "name",
            type: "input",
            masseage: "Name: ",
        },
        ]).then((answer) => {
            var Name = answer.name;
            inquirer.prompt([{
                name: "phone",
                type: "input",
                message: "Phone: ",
            },
            ]).then((answer) => {
                var Phone = answer.phone;
                let b = new Contact(Name, Phone);
                let a = new PhoneBook();
                a.addContact(b);
            })
        })
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
    else if(answer.menu == "Search Contacts"){
        console.log("Lets get started with the search...")
        let a = new PhoneBook();
        inquirer.prompt([{
            name: "Search",
            type: "input",
            message: "Search by name: ",
        },
        ]).then((answer) => {
            let searchName = answer.Search;
            a.searchContacts(searchName);
        })
        // a.searchContacts("Igi");
    }
    else if(answer.menu == "Delete Contacts"){
        console.log("Lets get it on with Deleting.....")
    }
    else if(answer.menu == "Update Contacts"){
        console.log("Which contact would you like to udate....")
    }
    else{
        console.log("Dude what would you like to do?")
    }
});


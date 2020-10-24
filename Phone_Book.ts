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
    choices: ["Add Contacts", "Search Contacts", "Delete contacts", "Update Contacts"],

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

    }else{
        console.log("We can only add contacts right now.....")
    }
});


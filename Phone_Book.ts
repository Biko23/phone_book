const fs = require ('fs');

import * as readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Contact{
    
    name: String;
    phone: String;
    constructor(name: String, phone: String){
            
        this.name = name;
        this.phone = phone;

        // console.log(this);
    }
}

class PhoneBook{
    
    contacts = [];

    addContact(contact : Contact){
        fs.readFile("phoneBook.json", (err, infor)=>{
            if(err) throw console.error();

            this.contacts = JSON.parse(infor);

            this.contacts.push(contact);

            console.log(this.contacts);

            infor = JSON.stringify(this.contacts);

            fs.writeFile("phoneBook.json", infor, (err) =>{
                if(err) throw console.error();
                })
            
        })
        return this.contacts;
       // console.log(".......")
    }
}

rl.question('Name: ', (answer)=>{
    rl.question('Phone: ', (tel)=>{

        let b = new Contact(answer, tel);
        let a = new PhoneBook();
        a.addContact(b);
        // console.log(a);

        rl.close();
    })
}) 

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



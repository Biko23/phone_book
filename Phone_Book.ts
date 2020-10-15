const fs = require ('fs');
// const readLine = require('readline');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

class Contact {
    Name : String;

    phone : String;

    email : String;

    constructor (Name: String, phone: String, email: String){
        this.Name = Name;
        this.phone = phone;
        this.email = email;

    }
}

class PhoneBook {
    contact: Contact;
    contacts = [];

    addContact(contact: Contact){
        // let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
        // rl.question("Phone: ", (phone1) => {
        //     return phone1;
        // })

        contact = 

        this.contacts.push(contact);


    }

    listContacts(){
        console.log(this.contacts);

    }

    editContact(){

    }

    deleteContact(){
        
    }

    
}

const biko = new PhoneBook();
biko.addContact({Name: "Biko Jeremy Biteete", phone: "+256 789940343", email: "bikojeremy@gmail.com"});
biko.listContacts();
// let contact1 = "This phone book is proving a problem."
fs.writeFile('phoneBook.txt', Contact, (err) => {
    if (err) throw console.error();
    
});



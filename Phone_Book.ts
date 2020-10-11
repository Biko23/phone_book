class Contact {
    Name : String;

    phone : String;

    email : String;
    constructor (Name: String, phone: String, email: String){

    }
}

class PhoneBook {
    contact: Contact;
    contacts = [];

    addContact(){
        let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
        this.contacts.push(contact1);


    }

    listContacts(){
        console.log(this.contacts);

    }

    editContact(){

    }

    
}

const biko = new PhoneBook();
biko.addContact();
biko.listContacts();


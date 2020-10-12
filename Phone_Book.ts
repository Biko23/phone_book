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

    addContact(contact: Contact){
        // let contact1 = new Contact("Biko Jeremy Biteete", "+256 789940343", "bikojeremy@gmail.com");
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


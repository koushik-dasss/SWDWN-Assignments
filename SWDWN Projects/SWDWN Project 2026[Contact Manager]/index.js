const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Person {
  constructor(name, phone, email) {
    this.name  = name;
    this.phone = phone;
    this.email = email;
    this.createdAt = new Date().toISOString(); 
  }
  toCSV() {
    return `${this.name},${this.phone},${this.email},${this.createdAt}`;
  }
}
const fileName = 'contacts.csv';
if (!fs.existsSync(fileName)) {
  fs.writeFileSync(fileName, 'NAME,PHONE,EMAIL,CREATED_AT\n');
}
rl.question('Enter Name: ', (name) => {
  if (!/^[A-Za-z\s'-]+$/.test(name.trim())) {
    console.log('\nInvalid Name!');
    console.log('─────────────────────────────');
    console.log('Name must only contain letters.');
    console.log('─────────────────────────────');
    rl.close();
    return;
  }
  rl.question('Enter Phone: ', (phone) => {
    if (!/^[0-9]{10}$/.test(phone.trim())) {
      console.log('\nInvalid Phone!');
      console.log('─────────────────────────────');
      console.log('Phone must be exactly 10 digits.');
      console.log('─────────────────────────────');
      rl.close();
      return;
    }
    rl.question('Enter Email: ', (email) => {
      if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim())) {
        console.log('\nInvalid Email!');
        console.log('─────────────────────────────');
        console.log('Email must be a valid @gmail.com address.');
        console.log('─────────────────────────────');
        rl.close();
        return;
      }
      const person = new Person(name.trim(), phone.trim(), email.trim());
      fs.appendFileSync(fileName, person.toCSV() + '\n');
      console.log('\nContact Saved!');
      console.log('─────────────────────────────');
      console.log(`Name      : ${person.name}`);
      console.log(`Phone     : ${person.phone}`);
      console.log(`Email     : ${person.email}`);
      console.log(`Timestamp : ${person.createdAt}`);
      console.log('─────────────────────────────');
      rl.close();
    });
  });
});
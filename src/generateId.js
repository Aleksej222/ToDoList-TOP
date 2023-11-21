// ** Generate random 8 digit number for Id
export default function generateId() {

    let randomNumber = Math.floor(Math.random() * 100000000);

    return randomNumber;
}
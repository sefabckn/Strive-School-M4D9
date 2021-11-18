import { Alert } from "react-bootstrap"

const FormControl = () =>{

    let getName = document.querySelector("#name").getAttribute('name')
    if(getName.length < 2){
        Alert("At least 2 chars please")
    }

    let getSurname = document.querySelector("#surname").getAttribute('surname')
    if(getSurname.length < 3){
        Alert("At least 3 chars please")
    }







}

export default FormControl
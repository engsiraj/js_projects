//Js Element
let name = `JavaScript Projects`
let para = `js apps are build with vanilla js and designed with design source, ui design system.`
document.getElementById("app_name").innerHTML = name;
document.getElementById("app_des").innerHTML = para;
//greetings
const greet = () => {
    let greeting = "Hello World"
    document.getElementById("Greet").innerHTML = greeting;
}
//counter app
let app_name1 = `Counter App`
document.getElementById("first_app_name").innerHTML = app_name1;
let app_des1 = `simple counter app usefull in webapps and commerce applications`
document.getElementById("first_app_des").innerHTML = app_des1;

let i = 0;
let Inc = () => {
        i = i + 1;
    console.log(i)
    document.getElementById("counter").innerHTML = i;
}
let Dec = () => {
            i = i - 1;
    console.log(i)
    document.getElementById("counter").innerHTML = i;
}              

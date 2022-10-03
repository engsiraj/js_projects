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

//review app
let app_name2 = `Review page app`
document.getElementById("sec_app_name").innerHTML = app_name2;
let app_des2 = `Simple Coustomers review section on any website.`
document.getElementById("sec_app_des").innerHTML = app_des2;


let btn = document.getElementById('review_button');
let says = document.getElementById("review");
let person = document.getElementById('person');
let post = document.getElementById('position')

const reviews = [{
        says: `"The best way to find yourself is to lose yourself in the service of others."`,
        person: ` indra Gandhi`,
        post:`CEO`,
    },
    {
        says: `"The best way to find yourself is to lose yourself in the service of others."`,
        person: ` shiz Gandhi`,
        post: `ok`,
    },
    {
        says: `"chil out man whats wrong wid u"`,
        person: ` diviya Gandhi`,
        post: `founder`,
    },
    {
        says: `"yu better stop thinking and start doing some shit out you"`,
        person: ` laksh Gandhi`,
        post: `co`,
    },
];

const Review = () => {
    const random = Math.floor(Math.random() * reviews.length);
    says.innerText = reviews[random].says;
    person.innerText = reviews[random].person;
    post.innerText = reviews[random].post;
}
btn.addEventListener('click', Review);

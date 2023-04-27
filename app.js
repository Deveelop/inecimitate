let accreditedVoters =[
    
    {
        firstname: 'Victor',
        lastname: 'Abuka',
        vin: '123456',
        id: 'a1'
    },
    {
        firstname: 'Benedict',
        lastname: 'Akpa',
        vin: '023456',
        id: 'a2'
    },
    {
        firstname: 'Rashid',
        lastname: 'Musa',
        vin: '103456',
        id: 'a3'
    },
    {
        firstname: 'Joshua',
        lastname: 'Philip',
        vin: '120456',
        id: 'b1'
    },
    {
        firstname: 'Joshua',
        lastname: 'Eze',
        vin: '123056',
        id: 'b2'
    },
    {
        firstname: 'Israel',
        lastname: 'Shaibu',
        vin: '123406',
        id: 'b3'
    },
    {
        firstname: 'Tom',
        lastname: 'Monji',
        vin: '120050',
        id: 'c1'
    },
    {
        firstname: 'Gideon',
        lastname: 'John',
        vin: '123450',
        id: 'c2'
    },
    {
        firstname: 'Peter',
        lastname: 'Abah',
        vin: '123400',
        id: 'e1'
    },
    {   
        firstname: 'Enemona',
        lastname: 'James',
        vin: '003456',
        id: 'c3'
    }
];

const button = document.querySelector('#button');
const main = document.querySelector('main');
const displayer = document.querySelector('.display');
const increaseAccred = document.querySelector('.number-accredited');
let listAccredited = [];
button.addEventListener('click', (e) => {
 e.preventDefault();
let userName = document.querySelector('.name').value;
let userNameValid = document.querySelector('.name');
let userVin = document.querySelector('.vin').value;
let userVinValid = document.querySelector('.vin');
const found = accreditedVoters.filter(item =>{
return item.lastname === userName || item.vin === userVin
});
if(found.length === 0 || found[0].lastname === listAccredited){
   userNameValid.classList.add('active');
   userVinValid.classList.add('active');
  setTimeout(()=>{ userNameValid.classList.remove('active')|| userVinValid.classList.remove('active')}, 1000)
}
else{
listAccredited.push(found);
main.classList.toggle('active');
displayer.classList.toggle('active');

displayer.innerHTML = `<div class="display-control">
<img id="userImg" src="./userimg.png" alt="voters passport">
<br>
<label>Firstname</label>
<h3>${found[0].firstname}</h3>
<label>Lastname</label>
<h3>${found[0].lastname}</h3>
<label>Voters Identification Number (VIN)</label>
<h3>${found[0].vin}</h3>

<button class="btn" >VERIFY</button>
</div>
`;
}
document.forms[0].reset();
});

let validations = 0;
increaseAccred.innerHTML= `<h3>${validations}</h3>`

document.querySelector('.display').addEventListener('click', (e) =>{
    target = e.target;
   if(target.classList.contains('btn')){
       displayer.classList.toggle('active');   
       main.classList.toggle('active');
    }
    validations++;
    increaseAccred.innerHTML= `<h3>${validations}</h3>` 
});

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
        firstname: 'Usman',
        lastname: 'Joel',
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

const numberAccredited = document.querySelector('.number-accredited');
const button = document.querySelector('#button');
const form = document.querySelector('#form');
const test = document.querySelector('.test');
const confirmbtn = document.querySelector('#confirm');
const main = document.querySelector('main');
const displayer = document.querySelector('.display');
const increaseAccred = document.querySelector('.number-accredited');



button.addEventListener('click', (e) => {
 e.preventDefault();
let userName = document.querySelector('#name').value;
let userVin = document.querySelector('#vin').value;
const found = accreditedVoters.filter(item =>{
    if(userName.trim() === item.lastname || userVin.trim() === item.vin){
        console.log('found');
      return userName||userVin;
    } else{
        console.log('notin');
        return;
    }
    
});

main.classList.toggle('active');
displayer.classList.toggle('active');

displayer.innerHTML = `<div class="display-control">
<img src="./userimg.png" alt="voters passport">
<br>
<label>Firstname:</label>
<h3>${found[0].firstname}</h3>
<label>Lastname:</label>
<h3>${found[0].lastname}</h3>
<label>Voters Identification Number (VIN):</label>
<h3>${found[0].vin}</h3>

<button id="confirm">VERIFY</button>
</div>
`;

document.forms[0].reset();
});
let validations = 0;


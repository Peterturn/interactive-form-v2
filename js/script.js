                        //Global Var

//Selects the T-shirt "Design:" drop down list node and children
const selectTheme = document.getElementById('design');
const sTC = selectTheme.children;

////Selects the T-shirt "Color:" drop down list node and children
const colors = document.getElementById('color');
const cC = colors.children;

//global var for the over all cost of the activities section
const activities = document.querySelector('.activities');
const actCheckboxs = activities.children;
//Sets focus on the name field at the loading of the page
document.getElementById('name').focus();

/*Hides html element at the loading of page but will appear if java script is not working.*/
document.getElementById('other-title').style.display = 'none';


/*removes the select Theme node from the list of options IN the "Design:" list
but only after the mouseover.
*/
selectTheme.addEventListener('mouseover', (e) => {
  if (sTC[0].innerText === 'Select Theme'){
sTC[0].style.display = 'none';
sTC[0].disabled = true;
}});

/*Function creates and option inside the "colors drop down menu" later this option
selected = true and disabled = true forcing the user to select a t-shirt theme before continuing.
 */
function appOpt() {
const options = document.createElement("option");
colors.insertBefore(options, colors[0]);
}
appOpt();

// for I loop that hides all theme options and sets classNames as an optional selection method
for (let i = 1; i < cC.length; i++){
  cC[i].style.display = 'none';
  if(i<4)
  {cC[i].className = 'jsPuns';}
  else{cC[i].className = 'iHeart';}
}

//creates a 'Please select a T-shirt theme' inside the drop down menu.
cC[0].textContent='Please select a T-shirt theme';
cC[0].selected = true;
cC[0].disabled = true;

//based on user selection of Design, the Color Menu's options change.
// CLEAN UP CODE LATER
selectTheme.addEventListener('change', (e) => {
if(e.target.value == "heart js"){
  cC[0].style.display = 'none';
  cC[1].style.display = 'none';
  cC[2].style.display = 'none';
  cC[3].style.display = 'none';
  cC[4].style.display = '';
  cC[5].style.display = '';
  cC[6].style.display = '';
}
//next part of statement
else if (e.target.value == "js puns") {
  cC[0].style.display = 'none';
  cC[1].style.display = '';
  cC[2].style.display = '';
  cC[3].style.display = '';
  cC[4].style.display = 'none';
  cC[5].style.display = 'none';
  cC[6].style.display = 'none';
}
});

//Var for the total cost of all activities.
let totalCost = 0;

/*function appends a dom element at the end of the activities section with the total cost of activities.*/
function costDiv() {
const div = document.createElement("div");
div.className = 'activities';
div.id = 'total';
div.innerText = 'Total Cost: $ ' +totalCost;
activities.appendChild(div);
}
costDiv();


activities.addEventListener('change', (e) => {
  let divInnerHTML = document.getElementById('total');
  let isChecked = e.target.checked;
  const checkBoxes = activities.querySelectorAll('input[type="checkbox"]');
  let dayTime = e.target.getAttribute("data-day-and-time");

  //if statements that updates total cost.
  if (isChecked === true ){
    let dataCost = parseInt(e.target.getAttribute("data-cost"));
    totalCost += dataCost;
    divInnerHTML.innerText = 'Total Cost: $ '+totalCost;}
  else if (isChecked === false ){
    let dataCost = parseInt(e.target.getAttribute("data-cost"));
    totalCost -= dataCost;
    divInnerHTML.innerText = 'Total Cost: $ '+totalCost;}
});

// ^CODE WORKS^ dont Touch!! v Code below v is in progress

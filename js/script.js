//Selects the T-shirt "Design:" drop down list node
const selectTheme = document.getElementById('design');

////Selects the T-shirt "Color:" drop down list node
//////////insert const colors here

//Sets focus on the name field at the loading of the page
document.getElementById('name').focus();

/*Hides html element at the loading of page but will appear if java script is not working.*/
document.getElementById('other-title').style.display = 'none';

//removes the select Theme node from the list of options on the "Design:" list
selectTheme.addEventListener('mouseover', (e) => {
  if (selectTheme.firstElementChild.innerText === 'Select Theme'){
selectTheme.remove(selectTheme.firstElementChild);}
});



const colors = document.getElementById('color');
const cC = colors.children;


function appOpt() {
const options = document.createElement("option");
options.className =  'pleaseSelect';
colors.insertBefore(options, colors[0]);
}
appOpt();
for (let i = 1; i < cC.length; i++){
  cC[i].style.display='none'
}
cC[0].textContent='Please select a T-shirt theme';
cC[0].selected = true;
cC[0].disabled = true;


///Text works to this point -----Dont touch----

// T-Shirt selct options
// for (let i=0; i<colors.length; i++){
// if (i<=3){
//
// }else if (i>=3 && i<=6) {
//
// }
//
// };

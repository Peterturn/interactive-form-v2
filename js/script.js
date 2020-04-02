
//Selects the T-shirt "Design:" drop down list node and children
const selectTheme = document.getElementById('design');
const sTC = selectTheme.children;

////Selects the T-shirt "Color:" drop down list node and children
const colors = document.getElementById('color');
const cC = colors.children;

//Sets focus on the name field at the loading of the page
document.getElementById('name').focus();

/*Hides html element at the loading of page but will appear if java script is not working.*/
document.getElementById('other-title').style.display = 'none';

/*removes the select Theme node from the list of options IN the "Design:" list
but only after the mouseover.
*/
selectTheme.addEventListener('click', (e) => {
  if (selectTheme.firstElementChild.innerText === 'Select Theme'){
selectTheme.remove(selectTheme.firstElementChild);}
});

/*Function creates and option inside the "colors drop down menu" later this option
selected = true and disabled = true forcing the user to select a t-shirt theme before continuing.
 */

function appOpt() {
const options = document.createElement("option");
colors.insertBefore(options, colors[0]);
}
appOpt();

// for I loop that hides all theme options
for (let i = 1; i < cC.length; i++){
  cC[i].style.display='none';
}

//creates a 'Please select a T-shirt theme' inside the drop down menu.
cC[0].textContent='Please select a T-shirt theme';
cC[0].selected = true;
cC[0].disabled = true;


selectTheme.addEventListener('change', (e) => {
  if (selectTheme.firstElementChild.innerText === 'Theme - JS Puns'){
    if(colors.firstElementChild.innerText === 'Please select a T-shirt theme'){
      colors.remove(colors.firstElementChild);}
      cC[0].style.display = '';
      cC[1].style.display = '';
      cC[2].style.display = '';
}
else if (selectTheme.firstElementChild.innerText == 'Theme - I &#9829; JS') {
  if(colors.firstElementChild.innerText === 'Please select a T-shirt theme'){
    colors.remove(colors.firstElementChild);}
    cC[3].style.display = '';
    cC[4].style.display = '';
    cC[5].style.display = '';
}
});

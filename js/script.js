
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

function option1 (){
for (let i=0; i<3; i+=1){
  cC[i].className =  'optOne';
  }
}
option1 ()

selectTheme.addEventListener('click', (e) => {
  if(colors.firstElementChild.innerText === 'Please select a T-shirt theme'){
    colors.remove(colors.firstElementChild);}

  if (selectTheme.firstElementChild.innerText === 'Theme - JS Puns'){
    for (let i=0; i<3; i+= 1){
      cC[i].style.display = '';}
    }else{
      for (let i=3; i<6; i+= 1){
      cC[i].style.display='none';}
      }
  if (selectTheme.firstElementChild.nextElementSibling.innerText == 'Theme - I &#9829; JS'){
      for (let i=3; i<6; i+= 1){
        cC[i].style.display= '';}
      }else{
        for (let i=0; i<3; i+= 1){
        cC[i].style.display='none';}
      }

  });
  //   else{
  //   for (let i=0; i<3; i+= 1){
  //     cC[i].style.display='none';}
  //   for (let j=3; j>3 && j<6; j+= 1){
  //     cC[j].style.display='';
  //   }
  // }



// T-Shirt selct options
// for (let i=0; i<colors.length; i++){
// if (i<=3){
//
// }else if (i>=3 && i<=6) {
//
// }
//
// };

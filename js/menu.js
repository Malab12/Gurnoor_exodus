function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// function myFunction1() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("mySearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myMenu");
//     li = ul.getElementsByTagName("li");

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function openMenu(evt, restrName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i =0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";              
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(restrName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var start_name = ["Alien Fingers", "Rocket Twisters", "Space Rocks"];
var start = ["st1", "st2", "st3"];
var start_pri = [10, 20, 8];
var start_quan = [0, 0, 0];

var main_name = ["Kanaroos Marsala", "Xeep Lasagna", "Cobb Salad", "Orqa Pasta", "Faon with Chunky Applesause", "Stuffed Portobello Mushrooms with Crispy Xeep Cheese"];
var main = ["mn1", "mn2", "mn3", "mn4", "mn5", "mn6"];
var main_pri = [10, 20, 8, 30, 12, 15];
var main_quan = [0, 0, 0, 0, 0, 0];

var des_name = ["Moon Rock Brownies", "Galaxy Popcorn", "Alien Cupcakes"];
var des = ["ds1", "ds2", "ds3"];
var des_pri = [10, 20, 8];
var des_quan = [0, 0, 0];

var bev_name = ["Cold Brewed Coffee", "Butterbeer", "Assorted Drinks"];
var bev = ["bv1", "bv2", "bv3"];
var bev_pri = [10, 20, 8];
var bev_quan = [0, 0, 0];

function increment(ind, cat) {
    if(cat == 'start'){
        start_quan[ind]++;
        document.getElementById(start[ind]).innerHTML = start_quan[ind];
    }

    else if(cat == 'main'){
        main_quan[ind]++;
        document.getElementById(main[ind]).innerHTML = main_quan[ind];
    }

    else if(cat == 'des'){
        des_quan[ind]++;
        document.getElementById(des[ind]).innerHTML = des_quan[ind];
    }

    else if(cat == 'bev'){
        bev_quan[ind]++;
        document.getElementById(bev[ind]).innerHTML = bev_quan[ind];
    }
    
}

function decrement(ind, cat) {
    if(cat == 'start' && start_quan[ind]!=0){
        start_quan[ind]--;
        document.getElementById(start[ind]).innerHTML = start_quan[ind];
    }

    else if(cat == 'main' && main_quan[ind]!=0){
        main_quan[ind]--;
        document.getElementById(main[ind]).innerHTML = main_quan[ind];
    }

    else if(cat == 'des' && des_quan[ind]!=0){
        des_quan[ind]--;
        document.getElementById(des[ind]).innerHTML = des_quan[ind];
    }

    else if(cat == 'bev' && bev_quan[ind]!=0){
        bev_quan[ind]--;
        document.getElementById(bev[ind]).innerHTML = bev_quan[ind];
    }
    
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";

    var sum=0;
    var ol = document.getElementById("receipt");
    while(ol.firstChild) ol.removeChild(ol.firstChild);

    // For receipt generation based on current quantities selected
    var i;
    for (i = 0; i < start.length; i++) {
      if(start_quan[i] != 0){
        var node = document.createElement('li');
        sum +=start_pri[i]*start_quan[i];
        var str = String(start_name[i] + ":    Z" + start_pri[i]*start_quan[i]);
        node.appendChild(document.createTextNode(str));
        document.querySelector('ol').appendChild(node);
      }
    }

    for (i = 0; i < main.length; i++) {
      if(main_quan[i] != 0){
        var node = document.createElement('li');
        sum +=main_pri[i]*main_quan[i];
        var str = String(main_name[i] + ":    Z" + main_pri[i]*main_quan[i]);
        node.appendChild(document.createTextNode(str));
        document.querySelector('ol').appendChild(node);
      }
    }

    for (i = 0; i < des.length; i++) {
      if(des_quan[i] != 0){
        var node = document.createElement('li');
        sum +=des_pri[i]*des_quan[i];
        var str = String(des_name[i] + ":    Z" + des_pri[i]*des_quan[i]);
        node.appendChild(document.createTextNode(str));
        document.querySelector('ol').appendChild(node);
      }
    }

    for (i = 0; i < bev.length; i++) {
      if(bev_quan[i] != 0){
        var node = document.createElement('li');
        sum +=bev_pri[i]*bev_quan[i];
        var str = String(bev_name[i] + ":   Z" + bev_pri[i]*bev_quan[i]);
        node.appendChild(document.createTextNode(str));
        document.querySelector('ol').appendChild(node);
      }
    }

    var node = document.createElement('h2');
    var str = String("Your total bill amount is " + sum + " Zetas(Z)" );
    node.appendChild(document.createTextNode(str));
    document.querySelector('.modal-content').appendChild(node);

    var node = document.createElement('h3');
    var str = String("Thank you! Please Order again");
    node.appendChild(document.createTextNode(str));
    document.querySelector('.modal-content').appendChild(node);

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
}
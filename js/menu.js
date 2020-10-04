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

var start = ["st1", "st2", "st3"];
var start_pri = [10, 20, 8];
var start_quan = [0, 0, 0];

var main = ["mn1", "mn2", "mn3", "mn4", "mn5", "mn6"];
var main_pri = [10, 20, 8, 30, 12, 15];
var main_quan = [0, 0, 0, 0, 0, 0];

var des = ["ds1", "ds2", "ds3"];
var des_pri = [10, 20, 8];
var des_quan = [0, 0, 0];

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
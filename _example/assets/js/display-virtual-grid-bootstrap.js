/* 
    Library Name  : Display Virtual Grid Bootstrap 
    Version       : 2.2.3
    By            : Rémi Gasnier
    Creation Date : 2023-02-08
    Last Changes  : 2023-02-18
*/

"use strict";

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else{ 
        var expires = "";
    }
	document.cookie = name+"="+value+expires+"; path=/; SameSite=Lax";
}

function getValueCookie(name) {
	var recoveryCookie = name + "=";
	var cookieSplit = document.cookie.split(';');
	for(var i=0; i < cookieSplit.length; i++) {
		var valueCookie = cookieSplit[i];
		while(valueCookie.charAt(0)==' '){
            valueCookie = valueCookie.substring(1, valueCookie.length)
        };
		if(valueCookie.indexOf(recoveryCookie) == 0){
            return valueCookie.substring(recoveryCookie.length, valueCookie.length)
        };
	}
	return "Valeur inconnue !";
}

function buttonOnOff(){
    let body = document.querySelector("body");
    let buttonOnOff = document.createElement("input");

    buttonOnOff.setAttribute("type","checkbox");
    buttonOnOff.setAttribute("id","dvgb");
    body.prepend(buttonOnOff);

    buttonOnOff.addEventListener("click", function(){
        this.toggleAttribute("checked");
        if(this.hasAttribute("checked") == true){
            createCookie("displayGrid", "0", "1");
        }
        else{
            createCookie("displayGrid", "1", "1");
        }
    });
    
}

function cookieChangeValue(){
    let buttonOnOff = document.getElementById("dvgb");
    document.addEventListener("DOMContentLoaded", function(){
        
        if(getValueCookie("displayGrid") == "0"){
            buttonOnOff.setAttribute("checked", "");
        }
        else{
            buttonOnOff.removeAttribute("checked");
        }

        //Control du cookie. Peut être mis en commentaire. / Cookie control. Can be commented.
        if(document.cookie === ""){
            console.log("Le cookie « displayGrid » n'est pas encore été créé (c'est normal !) / \nThe \"displayGrid\" cookie has not yet been created (that's normal!)");
        }
        else{
            console.log(document.cookie);
        }
        ///
    });

    //Control du cookie. Peut être mis en commentaire. / Cookie control. Can be commented.
    buttonOnOff.addEventListener("change", function(){
        console.clear();
        console.log(document.cookie);
    });
    ///
}

buttonOnOff();
cookieChangeValue();






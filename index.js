var btn=document.querySelector(".submit");
btn.addEventListener("click",myfunc);
var flag=0;
var a=document.querySelector(".content");
a.classList.remove("content");


var refresh_btn=document.querySelector(".refresh");

refresh_btn.addEventListener("click",myfunc2);



function myfunc(){
    var amt=document.querySelector(".amt").value;
    amt=parseFloat(amt);
    console.log(amt);
    var persons=document.querySelector(".persons").value;
    persons=parseFloat(persons);
    if(!isNaN(amt) && !isNaN(persons)){
        var total;
        var tip=document.querySelector("#tip").value;
        var per=amt/persons;
        if(tip=="25% - Top Notch"){
            total=per*0.25;
        }
        else if(tip=="15% - Excellent"){
            total=per*0.15;
        }
        else if(tip=="10% - Good"){
            total=per*0.10;
        }
        else if(tip=="5% - Worst"){
            total=per*0.05;
        }
        total=total.toPrecision(4); 
        total=" "+total+" ";
            a.classList.add("content");
            a.innerHTML="<h3>"+ total +"per person</h3>";
        // else{
        //     btn.value="Refresh";
        //     location.reload();
        //     a.innerHTML="";
        // }
        
    }
    else{
        alert("Enter Valid Entries");
    }
    

}
function myfunc2(){
    location.reload();
    a.innerHTML="";
}
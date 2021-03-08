function compute()
{

    //defining variables
    p = document.getElementById("principal").value;
    var principal = p;

    r = document.getElementById("rate").value;
    var rate = r;

    y = document.getElementById("years").value;
    var years = y;

    var interest = principal * years * rate / 100;

    //test statement to check if principal is zero or negative
    if(parseInt(principal)<=0){
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        }
    else{
        document.getElementById("result1").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + getFutureYear() + "</mark>";
        }

}
function getFutureYear() //function to get add current year with entered year
{
    var d = new Date();
    var thisYear = d.getFullYear();
    return (parseInt(document.getElementById("years").value) + thisYear);
}

function changeSlideValue() //function to show the value of the slider
{
    var hotDog = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerHTML = hotDog + "%";
}
        
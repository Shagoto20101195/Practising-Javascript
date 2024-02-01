function  showCap()
{
    var country = document.getElementById("country").value;

    if (country === "India")
    {
        document.getElementById("capital").value = "Delhi";
    }
    else if (country === "USA")
    {
        document.getElementById("capital").value = "Washington DC";
    }
    else if (country === "UK")
    {
        document.getElementById("capital").value = "London";
    }
}

function picInv()
{
    document.getElementById("pic").className = "hide";
}

function picShow()
{
    document.getElementById("pic").className = "show";
}


function showQuote()
{
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

try {
	fetch(url)
    .then((res) => res.json())
    .then((data) => {
        alert(data.joke);
    });
} catch (error) {
	alert(error);
}
}

function showCoffee()
{
    const url = "https://coffee.alexflipnote.dev/random.json";
    try
    {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("pic").src = data.file;
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function showBurger()
{
    const url = "https://foodish-api.com/images/burger";

    try
    {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("pic").src = data.image;
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function showNew(type1, type2)
{
    alert(document.getElementById(type1).value+" "+document.getElementById(type2).value);
    if (document.getElementById(type1).value === "on")
    {
        showCoffee();
    }
    else if(document.getElementById(type2).value === "on")
    {
        showBurger();
    }
    else
    {
        alert("Hi");
        document.getElementById("pic").src = "icon.jpg";
    }
}
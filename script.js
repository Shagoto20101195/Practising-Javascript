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
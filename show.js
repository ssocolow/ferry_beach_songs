function quill(n)
{
    document.getElementById("qs").style.display = "none";
    document.getElementById("ylml").style.display = "none";
    document.getElementById("abnf").style.display = "none";
    document.getElementById("ed").style.display = "none";
    document.getElementById("ff").style.display = "none";
    document.getElementById("vlfb").style.display = "none";

    if(n == 1)
    {
        document.getElementById("qs").style.display = "block";
    }
    if(n == 2)
    {
        document.getElementById("ylml").style.display = "block";
    }
    if(n == 3)
    {
        document.getElementById("abnf").style.display = "block";
    }
    if(n == 4)
    {
        document.getElementById("ed").style.display = "block";
    }
    if(n == 5)
    {
        document.getElementById("ff").style.display = "block";
    }
    if(n == 6)
    {
        document.getElementById("vlfb").style.display = "block";
    }
}
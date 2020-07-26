function quill(n)
{
    document.getElementById("qs").style.display = "none";
    document.getElementById("ylml").style.display = "none";
    document.getElementById("abnf").style.display = "none";

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
}
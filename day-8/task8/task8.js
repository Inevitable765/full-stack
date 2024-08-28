const value = prompt("enter a value");
if(value>18)
{
    console.log("you are eligible for vote");
}
else if(value<18)
{
    console.log("you are not eligible for vote");
}
else
{
    console.log("Invalid input");
}
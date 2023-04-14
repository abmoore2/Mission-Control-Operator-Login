function checkCreds()
{
    // This is checking the information //
    alert("checking information");
   
    // This checks the name
    var Name = document.getElementById("Name").value;
  
    // This checks the password
    var Password = document.getElementById("Password").value;
  
    // This checks your badge number
    var BadgeID = document.getElementById("BadgeID").value;
  
    // This checks if the name and password are correct
    var eventinfo = Name +  " " + Password;
   
    // This is for if all information is correct
    alert(Name +" "+ Password + " " + BadgeID);
    
    // This means your name has to be a certain amount of numbers
    if(Name.length > 30 || Name.length <2)
{
    // This checks to make sure the name and password meet the criteria
    document.getElementById("loginStatus").innerHTML = "invalid length on Name+Password";

}   
// This checks how long your password is
else
if (Password >20 || Password <2) 

// This checks to make sure your password is the right amount of letters or numbers
document.getElementById("loginStatus").innerHTML = "invalid number of participants";
   
// This checks to make sure your name is the right amount of letters
   else if(Name.length <= 20 || Name.length <= 4)
   {
 
    // This checks to make sure your name and password are correct
    document.getElementById("loginStatus").innerHTML = "Name " + Name + " " + Password;
  
    // This lets you know you are fully logged in
   alert("congrats - you are now logged on");
    
   // This is the second page
   location.href ='uat space program.html';
    }

}





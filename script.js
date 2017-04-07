$(document).ready(function()
{
    var testNumLength = function(number)
    {
        if (number.length > 9)
        {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15)
            {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };


    var newnumber = "";
    var oldnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    //Input numbers to totaldiv
    $("#numbers button").not("#clear,#clearall").click(function()
    {
        newnumber += $(this).text();
        totaldiv.text(newnumber);
        testNumLength(newnumber);
    });

    //choosing operator
    $("#operators button, #side button").not("#equals, #decimal").click(function()
    {
        if ($(this).attr("id") === "sqrt")
        {
            operator = "sqrt";
            $("#equals").click();
            return;
        }
        else
        {   
            if(oldnumber === "")
            {
                operator = $(this).text();
                oldnumber = newnumber;
                newnumber = "";
                totaldiv.text("0");    
               
            }
            else
            {
                switch(operator)
                { 
                    case "+":
                        oldnumber = (parseFloat(newnumber, 10) + parseFloat(oldnumber,10)).toString(10);
                        newnumber = "";
                        totaldiv.text("0");
                        
                        break;

                    case "-":
                        oldnumber = (parseFloat(oldnumber, 10) - parseFloat(newnumber,10)).toString(10);
                        newnumber = "";
                        totaldiv.text("0");
                        
                        break;

                    case "÷":
                        if(oldnumber === "0")
                        {
                            newnumber = "";  
                        }
                        else if(newnumber === "0")
                        {
                            newnumber = "Infinity";
                        }
                        else
                        {
                            oldnumber = (parseFloat(oldnumber, 10) / parseFloat(newnumber,10)).toString(10);
                            newnumber = "";
                            totaldiv.text("0");
                            
                            
                        }
                        break;
                    case "x":
                        oldnumber = (parseFloat(newnumber, 10) * parseFloat(oldnumber,10)).toString(10);
                        newnumber="";
                        totaldiv.text("0");
                        break;

                    case "^":
                        oldnumber = (Math.pow(parseFloat(oldnumber), parseFloat(newnumber)).toString(10));
                        newnumber="";
                        totaldiv.text("0");
                        break;

                }
                operator = $(this).text();
            }
            
            
        }
    });

    //clear last number or everything
    $("#clear,#clearall").click(function()
    {
        newnumber = "";
        totaldiv.text("0");
        
        if ($(this).attr("id") === "clearall") 
        {
            oldnumber = "";
        }
    });

    //do math
    $("#equals").click(function()
    {
        switch(operator)
       { 
            case "+":
                newnumber = (parseFloat(newnumber, 10) + parseFloat(oldnumber,10)).toString(10);
                oldnumber="";
                break;
            case "-":
                newnumber = (parseFloat(oldnumber, 10) - parseFloat(newnumber,10)).toString(10);
                oldnumber="";
                break;
            case "÷":
                if(oldnumber === "0"){
                    newnumber = "0";  
                }
                else if(newnumber === "0"){
                    newnumber = "Infinity";
                }
                else
                {
                    newnumber = (parseFloat(oldnumber, 10) / parseFloat(newnumber,10)).toString(10);
                    oldnumber="";
                    break;
                }
                
            case "x":
                newnumber = (parseFloat(newnumber, 10) * parseFloat(oldnumber,10)).toString(10);
                oldnumber="";
                break;

            case "^":
                newnumber = (Math.pow(parseFloat(oldnumber), parseFloat(newnumber)).toString(10));
                oldnumber="";
                break;
        }

        totaldiv.text(newnumber);
        testNumLength(newnumber);
        number = "";     

    });
    
    //check for decimals
    $("#decimal").click(function()
    {
       var numofDecs = 0;
       for(var i = 0; i < newnumber.length; i++)
      
       if(newnumber[i] === ".")
       {
        numofDecs++;   
       }

       if(numofDecs === 0)
       {
           newnumber += ".";   
           totaldiv.text(newnumber);
           testNumLength(newnumber);
       }
       
       
    });
});
$(document).ready(function()
{
    var testNumLength = function(number)
    {
        if (number.length > 9)
        {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length >= 10)
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
    var btnCount = 0;
    var operatorBtns = $("#operators button, #side button").not("#equals, #decimal");
    var numberBtns = $("#numbers button").not("#clear,#clearall");
    

    operatorBtns.click(function(){
            operator = $(this).text();
            if(operator === "\u00f7"){
            newnumber += "/";
            totaldiv.text(newnumber);       
            var charCount = totaldiv.text().length;
            var lastChar = totaldiv.text().charAt(charCount - 1);
        }else if(operator === '\u00d7'){

            newnumber += "*";
            totaldiv.text(newnumber);       
            var charCount = totaldiv.text().length;
            var lastChar = totaldiv.text().charAt(charCount - 1);
        }else{
            operator = $(this).text();
            newnumber += operator;
            totaldiv.text(newnumber);
            var charCount = totaldiv.text().length;
            var lastChar = totaldiv.text().charAt(charCount - 1);
        }
            operatorBtns.prop('disabled', true);

    });
       
    numberBtns.click(function()
    {
        
            newnumber += $(this).text();
            totaldiv.text(newnumber);
            testNumLength(newnumber);
            operatorBtns.prop('disabled', false);
        

    });


       /*    
    
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
            
            
        }*/
    

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
        
        /*switch(operator)
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
        }*/

        alert(totaldiv.text());
        var result = eval(totaldiv.text());
        totaldiv.text(result);
        testNumLength(result);
        number = "";
        newnumber = "";     

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
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
    var baseNum = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    var btnCount = 0;
    var operatorBtns = $("#operators button, #side button").not("#equals, #decimal");
    var numberBtns = $("#numbers button").not("#clear,#clearall");
    
   

    operatorBtns.click(function(){
        operator = $(this).text();

        if(oldnumber === ""){
        

            switch(operator){

                case "\u00f7":

                    newnumber += "/";
                    totaldiv.text(newnumber);       
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);
                    break;

                case "\u00d7":

                    newnumber += "*";
                    totaldiv.text(newnumber);       
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);
                    break;

                case "\u221A":
                    newnumber = Math.sqrt(newnumber);
                    totaldiv.text(newnumber);
                    break;

                case "^":

                    operator = $(this).text();
                    baseNum = newnumber;
                    newnumber += operator;

                    totaldiv.text(newnumber);
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);                
                    operatorBtns.prop('disabled', true);
                    break;

               
                default:
                    operator = $(this).text();
                    newnumber += operator;
                    totaldiv.text(newnumber);
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);        

            }

            

        }else{

            switch(operator){

                case "\u00f7":

                    oldnumber += "/";
                    totaldiv.text(oldnumber);       
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);
                    break;

                case "\u00d7":

                    oldnumber += "*";
                    totaldiv.text(oldnumber);       
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);
                    break;

                case "\u221A":
                    oldnumber = Math.sqrt(oldnumber);
                    totaldiv.text(oldnumber);
                    break;

                case "^":

                    baseNum = oldnumber;
                    oldnumber += "^";
                    totaldiv.text(oldnumber);
                    oldnumber = oldnumber.slice(0, -1);
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);     
                    operatorBtns.prop('disabled', true);           
                    break;

               
                default:

                    operator = $(this).text();
                    oldnumber += operator;
                    totaldiv.text(oldnumber);
                    var charCount = totaldiv.text().length;
                    var lastChar = totaldiv.text().charAt(charCount - 1);
                    operatorBtns.prop('disabled', true);

            } 
        }

        $("#decimal").prop('disabled', false);

    });
       

    numberBtns.click(function(){
            
               
                    if(baseNum !== ""){

                        if(oldnumber === ""){

                            newnumber = Math.pow(baseNum, $(this).text());
                            totaldiv.text(newnumber);
                            testNumLength(newnumber);
                            baseNum = "";

                        }else{

                            oldnumber = Math.pow(baseNum, $(this).text());
                            totaldiv.text(oldnumber);
                            testNumLength(oldnumber);
                            baseNum = "";
                        }

                        operatorBtns.prop('disabled', false);

                }else{

                    if(oldnumber === ""){

                        newnumber += $(this).text();
                        totaldiv.text(newnumber);
                        testNumLength(newnumber);
                        operatorBtns.prop('disabled', false);

                    }else{

                        oldnumber += $(this).text();
                        totaldiv.text(oldnumber);
                        testNumLength(oldnumber);
                        operatorBtns.prop('disabled', false);
                    }

            }    
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
    $("#clear,#clearall").click(function(){
         
            if($(this).attr("id") === "clear"){

                if(oldnumber === ""){
                    
                    newnumber = "";
                    totaldiv.text("0");

                }else{
                    
                    oldnumber = oldnumber.slice(0,-1);
                    totaldiv.text(oldnumber);

                }

            }else if($(this).attr("id") === "clearall"){
                
                newnumber = "";
                oldnumber = "";
                totaldiv.text("0");
            }
       });     
   

    //do math
    $("#equals").click(function(){
        
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
            oldnumber = totaldiv.text();
            testNumLength(result);
            number = "";
            newnumber = "";     

    });
    
    //check for decimals
    $("#decimal").click(function(){
            
            if(oldnumber === ""){
                newnumber += ".";
                totaldiv.text(newnumber);
            }else{
                oldnumber += ".";
                totaldiv.text(oldnumber);
            }
            
       
        $("#decimal").prop('disabled', true);
       
    });

});
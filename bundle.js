   console.log(`%c             $$$$$$$$              $$$$$$
           m$$$$$$$$$          m$"""" "$$m             
           $$$$$$$$$$         $" m$$$$m""$m           
          mm$$$$$$$$$$$$$$$"" $     "$$mm$$           
          m""        """$$$$$mm      "$$$$$           
      mmm$$m$$m$$mmmmm   """"$$$"    m$$$"            
    ""$m   $$$""""""$$$mm            $$$$m            
       $                ""           mm$$$$           
     mm"                      mm$$$$$$$$$$$           
     $                      m$$$$""    ""$$$          
     $                      $$""       m "$$m         
    $                      """   mm$$$$$$$$$$         
    $                          m$$$$$""""$$$"         
     $  mm    mm               $$"       "$$          
     $ $"$$  $"$$                         "$""""      
      $"m"   "m$"                           m""""     
     m$ m"""m                                "mmm""   
    $ mmmm                                   ""       
 mmm$$""""""$$                                m""""$  
m$$"  mm$$$$$$$                                mm     
$$  $$$$$$$$$$$$         mmm                "$m "$m   
"$$$$$$$$$$$$$$$         m$m"                m     "  
 ""$$$$$$$$$$$$"       m$$$$                 ""mm     
   $""$$$$$""         m$$$$                m mmm "    
   "m              m$$$$$$            mm$mmmm  ""     
    ""mmm     mmm$$""$$$"            $$""m   "        
         """""   "$mm$"     m        $$               
                m         m$"        $$               
                "$$$$$mm$""          ""               
                   """"                                  
`, "font-family:monospace");
console.log(`code made by @loading...#9877`)


function compile() {
   var input = document.getElementById("input").value;
   var output = document.getElementById("output");
   output.innerHTML = input;
   setTimeout(compile, 1000);
 }

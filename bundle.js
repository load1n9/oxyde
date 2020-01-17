  var template = [
     
  `<html>
   <body>

	<h1>oxide</h1>
	<p>some subtitle</p>

  </body>
  </html>`
     
  ];




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
   var iframe  = document.getElementById("output");
   iframe = (iframe.contentWindow)?iframe.contentWindow:(iframe.contentDocument)? iframe.contentDocument.document: 
   iframe.document.open();
   iframe.document.write(input);
   iframe.document.close();
   return false;
   setTimeout(compile, 100);
 }

function basic() {
     document.getElementById("input").value = template[0];
}

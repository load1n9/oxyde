  var template = [
     
  `<html>
   <body>

	<h1>oxyde</h1>
	<p>some subtitle</p>

  </body>
  </html>`,
   `<html>
    <head>
    <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    </head>
   <body>
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
   var output  = document.getElementById("output");
   var template = document.getElementById("templates");
   output.innerHTML = input;
   if (template.value === "basic") {
       basic();
       template.value = "";
       }
   if (template.value === "bootstrap") {
       basicbootstrap();
       template.value = "";
       }
   setTimeout(compile, 100);
   
 }

function basic() {
     document.getElementById("input").value = template[0];
}
function basicbootstrap() {
     document.getElementById("input").value = template[1];
}

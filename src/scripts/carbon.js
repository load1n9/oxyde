   let convertBlobToBase64 = (blob) => {
       return new Promise((resolve, reject) => {
           const reader = new FileReader();
           reader.onerror = reject;
           reader.onload = () => {
               resolve(reader.result);
           };
           reader.readAsDataURL(blob);

       });

   }


   export async function fetchCarbon(code, theme = "darcula", backgroundColor = "0000ff") {
       try {
           let codeoutput = encodeURIComponent(code)
           const fetchResult = await fetch(`https://carbonnowsh.herokuapp.com/?code=${codeoutput}&theme=${theme}`);
           return await convertBlobToBase64(await fetchResult.blob());


       } catch (error) {
           console.error(error);
       }

   }
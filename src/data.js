
export const LanguageData = [
    {
        name: "javascript",
        icon: "<SomeIcon />",
        code: `
function printf(text) {
    console.log(text)
} `
    },
    {
        name: "python",
        icon: "<SomeIcon />",
        code: `
def printf(text):
    print(text)
        `
    },
    {
        name: "rust",
        icon: "<SomeIcon />",
        code: `
fn main() {
    println!("Hello World!");
}
        `
    },
    {
        name: "typescript",
        icon: "<SomeIcon />",
        code: `
function printf(text:string) {
    console.log(text)
}
        `
    },
    {
        name: "whistle",
        icon: "<SomeIcon />",
        code: `
fun printf(text: string): none {
  #(js) console.log(text);
}

printf("Hello, World!")
        `
    },
    {
        name: "java",
        icon: "<SomeIcon />",
        code: `
public class Main {

  public static void main(String[] args) {
  	System.out.println("Hello, World!"); 
  }
  
}
        `
    },
    {
        name: "php",
        icon: "<SomeIcon />",
        code: `
echo "Hello, World!";
        `
    }

]
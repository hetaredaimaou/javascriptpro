//console.log("aaa\n");
const button=document.getElementById("button");
//console.log(button);
button.addEventListener("click",function () {
    console.log("aaa\n");
    
    console.log(textbox.value);
    const ele=document.createElement("div");
    ele.textContent=textbox.value;
    document.getElementById("list").appendChild(ele);
})

const textbox=document.getElementById("textbox");
textbox.addEventListener("change",function(e){
    console.log(e.target.value);
})

const textarea = document.querySelector("textarea");

    textarea.addEventListener("keyup", e =>{textarea.style.height = "63px";

    let scHeight = e.target.scrollHeight;
    
    textarea.style.height = `${scHeight}px`;
}
);

function zero(){

	alert("Are you sure you want to reset?");
    document.getElementById("text").value = "";

}

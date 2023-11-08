

function getuser(){
    var xhttp=new XMLHttpRequest();
    
    xhttp.onreadystatechange=function(){
    
        if(this.readyState==4 && this.status==200){
            // console.log(this.responseText)
            document.getElementById("container").innerHTML=this.responseText;
        }
        else if(this.readyState==4 && this.status==404){
            // console.log("file not found");
            document.getElementById("container").innerHTML=this.responseText;
    
    
        }

    };
    
    xhttp.open('GET',"user.json",true);
        xhttp.send();
    
    }
    



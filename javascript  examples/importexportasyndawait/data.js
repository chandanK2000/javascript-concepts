export const itemlists = ["mango", "apple", "orange", "pomegrante", "papaya","banana"];

export const userlists = ["mohan", "sonan", "sagar", "amit", "suraj","deepad","krishna"];


export function citylist(){
    var  dhtml="<h2> city list</h2>";

    var  city=["muzaffarput","patna","ranchi","arunahcal","madhayapardesh"];

    city.forEach((cityname,index)=>{

        dhtml=dhtml+"<p>"+cityname.charAt(0).toUpperCase()+cityname.slice(1)+"</p>";
    })
    return dhtml;
}
function myFunction() {
    document.getElementById("demo").innerHTML = "The Final answer is = "+ max1;
}


let num = [-2,1,-3,4,-1,2,1,-5,4];
var max1= maxsum(num);

function maxsum(num){
    let max = 0;
    let cur = 0;

    for(let i = 0; i<num.length; i++){
        cur=cur+num[i];
        if(cur>max){

            max= cur;
        }
        if(cur<0){

            cur=0;
        }           
    }
    return max;
}







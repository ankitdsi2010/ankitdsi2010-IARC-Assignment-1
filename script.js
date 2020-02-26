
function f1(){
             document.getElementById("tab").style.display="block";
         }

function f2(){
            document.getElementById("tab").style.display="none";
        }       

setTimeout(hide,2000)
function hide(){
    document.getElementById('overlay').style.display='none';
    document.getElementsByClassName('spinner').style.display='none';
}
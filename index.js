let btn=document.getElementById('bt')
let g=Math.floor( (Math.random()*100)+1) 
console.log(g)
let ch=10
let s=false
function tr(){
    let val=document.forms[0]['io'].value
    // console.log(val)
    if(s==false){
        if((val>0)&&(val<101)&&(ch>0)&&(val!='')){
            ch--
            document.getElementById('c').innerHTML='You have '+ch+' chances'
            if(val==g){
                document.getElementById('b').innerHTML='Your guess is right'
                document.getElementById('b').className = 'correct';
                s=true
                document.getElementById('bt').innerHTML='Reset'
            }
            else if(val<g){
                document.getElementById('b').innerHTML='Your guess is less'
                document.getElementById('b').className = 'too-low';
            }
            else{
                document.getElementById('b').innerHTML='Your guess is higher'
                document.getElementById('b').className = 'too-high'; 
            }
        }
        else{
            document.getElementById('b').innerHTML='Your guess is not in range or invalid'
            document.getElementById('c').innerHTML='You have no more chances'
            document.getElementById('bt').innerHTML='Reset'
            document.getElementById('b').className = 'invalid';
            s=true
        }
    } else{
        re()
    }
}
function re(){
    g=Math.floor( (Math.random()*100)+1) 
    ch=10
    s=false
    // console.log(g)
    document.getElementById('c').innerHTML='You have 10 chances'
    document.getElementById('b').innerHTML='Try it'
    document.getElementById('b').className = ''; 
    document.getElementById('bt').innerHTML='Check'
    document.forms[0]['io'].value=' '
}
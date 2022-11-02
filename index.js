function reset()
{
    document.getElementById("tk").innerHTML=`0`;
    document.getElementById("fh").innerHTML=`0`;
    document.getElementById("th").innerHTML=`0`;
    document.getElementById("oh").innerHTML=`0`;
    document.getElementById("ft").innerHTML=`0`;

    document.getElementById("tt").innerHTML=`0`;
    document.getElementById("tn").innerHTML=`0`;
    document.getElementById("fv").innerHTML=`0`;
    document.getElementById("one").innerHTML=`0`;
    document.getElementById("two").innerHTML=`0`;

    // document.input.reset();
}

function cal()
{

    

    reset();    

    const bill=document.getElementById("bill").value;
    const cash=document.getElementById("cash").value;
    if(cash<bill)
    {
        alert(`Collect ${Math.abs(cash-bill)} more`);
        return;
    }
   

    let rem=cash-bill;
    let tk=fh=th=oh=ft=tt=tn=fv=one=two=0;

    if(Math.floor(rem/2000)>0)
    {
        
        document.getElementById("tk").innerHTML=Math.floor(rem/2000);
        tk=Math.floor(rem/2000);
        
        rem=rem-(tk*2000);
        
    }
   
    if(Math.floor(rem/500)>0)
    {
        
        document.getElementById("fh").innerHTML=Math.floor(rem/500);
        fh=Math.floor(rem/500);
        rem=rem-(fh*500);
        
    }

    if(Math.floor(rem/200)>0)
    {
        
        document.getElementById("th").innerHTML=Math.floor(rem/200);
        th=Math.floor(rem/200);
        rem=rem-(th*200);
        
    }

    if(Math.floor(rem/100)>0)
    {
        
        document.getElementById("oh").innerHTML=Math.floor(rem/100);
        oh=Math.floor(rem/100);
        rem=rem-(oh*100);
        
    }
    if(Math.floor(rem/50)>0)
    {
        
        document.getElementById("ft").innerHTML=Math.floor(rem/50);
        ft=Math.floor(rem/50);
        rem=rem-(ft*50);
        
    }
    if(Math.floor(rem/20)>0)
    {
        
        document.getElementById("tt").innerHTML=Math.floor(rem/20);
        tt=Math.floor(rem/20);
        rem=rem-(tt*20);
        
    }
    if(Math.floor(rem/10)>0)
    {
        
        document.getElementById("tn").innerHTML=Math.floor(rem/10);
        tn=Math.floor(rem/10);
        rem=rem-(tn*10);
        
    }
    if(Math.floor(rem/5)>0)
    {
        
        document.getElementById("fv").innerHTML=Math.floor(rem/5);
        fv=Math.floor(rem/5);
        rem=rem-(fv*5);
        
    }
    if(Math.floor(rem/2)>0)
    {
        
        document.getElementById("two").innerHTML=Math.floor(rem/2);
        one=Math.floor(rem/2);
        rem=rem-(one*2);
        
    }
    if(Math.floor(rem/1)>0)
    {
        
        document.getElementById("one").innerHTML=Math.floor(rem/1);
        one=Math.floor(rem/1);
        rem=rem-(one*1);
        
    }
    console.log(rem);
    console.log(rem);

    // if(Math.floor(rem/2)>0)
    //  document.getElementById("tk").innerHTML=Math.floor(rem/2000);

   
     
   
}

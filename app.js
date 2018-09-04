{
    for(var i=0;i<TABLE_DATA.length;i++)
    {
        document.getElementsByTagName("tbody")[0].innerHTML+="<tr>"+
        "<td>" +TABLE_DATA[i].id+"</td>"+
        "<td>"+"<img src='"+ TABLE_DATA[i].thumbnailUrl+"'/>'"+"</td>"+
        "<td>"+ TABLE_DATA[i].name+"</td>"+
        "<td>"+TABLE_DATA[i].price+"</td></tr>"
    }
}


var flag = 0;

function randomizer()
{
    if(flag==1)
    {
    document.getElementsByTagName("tbody")[0].innerHTML="";
    var a = [0,0,0,0,0,0,0,0,0,0];
    var i;
    var q;
    var j;
    var sum =0;
        for(i=0;i<100;i++)
        { 
            q = Math.floor(Math.random()*10);
           if(a[q]==0)
            {
                a[q]=1;
                sum++;

            
                document.getElementsByTagName("tbody")[0].innerHTML+="<tr>"+
                "<td>" +TABLE_DATA[q].id+"</td>"+
                "<td>"+"<img src='"+ TABLE_DATA[q].thumbnailUrl+"'/>'"+"</td>"+
                "<td>"+ TABLE_DATA[q].name+"</td>"+
                "<td>"+TABLE_DATA[q].price+"</td></tr>"
                
            }
            
            if(sum == 10)
            {   sum=0;
                for(j=1;j<10;j++)
                    {a[j]=0;}
                break;
            }
        }



    }
}

function Randomize()
{   
    flag = 1;
    var myVar = setInterval(randomizer,1000);
}

function StopFunction() {
    flag = 0;
}


function SortTable()
{ 
      TABLE_DATA.sort(function (a, b) {   
        return b.price - a.price || a.id - b.id;
      });
      
      document.getElementsByTagName("tbody")[0].innerHTML="";  
    
      for(var i=0;i<TABLE_DATA.length;i++)
        {
            document.getElementsByTagName("tbody")[0].innerHTML+="<tr>"+
            "<td>" +TABLE_DATA[i].id+"</td>"+
            "<td>"+"<img src='"+ TABLE_DATA[i].thumbnailUrl+"'/>'"+"</td>"+
            "<td>"+ TABLE_DATA[i].name+"</td>"+
            "<td>"+TABLE_DATA[i].price+"</td></tr>"
        }
    
}
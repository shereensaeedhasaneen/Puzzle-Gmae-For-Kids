
var count_element=document.getElementById("rightSide2").children.length;
var flag=false;

var id;



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  /////////////////// Animal drop //////////////////////
  function drop2(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if(data=="pic1")
        {
        ev.target.appendChild(document.getElementById(data));
        count_element-=1;
        console.log(count_element);
        if(count_element==0)
        {
            document.getElementById("true").style.display="inline";
            flag=true;
            clearInterval(id);
            document.getElementById("backgroundaudio").pause();
            document.getElementById("clapaudio").play();

        }
        }
        else
        {
        alert("No Wrong Place");
        }
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic2")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
        console.log(count_element);
        if(count_element==0)
        {
            document.getElementById("true").style.display="inline";
            flag=true;
            clearInterval(id);
            document.getElementById("backgroundaudio").pause();
            document.getElementById("clapaudio").play();

        }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic4")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
        console.log(count_element);
        if(count_element==0)
        {
            document.getElementById("true").style.display="inline";
            flag=true;
            clearInterval(id);
            document.getElementById("backgroundaudio").pause();
            document.getElementById("clapaudio").play();

        }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop4(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic3")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
        console.log(count_element);
        if(count_element==0)
        {
            document.getElementById("true").style.display="inline";
            flag=true;
            clearInterval(id);
            document.getElementById("backgroundaudio").pause();
            document.getElementById("clapaudio").play();
        }
    }
    else
    {
    alert("No Wrong Place");
    }
}
/////////////////////// Apple drop //////////////////////////
function drop1p(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic4")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
    console.log(count_element);
    if(count_element==0)
    {
        document.getElementById("true").style.display="inline";
        flag=true;
        clearInterval(id);
        document.getElementById("backgroundaudio").pause();
        document.getElementById("clapaudio").play();

    }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop2p(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic3" || data=="pic5")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
    console.log(count_element);
    if(count_element==0)
    {
        document.getElementById("true").style.display="inline";
        flag=true;
        clearInterval(id);
        document.getElementById("backgroundaudio").pause();
        document.getElementById("clapaudio").play();

    }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop3p(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic5" || data=="pic3")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
    console.log(count_element);
    if(count_element==0)
    {
        document.getElementById("true").style.display="inline";
        flag=true;
        clearInterval(id);
        document.getElementById("backgroundaudio").pause();
        document.getElementById("clapaudio").play();

    }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop4p(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic2")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
    console.log(count_element);
    if(count_element==0)
    {
        document.getElementById("true").style.display="inline";
        flag=true;
        clearInterval(id);
        document.getElementById("backgroundaudio").pause();
        document.getElementById("clapaudio").play();

    }
    }
    else
    {
    alert("No Wrong Place");
    }
}

function drop5p(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="pic1")
    {
    ev.target.appendChild(document.getElementById(data));
    count_element-=1;
    console.log(count_element);
    if(count_element==0)
    {
        document.getElementById("true").style.display="inline";
        flag=true;
        clearInterval(id);
        document.getElementById("backgroundaudio").pause();
        document.getElementById("clapaudio").play();

    }
    }
    else
    {
    alert("No Wrong Place");
    }
}
//////////////////////////
function decrease()
{
    //document.getElementById("backgroundaudio").autoplay;
   id= setInterval( function(){
    document.getElementById("prog").value-=1;
    if( document.getElementById("prog").value==0)
    {
        clearInterval(id);
       if(flag==false)
       {
        document.getElementById("false").style.display="inline";
        document.getElementById("backgroundaudio").pause();
        document.getElementById("looseraudio").play();   
    }
        
    }
   },1500);
  
}
document.getElementById("mute").onclick=function()
{
    document.getElementById("backgroundaudio").play();
}
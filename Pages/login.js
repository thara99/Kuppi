<html>
<head><meta charset="us-ascii">
    <title></title>
<script>

let userUrl = prompt("What website do you want displayed?","e.g. https://www.google.com");

if (userUrl){

    var srcFrame=""; //complete page code to inject into your iframe or return

    var fetchMe = "https://api.codetabs.com/v1/proxy?quest=" + userUrl;

    fetch(fetchMe).then((response) => response.text()).then((text) => {
        srcFrame = text;

        //if injecting into iframe
        myFrame.document.open();
        myFrame.document.write(srcFrame);
        myFrame.document.close();



        // USE THE FOLLOWING TO ADD THE ORIGINAL URL AS THE baseURI SO RELATIVE 
        //LINKS & SCRIPTS WILL WORK AND ACCESS THE ORIGINAL SOURCE AND NOT YOUR 
        //SERVER
        var addOrigBase= document.createElement('base');
        addOrigBase.setAttribute('href',userUrl);
    
   document.getElementById("myFrame").contentDocument.head.appendChild(addOrigBase);

    });

}


</script>
</head>
<body>
<iframe onload="myFrame.frameElement.height = 
(myFrame.frameElement.contentDocument.body.clientHeight)+10" frameborder="" 
height="25px" id="myFrame" name="myFrame" scrolling="no" src="about:blank"  
width="100%"></iframe>
</body>
</html>

function displayRandomImages()   
{  
   var imageArray = [  
   {   
     src: "https://th.bing.com/th/id/OIP.ojZujfOoR_AjIFECmhFxxQHaEK?pid=ImgDet&rs=1",  
     width: "500",  
     height: "400",
     
   },   
   {  
     src: "https://i.pinimg.com/564x/4b/ff/c8/4bffc86197015bf487aca4df437f920f.jpg",
     width: "400",  
     height: "400" 
   },   
   {  
     src: "https://i.pinimg.com/564x/5b/7b/9c/5b7b9c3eebf69b3a051d968550cb2cee.jpg",  
     width: "400",  
     height: "400"  
   },  
   {  
     src: "https://i.pinimg.com/564x/57/c2/78/57c27842ef9d374ed4e55dbbfbc86dd7.jpg",
     width: "400",  
     height: "400"  
    },
    {
     src: "https://i.pinimg.com/564x/06/66/e8/0666e8c9ab12cdb0ddf951231290ae06.jpg",
     width: "400",  
     height: "400"
    },

    {
     src: "https://i.pinimg.com/564x/b2/24/92/b2249242a811f4943f19ad57a486a5c9.jpg",
     width: "400",  
     height: "700"
    },
    {
     src: "https://i.pinimg.com/564x/88/64/fd/8864fd06f29a645f69edd748aaedd341.jpg",
     height: "700",
     width:"800"
    }
    
   

];  
      
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
     
  function getRandomNum(min, max)   
  {  
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  document.body.appendChild(newImage);  
}  
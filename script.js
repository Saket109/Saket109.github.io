// // first of all fetching the nav menu anchor tags
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);

// // Checking for the click
// for(let i = 0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         // We have to prevent the default behaviour of anchor tags
//         event.preventDefault();
//         // now we will collect the target section
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);

//         // Now we will apply the interval
//         var interval = setInterval(()=>{
//             var coordinates = targetSection.getBoundingClientRect();
//             console.log(coordinates.top);
//             if(coordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }else if(targetSectionId == "contact"){
//                 console.log("entered");
//                 if(coordinates.top<=140){
//                     clearInterval(interval);
//                     return;
//                 }
//                 window.scrollBy(0,50);
//             }
//             else{
//             window.scrollBy(0,50);
//             };
//         },15);
//     });
// };





// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;

// for(let i=0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         targetSectionId = this.textContent.trim().toLowerCase();
//         targetSection = document.getElementById(targetSectionId);
//         interval = setInterval(scrollVertically,20,targetSection);
//     });
// };


// function scrollVertically(targetSection){
//     var coordinates = targetSection.getBoundingClientRect();
//     if(coordinates.top<=0){
//         clearInterval(interval);
//         return;
//     }else if(targetSectionId == "contact"){
//         if(coordinates.top<=140){
//             clearInterval(interval);
//             return;
//         }
//         window.scrollBy(0,50);
//     }else{
//     window.scrollBy(0,50);
//     }
// };






var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(let i=0;i<navMenuAnchorTags.length-1;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        
        interval = setInterval(()=>{
            scrollVertically(targetSectionId);
        },20);
    });
};


function scrollVertically(targetSectionId){
    var targetSection = document.getElementById(targetSectionId);
    var coordinates = targetSection.getBoundingClientRect();
    if(coordinates.top<=0){
        clearInterval(interval);
        return;
    }else if(targetSectionId == "contact"){
        if(coordinates.top<=140){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }else{
        window.scrollBy(0,50);
    }
}


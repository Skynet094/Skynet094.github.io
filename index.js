
	var  catList = document.getElementById("catList");
	var displaySegment = document.getElementById("catImageNow");
	var catCounter = document.getElementById("catCount");
	var catNamer= document.getElementById("catName");


	var catNames=["Jack the Cat", "Pat the Cat", "Kat the cat", "Salem the cat", "Snugglepuff the cat"];
	var catImages = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
   var catCounts = [0,0,0,0,0];
   var catCount  = catImages.length;	
   var currentCat = -1; 


	for(i=0; i< catCount; i++){
		
		var elem = document.createElement("li");
		elem.innerHTML  = '<a href="#">'+ catNames[i] + '</a>';
	
		elem.addEventListener( "click", (function(j) {

				return    function() {

					catNamer.innerHTML = "Cat name: " + catNames[j];
					catCounter.innerHTML = "Click Count For this cat: " + catCounts[j];
					displaySegment.src= catImages[j];
					currentCat= j;
				}

		})(i) );  //using the Immediately invoked function expression


	catList.appendChild(elem);				
		}
		
	//	catCounts[j] = catCounts[j]  + 1; 
	
    var viewer = document.getElementById("catViewer");
 
    viewer.addEventListener("click", function () {
    
    		catCounts[currentCat] = catCounts[currentCat]  + 1;
    		catCounter.innerHTML = "Click Count For this cat: " + catCounts[currentCat];
    			
    	
    }, false);
    


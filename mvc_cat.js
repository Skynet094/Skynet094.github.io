var model = {
	
	catInfo: {
		name: "Jack The Cat",
		imageSource:"1.jpg",
		catCount:0
	},
	
	catList: [{
		name: "Pat the Cat",
		imageSource:"1.jpg",
		catCount:0}, 
		
		{
		name: "Kat the Cat",
		imageSource:"2.jpg",
		catCount:0},
		
		 {
		name: "Salem the Cat",
		imageSource:"3.jpg",
		catCount:0},
		
		 {
		name: "Snugglepuff the Cat",
		imageSource:"4.jpg",
		catCount:0}
		
		]	
	
};


var octopus = {
	
	
	
	currentCat:-1,
	
	init: function () {
		
		var viewer = document.getElementById("catViewer");
				
		viewer.addEventListener("click", function () {
			
			
				    		
				    			model.catList[octopus.currentCat].catCount = model.catList[octopus.currentCat].catCount  + 1;
				    			catDisplayView.render(octopus.currentCat);
								catDisplayView.render();
				    						    	
				    }, false);
				    
		
		catListView.render();
	
	},
	
	


	getCurrentCatCount: function () {
		
		
	   if(octopus.currentCat != -1) 
	   		return model.catList[octopus.currentCat].catCount;
	   		
	   return  0;

	},
	
	getCatList: function () {
		
		return model.catList; 
	}
		
	
	 




};


// functionalities:   AddCatToList,  
//catListView, catDisplayView 


var catListView = {

	
	render: function(){
		
		var  catList = document.getElementById("catList");	
		var displaySegment = document.getElementById("catImageNow");
		var catNamer= document.getElementById("catName");	
		var catCounter = document.getElementById("catCount");
		
		
		var catListData= octopus.getCatList();   


	   var catCount  = catListData.length;
   
		
   
		for(i=0; i< catCount; i++){
		
		var elem = document.createElement("li");
		elem.innerHTML  = '<a href="#">'+ catListData[i].name + '</a>';
	
		elem.addEventListener( "click", (function(j) {

				return    function() {

					catNamer.innerHTML = "Cat name: " + catListData[j].name;
					catCounter.innerHTML = "Click Count For this cat: " + catListData[j].catCount;
					displaySegment.src= catListData[j].imageSource;
					octopus.currentCat= j;
					
					console.log(octopus.currentCat);
				}

		})(i) );  //using the Immediately invoked function expression


	catList.appendChild(elem);				
		}
	
	}


};




var catDisplayView = {
	
	render: function(){		
				   
					var catCounter = document.getElementById("catCount");
			  		catCounter.innerHTML = "Click Count For this cat: " + octopus.getCurrentCatCount();				   
				 					
					}

};
	

octopus.init();

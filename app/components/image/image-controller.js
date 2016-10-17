(function(){
function ImageController(){	
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imageService = new ImageService();

	//calling function to update imageService
	imageService.getImage(updateImage)

	//function to update DOM for imageService
	function updateImage(data){
		console.log(data)
		var results = JSON.parse(data)
		var imageElem = $('#body')
		var imageTemplate =`
		<style>body{background-image:url("${results.url}");}</style>
		`
		imageElem.append(imageTemplate);
	}

}

ImageController()

}())

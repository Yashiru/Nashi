# Nashi

HOW TO USE SERVICES


SpeechRecognition service: 
	#this is for recognize user speech#
	
	
	-You have to declare cordova module (just after imports) as : 
		"declare var SpeechRecognition: any;"


	-Initialise SpeechRecognition object as :
		this.recognition = new SpeechRecognition();
		this.recognition.lang = 'fr-FR'; // en-US
		this.recognition.onnomatch = (event => { // on no match callback
			console.log('No match found.');
		});
		this.recognition.onerror = (event => { // on error callback
			console.log('Error happens.');
		});
		this.recognition.onresult = (event => { // on result callback
			if (event.results.length > 0) { // event.results[0][0].transcript is the String return from API
			  this.speekResult = event.results[0][0].transcript;
			}
		});


	-Use the start function to begin recognition (he will stop him self automaticly)
		this.recognition.start();




Yummly service: 

	-Import service into your page as :
		"import {Yummly} from '...'"
		
	-Declare a yummly in your page's constructor parameters :
		constructor(..., private yummly: Yummly,...)
		{
		...
		}
	
	-Get recipe from an recipe id, (use getRecipeFromId function with string id parameter and callback function)
		this.yummly.getRecipeFromId("", (res)=>{
		  let myRecipe = res.json();
		})
		
	-Get recipe from ingrediants, (use getRecipeFromIngrediant function with ingredients and callback function)
		let ingredients: Ingredient[] = [...] // your ingrediant list
		this.yummly.getRecipeFromIngrediant(ingredients, (res)=>{
			let recipes = res.json();
		});
		
		
NashiBot service:

	-Import service as always import ... from ... and declare new variable in constructor to use the service
	
	-Say message to user (By google text to speech)
		nashiBot.speak(MY_STRING_MESSAGE, CALLBACK); // callback is optional, yu can call the function without callback
		
	-Send message to wit bot
		nashiBot.sayToBot(MY_STRING_MESSAGE);

# HOW TO USE SERVICES


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
	
	-Get recipes from a recipe name, (use getRecipesFromName function with string id parameter and callback function)
		this.yummly.getRecipeFromId("MY_RECIPE_NAME", (res)=>{
		  let myRecipe = res.json(); //return all recipes with this name
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
		
		
Auth service :

	-Import service as always import ... from ... and declare new private or public variable named "auth" in constructor to use the service
	-function auth.authenticated() return a boolean to specifie if user is logged
	-The auth.login() function opens the authentication modal to connect the user
	-the auth.logout() function logout the user :)


# HOW TO USE COMPONENTS


CircleNashi component :
	- Import component
	
	- include him into your html view as :
		  <circle-nashi [entry(s)Text]="text" [fontSize]="fontSize" [animation]="YOUR_ANIMATION_NAME"></circle-nashi>
	you can always change YOUR_ANIMATION_NAME in your controller, that will change directly css animation
	[entryText] = simple string to show in text-helper component
	[entrysText] = String array to show in text-helper component
	[fontSize] = you know that thing :)
	
TextHelper component :
	- Import component
	
	- include him in your html view as :
		<text-helper [entryText]="entryText" [entrysText]="entrysText" [fontSize]="fontSize"></text-helper>
	[entryText] = simple string to show in text-helper component
	[entrysText] = String array to show in text-helper component
	[fontSize] = you know that thing :)
		

	


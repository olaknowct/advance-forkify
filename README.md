# Advance-Forkify

Link: https://advance-forkify-chris.netlify.app/

## Description

- The project serves as a recipe reference for any kind of food, it gives you as well the details on how to cook and etc. 

## How it works
1. Search for any food that you most likely want to cook.
2. Search results gives you a plenty of choices  
3. Choose any from the search results for it to display its recipe and "how to cook" details
4. Recipe are provided but for you to get its "how to cook" step by step details, source/ref are provided as well.
5. Bookmarking of a recipe gives you ability to easily navigate thru without having to search.
6. Capable of to adding or saving your own recipe. This details are exclusive. 

## About

- The project is used for educational purposes only, its part of the lesson i took from Jonas.
- As part of my learnings and would benefit me, I've listed down here **(See below section)** all the Pseudocode, Summary and Feautures from this Project
- The project contains overall concept we've practiced right from the start of course 
- Significant concept applied from this project are the following
  - 4 pillars of OOP
    - Encapsulation
    - Abstraction
    - Polymorphism
    - Inheritance
  - ES6 Class for inheritance instead of prototype inheritance
    - Common methods/properties are place to Parent Class, in this way child Class inherit it.
  - MVC
    - Model 
      - Handles the business logic, states, CRUD
    - View 
      - Handles all presentation logic by means of rendering dynamic html, is also responsible for registering/listening of events
    - Controller  
      - Application Logic
      - Bridge between model and view, handles as well UI events and dispatched the task to view and model
      - Uses abstraction
   - Async Await
   - publisher-subcriber pattern


### Features
- Search of Food Recipe
- Bookmark
- Add Recipe

### Pseudocode

	-  Searching of Food Recipe
		○ Listen to search query from the input
		○ when submit event listener triggered do the following on background (async not blocking) 
			§ render spinner on results view (html container results data from search query)
			§ get search query
				□ Guard close if query empty
			§ Await API Fetch query results
				□ Store data results to state
			§ Clear spinner and render Results View
			§ Render pagination buttons based from the state (see paginating… pseudo)
			§ Add error handler for any error that might occur
	- Displaying of Recipe Details based from the selected and Displaying Bookmarked Recipe
		○ Listen when page load and hash change (link)
		○ When load and hash-change event listener triggered
			§ Generate markup based on new state and render Bookmark View
			§ Get hash using object window as it is available
				□ Guard close for falsy hash value
			§ Render spinner on recipe view
			§ Update results view 
				□ Create new markup based from state data and number of data per page
				□ Compare new element from the markup versus current element from the DOM
				□ Update only the element changed for attributes and content
				□ Guard Closed if data is empty (load event)
			§ Await API Fetch recipe based from the hash id
			§ Configure state based from the data results
			§ Clear spinner and render Recipe View 
			§ Add error handler for any error that might occur
	- Paginating of results state (data from fetch query)
		○ Rendering of pagination view based from the state
			§ Show only next button 
				□ If current page is 1 and computed total pages is greater than one
			§ Show previous and next button
				□ If current page is less than computed total pages
			§ Show previous button
				□ If current page equals to computed total pages and total pages is greater than 1
		○ Listen to click event of pagination buttons (could be previous or next buttons)
		○ When click events triggered do the following on background (async)
			§ Render results based from the page number passed from DOM and state
	- Update Servings of selected recipe
		○ Updating of servings don’t persist from the API 
		○ Listen to click events of buttons responsible for updating the servings (minus and plus button)
		○ When Click Events Triggered do the following on background (API)
			§ Update State recipe ingredients using generic formula (quantity * new servings /  state servings)
			§ Update Recipe View
				□ Create new markup based from state data and number of data per page
				□ Compare new element from the markup versus current element from the DOM
				□ Update only the element changed for attributes and content
				□ Guard Closed if data is empty (load event)
	- Bookmark/Unbookmarked a food recipe 
		○ Listen to click events for bookmark button 
		○ When click event triggered, do the following on background (sync)
			§ Update state bookmarked recipe
				□ Toggle the state (true or false) 
				□ Add bookmarked if state bookmarked is false
					□ Persist state bookmarked to local storage API
				□ Delete bookmarked if state bookmarked is true
					□ Persist state bookmarked to local storage API
				□ Update Recipe View
					□ Create new markup based from state data and number of data per page
					□ Compare new element from the markup versus current element from the DOM
					□ Update only the element changed for attributes and content
					□ Guard Closed if data is empty (load event)
			§ Generate markup based on new state and render Bookmark View
	- Uploading of your own recipe
		○ Show window/modal when click event for add recipe button triggered
		○ Hide window/modal when click event occur for close button and outside of window/modal
		○ Listen to submit event of add recipe form
		○ When submit event triggered
			§ Get form data
			§ Render Spinner on Add Recipe View
			§ Await API POST form data
				□ Store, data returned from API POST, State Recipe
				□ Tagged uploaded recipe as bookmarked on State
				□ Persist State Bookmarked from local storage API
			§ Render Recipe View based from the new state
			§ Render success message on Add Recipe View
			§ Render Bookmark View based from the new state
			§ Changed hash id in URL without reloading using window method
			§ Closed modal after a certain of time
	
			

### Summary
- It uses an API to get List of food recipe. 
- With the help of the Asynchrounous Javascript, you dont need to load the page everytime an http request happens 
- An Asynchrounous Javascript is way of rendering all http request to Browser background API , it does not happen on your appication.
- MVC pattern and OOP Architecture Implementation helps the codebase maintainable and readable. therefore adopting new changes and updates can be easily implemented
- Using ES6 Classes makes inheritance easier to implement. under the hood, it simply sugar coats the prototypal inheritance.


### API Used
	- https://forkify-api.herokuapp.com/v2


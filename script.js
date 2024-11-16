// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
const balloon = document.getElementById("balloon"); // Get ballon element from the page 
let fontSize = 20; // Start with the font size of 20px
balloon.style.fontSize = fontSize + "px"; // apply the initial size to the balloon
const maxFontSize = 80; // The balloon will explode if it passes this size 


function handleKeyDown(event) { //  A function that Handles what happens when keys are pressed 
  if (event.key === "ArrowUp") { // Check if the up arrow key is being pressed
    fontSize *= 1.1; // Balloon  gets bigger by 10%
    if (fontSize > maxFontSize) { // Too check if the  balloon is too big
      explodeBalloon(); // Call the explode function
      return; // Stop the function because the balloon is gone
    }
    balloon.style.fontSize = fontSize + "px"; // Apply the new size to the balloon
  } else if (event.key === "ArrowDown") { // Check if the down arrow key was pressed
    fontSize *= 0.9; // Make the balloon smaller by 10%
    balloon.style.fontSize = fontSize + "px"; // Apply the new size to the balloon
  }
  if (event.key === "ArrowUp" || event.key === "ArrowDown") { //  Stop the page from scrolling when using only the arrow keys 
    event.preventDefault(); // Stop the default browser behavior which is scrolling
  }
}

function explodeBalloon() {   // A  Function that handles when the balloon explodes
  balloon.textContent = "💥"; // Replaces the balloon with an explosion emoji
  document.removeEventListener("keydown", handleKeyDown); // Stop listening for key presses
}
document.addEventListener("keydown", handleKeyDown); // Listen for key presses and run the handleKeyDown Function 

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
const tabs = document.querySelectorAll("#tabbed-layout ul li a");  // all the tab links within the unordered list in #tabbed-layout
const tabContents = document.querySelectorAll("#tabbed-contents div");  // all the div elements within #tabbed-contents that hold the tab content

showTab(0);  // Show first tab content by default

function showTab(index) {  //  A functions that will display the content of the selected tab 
  tabContents.forEach((content, i) => {  // Loop through each tab content div 
    content.style.display = i === index ? "block" : "none";  // If the index matches the selectedTabIndex then it will show the content or hide it
  });
}

tabs.forEach((tab, index) => {  // Loop through  each tab link
  tab.addEventListener("click", (event) => {  // adds an event listener to handle click events on each tab
    event.preventDefault();  // Prevent default link behavior which avoids page reload or scrolling 
    showTab(index);  // calls for the showTab function to display the content of the clicked tab by passing  tabs index 
  });
});

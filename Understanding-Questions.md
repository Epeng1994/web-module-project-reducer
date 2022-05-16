# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* const string is placed into addOne to return {type:add_one} object
* dispatch the obj, which is passed into reducer function
* function takes in current state, and action obj with action/payload
* passed into switch to see which action matches
* finds add_one, takes shallow copy of current state and rewrites total with previous total +1
...

* TotalDisplay shows the total plus 1.

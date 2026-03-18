## Welcome To <span style="color: #22c55e;">Job Application Tracker </span>



# A simple and responsive Job Application Tracker web app built using HTML, Tailwind CSS, DaisyUI, and JavaScript.
# This project helps users organize and track their job applications by categorizing them into different stages such as All, Interview, and Rejected.

## 🚀 Features

## Application Statistics
- Displays total number of applications
- Tracks Interview and Rejected counts

## Tabbed Navigation
- Filter jobs by:
- All
- Interview
- Rejected

## Interactive UI
- Dynamic button states (active/inactive)
- Smooth section switching without page reload

## Job Cards
- Company name, role, location, salary

- Status indicator (e.g., Not Applied)

- Action buttons:

    - Mark as Interview

    - Mark as Rejected

    - Delete Job

## Responsive Design
- Works across mobile, tablet, and desktop
--- 

## Functionalities
- Clicking on Interview button: 
    - Moves the job to Interview tab
    - Updates status to Interview
    - Increases Interview count in dashboard

- Clicking on Rejected button: 
    - Moves the job to Rejected tab 
    - Updates status to Rejected
    - Increases Rejected count in dashboard

- Toggle functionality: 
    - Switch between Interview and Rejected 
    - Dashboard count updates dynamically
    - Tab-wise job count is displayed

- Clicking on Delete button: 
    - Removes card from UI
    - Updates dashboard counts dynamically
    - Removes from main section


---

# Technologies Used
- HTML5
- Tailwind CSSmeaningful commits in your project.  
- DaisyUI
- JavaScript (DOM Manipulation)

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: Finds a specific element by its id. If not found, it returns null. All ids must be unique.

getElementsByClassName: Finds specific element by its class name.It return a HTML collection.

querySelector: returns the first element that matches a CSS selector.

querySelectorAll: returns all the elements that matches CSS selector.


### 2. How do you create and insert a new element into the DOM?

To create new element we use createElement() in DOM.
Example:
const newElement = document.createElement('div');

insert element
example:
newElement.id= "myNewDiv";

### 3. What is Event Bubbling? And how does it work?

When an event happens (like clicking a button),the element is triggered first then it moves upward to its parent and grandparent.It moves upward like bubbling thats why its called Event Bubbling.

Example: If any event happens in child element,the child element triggered first then it move to its parent.
Here child execute first then serially parent,grand parent will be executed.
### 4. What is Event Delegation in JavaScript? Why is it useful?

Delegation means handing over responsibility. Normally we add event listeners to each element individually. But in event delegation, we add a single event listener to a parent element to handle events for multiple child elements.
his method is useful when:
We don’t know the exact number of elements
We need to add event listeners dynamically
New elements are added (through a button)and they still work without adding new listeners.
It also easy to maintain,help to faster execution.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default behavior  of browsers.
stopPropagation() stops event Bubbling.



--- 
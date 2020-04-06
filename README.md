This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Agenda

![Image description](/public/agenda-preview.PNG)

### External connections:      

"bootstrap": "^4.3.1",      
"axios": "^0.19.0",           
"antd": "^3.19.6",        
"js-server": "^1.0.1",         
"json-server": "^0.15.0",            
"react-bootstrap": "^1.0.0-beta.9",           

## `bootstrap`         
Frontend Component Library       
Used to handle layout and components like         
See here ->  https://getbootstrap.com/ && https://react-bootstrap.github.io/        

## `antd`         
Frontend Component Library       
Used to handle layout and components             
See here ->  https://getbootstrap.com/ && https://react-bootstrap.github.io/  

## `axios`          
Used to handle HTTP req       
See here -> https://www.npmjs.com/package/axios      

## `JSON Server`          
Used to fake REST API with zero coding             
See here -> https://www.npmjs.com/package/json-server    

## Description

In `App` component before the component mount i use a GET to obtain data from my fake DB and put it in my state.    
After that with a ternary operator a map function loop through ordine state, and if empty return "no data", else return `Carta` with data inside.         
In `Carta` component we can find our data displayed, `Button` to DELETE the `Card` and POST data for creating a `Card` as "richiedi servizi".    
In `Card` footer there is a time counter as state to show timing after creation.     
         
Using `JSON-Server` allow to fake REST API req tho POST, GET and DELETE our data and `Card`.     
     
After a DELETE req, i have to re-render my components or React will not show the changes server-side. 



# Script

In the project directory, you can run:      

### `npm run server`

Runs the fake `REST API JSON Server`<br>     

## You can see the server running in terminal.      

`Resources` http://localhost:3000/placeholder          
`Home` http://localhost:3000   

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


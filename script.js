//Declaring DOM Variables for Hamburger menu
let ham = document.querySelector('.menu')
let cross = document.querySelector('.cross')
let sidebar = document.querySelector('.sidebar')
// Show menu and Hide hide buttonn
ham.style.display =  'block'
sidebar.style.display =  'none'
cross.style.display =  'none'

//Function which will show the sidebar after clicking to the menu
//Function which will show the sidebar after clicking to the menu
ham.addEventListener('click',()=>{
    
    // cross.style.display =  'block'

        sidebar.style.display =  'block'

    ham.style.display =  'none'
    cross.style.display =  'block'
    sidebar.style.transition = "linear 2s";    
})
cross.addEventListener('click',()=>{
    
    sidebar.style.display =  'none'
    cross.style.display =  'none'
    ham.style.display =  'block'
})

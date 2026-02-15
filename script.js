const buttons = document.querySelectorAll ('.button')
buttons.forEach(function(button){
    button.addEventListener('click',function(element) {
        if (element.target.id === 'white'){
            document.body.style.backgroundColor = element.target.id;
        }


        else if (element.target.id === 'blue'){
            document.body.style.backgroundColor = element.target.id;
        }


        else if (element.target.id === 'yellow'){
            document.body.style.backgroundColor = element.target.id;
        }   


        else if (element.target.id === 'red'){
            document.body.style.backgroundColor = element.target.id;
        } 
        
        
        else if (element.target.id === 'purple'){
            document.body.style.backgroundColor = element.target.id;
        }   


        else if (element.target.id === 'green'){
            document.body.style.backgroundColor = element.target.id;
        }   


        else if (element.target.id === 'orange'){
            document.body.style.backgroundColor = element.target.id;
        }
        else if (element.target.id === 'grey'){
            document.body.style.backgroundColor = element.target.id;
        }   
        
        

    });
});
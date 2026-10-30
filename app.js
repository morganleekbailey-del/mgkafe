

// validations

function validateForm(){
        const name = document.getElementById('txtName');

        const email = document.getElementById('txtEmail');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phone = document.getElementById('txtPhone');
        const country = document.getElementById('txtCountry');

        const form = document.getElementById('form');
        const error = document.getElementById('error');

        form.addEventListener('submit', (e) => {

            let messages = []
            error.innerText = ''; 

            if (name.value === '' || name.value == null){
                messages.push('Name is required!')
                
            }
            

            if (!email.value || email.value.trim() === '') {
            messages.push('Email is required!');
            } else if (!emailPattern.test(email.value)) {
                messages.push('Invalid email address!');
            }

            if (phone.value === '' || phone.value == null){
                messages.push('Phone number is required!')
            }
                
                
            if (country.value === '' || country.value == null){
                messages.push('Country is required!')
            }

            if (messages.length > 0) {
            e.preventDefault();
            error.innerText = messages.join(', ');
        } else {

            alert('Form submitted successfully!');

        }


        
        })

        
}

        

//expand text

function Show(){
    
   const clickedButton = window.event.target;

    const currentCard = clickedButton.closest('.card');
    
    
    const description = currentCard.querySelector('p');
    const listedDesc = currentCard.querySelector('ul');

   
    description.classList.toggle('hide');
    listedDesc.classList.toggle('hide');

    
    if (description.classList.contains('hide')) {
        clickedButton.textContent = 'Ingredients';
    } else {
        clickedButton.textContent = 'Collapse';
    }

    if ( listedDesc.classList.contains('hide')) {
        clickedButton.textContent = 'Ingredients';
    } else {
        clickedButton.textContent = 'Collapse';
    }

    
}


    


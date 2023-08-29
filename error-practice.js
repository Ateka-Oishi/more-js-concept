function checkAge(){
    // console.log('button-clicked');
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
       console.log(bBaria); 

    }

    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'Something wrong'
    }

    finally(){

    }
    console.log(11111);
}
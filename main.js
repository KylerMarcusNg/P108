function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  //Add teachale machine link
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-4JdTfwdA/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  //Add classifier.classify(gotResults);
  classifier.classify(gotResults);
  
}
// define varaibles dog and cat 
//Assign the value as 0
var dog = 0 ;
var cat = 0 ;

//Add two parameters in gotResults(error, results)
function gotResults(error, results ) {

//Check if there is an error, and inside this if block, write code to print the error on the console.

  if (error) {
    console.error(error);
  } 
  
  
  
  else {
    //Print the results (which is coming from the modal) variable on the console.
    console.log(results);

//Create 3 random values which are between 1 to 255
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1; 
    random_number_b = Math.floor(Math.random() * 255) + 1; 


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DXxCaiFPX/model.json', modelReady);  
}
 
function modelReady(){
 classifier.classify(gotResults);   
}
function gotResults(error,results)
{
  if(error) 
  {
    console.error(error);
  }
  else 
  {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence * 100).toFixed(2) +" %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    
    img = document.getElementById("ear_1");
    img1 = document.getElementById("dog_1");
    img2 = document.getElementById("cat_2");
    img3 = document.getElementById("human_3");
    img4 = document.getElementById("snake_4");

    if(results[0].label == "bark") 
    {
      
      img1.src = "dog.gif";
    }
   elseif(results[0].label == "meow\purr") 
    {

      img2.src = "pusheen.gif";
    
    }
    elseif(results[0].label == "hiss") 
    {
    
      img4.src = "snake.gif";

    }
    elseif(results[0].label == "Background Noise")
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}


Webcam.set({
     width:300,
     height: 300,
     img_format: 'png',
     png_quality: 90,

     constraints: {
          facingMode: "left"
     }
});

Webcam.attach('#camera');

function take_snapshot(){
     Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
}

console.log("Ml5 Version : ", ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
     console.log("ModelLoaded!");
}

function check(){
     img = document.getElementById('captured_image');
     classifier.classify(img, gotResult);
}

function gotResult(error, results){
     if(error){
          console.error(error);
     }
     else{
          console.log(results);
          document.getElementById('object_name').innerHTML = results[0].label;
     }
}
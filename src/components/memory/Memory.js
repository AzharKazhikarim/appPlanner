import React,{Component} from 'react'
import firebase from 'firebase'


export class Memory extends Component{

  upload = ()=>{
    var image = document.getElementById("imageInput").files[0];
    var imageName = image.name;
      //  var user = firebase.auth().currentUser;
  
    var storageRef =  firebase.storage().ref('images/' + imageName);
    var uploadTask = storageRef.put(image);
    var userK = firebase.auth().onAuthStateChanged;
    userK =(user=>{
        if(user){
            firebase.storage.ref('images/' + imageName).getDownloadURL().then(imgURL=>{
                image.src=imgURL;
            })
        }
})
    uploadTask.on('state_changed',(snapshot)=>{
            var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log("uploaded " + progress);
    },(error)=>{
        console.log(error);
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
            console.log(downloadURL);
        })
    }
    )
}

        render(){
    return(
       <>
        <h1>Hello</h1>
    <input
    type="file"
    id="imageInput"
   />
    <button onClick={this.upload} type="button" >Upload</button>
      </>
    )
        }
    
}
export default Memory;
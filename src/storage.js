
//import firebase from "./firebase/app";


// let storage = ''
// document.addEventListener('DOMContentLoaded', event => {
// const firebaseConfig = {
//         apiKey: "AIzaSyAF25ZxLYwdSh35IfI3ixccVmwZxVW3CXY",
//         authDomain: "image-slider-ef1ee.firebaseapp.com",
//         projectId: "image-slider-ef1ee",
//         storageBucket: "image-slider-ef1ee.appspot.com",
//         messagingSenderId: "1004338156549",
//         appId: "1:1004338156549:web:cf8c72d3648a42fb68b86c"
//       };

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//  } else {
//     firebase.app(); // if already initialized, use that one
//  }

  
// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();

// // Create a storage reference from our storage service
// const storageRef = storage.ref();

// // Create a child reference
// const imagesRef = storageRef.child('images');
// // imagesRef now points to 'images'

// // Child references can also take paths delimited by '/'
// const spaceRef = storageRef.child('images/img1.jpg');
// // spaceRef now points to "images/space.jpg"
// // imagesRef still points to "images"

// console.log(spaceRef)


// // db = firebase.firestore()
// // const books = db.collection('books')
// // const book0 = books.doc('0')

// // book0.get()
// //      .then(doc => {
// //       const data = doc.data();
// //       console.log(data.title)
// //           })

// //       book0.onSnapshot(doc => {
// //       const data = doc.data();
// //       console.log(data.title)
// //     })
// // });
// })

// export default storage;
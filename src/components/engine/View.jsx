// import React from 'react'
// import { Container, Row, Col } from 'reactstrap'

// const Construct = () => {
//     window.onload = function(){
//             Engine("cloak", 2);
//             Engine("dummy", 3); 
//             Engine("hair", 2);
//             Engine("eyes", 3);
//             Engine("beard", 3);
//             Engine("pants", 4);
//             Engine("clothes", 5);
//             Engine("armor", 6);
//             Engine("helm", 7);
//             Engine("extra", 3);
//             Engine("armdef", 3);
//             Engine("gloves", 3);
//             Engine("legdef", 1);
//             Engine("boots", 1);
//         }
// }

// function Engine(element, max_items){
//     let core = "../assets/elements";
//     let image = new Image();
//     let number = 0;  
//     let path = `${core}/male_medieval/${element}/`
//     let name = `${element}_` + number + ".png";
//     image.src = path + name;
//     image.onload = function(){
//         drawElement();
//     }
//     indicator();
    
//     //------------------------------------------------------------------
//     function drawElement(){
//         let canvas = document.getElementsById('canvas__'+`${element}`);
//         let ctx = canvas.getContext('2d');
//         ctx.clearRect(0, 0, 196, 196);
//         ctx.drawImage(image, 0, 0, 196, 196);
//     }

//     function indicator(){
//         let label = document.getElementById('label__'+`${element}`).innerHTML = `${element}: ${number} of ${max_items}`;
//     }
    
//     function getImage(){
//         let mainCanvas = document.getElementById("main__canvas");
//         let main_ctx = mainCanvas.getContext('2d');
//         main_ctx.drawImage(image, 0, 0, 196, 196);
//         }
    
//     function clearImage(){
//         let mainCanvas = document.getElementById("main__canvas");
//         let main_ctx = mainCanvas.getContext('2d');
//         main_ctx.clearRect(0, 0, 196, 196); 
//         }

//     let extBtn = document.getElementById('extBtn');
//         extBtn.addEventListener("click", () => {
//         clearImage(); 
//         setTimeout(getImage, 100)
//     });

//     let genBtn = document.getElementById('genBtn');
//         genBtn.addEventListener("click", () => {
//             number = Math.floor(Math.random() * (max_items + 1));
//             console.log(number)
//             let path = `${core}/male_medieval/${element}/`
//             let name = `${element}_` + number + ".png";
//             image.src = path + name;
//             indicator();
//     });

//     //-------------------------------------------------------------------
//     let prevBtn = document.getElementById('prevBtn__'+`${element}`);
//     prevBtn.addEventListener("click", () => {
//         if(number > 0){
//             number -= 1;
//         } else if (number < 0){
//             number = 0;
//         }
//         console.log(number)
//         let path = `${core}/male_medieval/${element}/`
//         let name = `${element}_` + number + ".png";
//         image.src = path + name;
//         indicator();
//     });

//     //----------------------------------------------------------------------
//     let nextBtn = document.getElementById('nextBtn__'+`${element}`); 
//     nextBtn.addEventListener("click", () => {
//         if(number < max_items){
//             number += 1;
//         }else if (number >= max_items){
//             number = max_items;
//         };

//         console.log(number)
//         let path = `${core}/male_medieval/${element}/`
//         let name = `${element}_` + number + ".png";
//         image.src = path + name;
//         indicator();
//         });        
        
//     }


// const View = () => {
//   return (
//      <section className='editcard__section'>
//         <Container>
//           <Row>
//             <Col>
//               <div id="canvasBox">
//                 <canvas id="canvas__cloak" width="196" height="196"></canvas>
//                 <canvas id="canvas__dummy" width="196" height="196"></canvas>
//                 <canvas id="canvas__beard" width="196" height="196"></canvas>
//                 <canvas id="canvas__hair" width="196" height="196"></canvas>
//                 <canvas id="canvas__eyes" width="196" height="196"></canvas>
//                 <canvas id="canvas__pants" width="196" height="196"></canvas>
//                 <canvas id="canvas__clothes" width="196" height="196"></canvas>
//                 <canvas id="canvas__helm" width="196" height="196"></canvas>
//                 <canvas id="canvas__armor" width="196" height="196"></canvas>
//                 <canvas id="canvas__extra" width="196" height="196"></canvas>
//                 <canvas id="canvas__legdef" width="196" height="196"></canvas>
//                 <canvas id="canvas__boots" width="196" height="196"></canvas>
//                 <canvas id="canvas__armdef" width="196" height="196"></canvas>
//                 <canvas id="canvas__gloves" width="196" height="196"></canvas>
//               </div>

//               <div id="canvasButtons">
//                   <button id="genBtn">Generate</button>
//                   <button id="extBtn">Get Image</button>
//               </div>
//             </Col>
        
//             <Col>
//               <div id="selection__menus">
//                   <div id="cloak">
//                       <button id="prevBtn__cloak"> Left </button>
//                       <label id="label__cloak"></label>
//                       <button id="nextBtn__cloak"> Right </button>
//                   </div>
//                   <div id="dummy">
//                       <button id="prevBtn__dummy"> Left </button>
//                       <label id="label__dummy"></label>
//                       <button id="nextBtn__dummy"> Right </button>
//                   </div>
//                   <div id="hair">
//                       <button id="prevBtn__hair"> Left </button>
//                       <label id="label__hair"></label>
//                       <button id="nextBtn__hair"> Right </button>
//                   </div>
//                   <div id="eyes">
//                       <button id="prevBtn__eyes"> Left </button>
//                       <label id="label__eyes"></label>
//                       <button id="nextBtn__eyes"> Right </button>
//                   </div>
//                   <div id="beard">
//                       <button id="prevBtn__beard"> Left </button>
//                       <label id="label__beard"></label>
//                       <button id="nextBtn__beard"> Right </button>
//                   </div>
//                   <div id="pants">
//                       <button id="prevBtn__pants"> Left </button>
//                       <label id="label__pants"></label>
//                       <button id="nextBtn__pants"> Right </button>
//                   </div>
//                   <div id="clothes">
//                       <button id="prevBtn__clothes"> Left </button>
//                       <label id="label__clothes"></label>
//                       <button id="nextBtn__clothes"> Right </button>
//                   </div>
//                   <div id="boots">
//                       <button id="prevBtn__boots"> Left </button>
//                       <label id="label__boots"></label>
//                       <button id="nextBtn__boots"> Right </button>
//                   </div>
//                   <div id="gloves">
//                       <button id="prevBtn__gloves"> Left </button>
//                       <label id="label__gloves"></label>
//                       <button id="nextBtn__gloves"> Right </button>
//                   </div>
//                   <div id="helm">
//                       <button id="prevBtn__helm"> Left </button>
//                       <label id="label__helm"></label>
//                       <button id="nextBtn__helm"> Right </button>
//                   </div>
//                   <div id="legdef">
//                       <button id="prevBtn__legdef"> Left </button>
//                       <label id="label__legdef"></label>
//                       <button id="nextBtn__legdef"> Right </button>
//                   </div>
//                   <div id="armdef">
//                       <button id="prevBtn__armdef"> Left </button>
//                       <label id="label__armdef"></label>
//                       <button id="nextBtn__armdef"> Right </button>
//                   </div>
//                   <div id="armor">
//                       <button id="prevBtn__armor"> Left </button>
//                       <label id="label__armor"></label>
//                       <button id="nextBtn__armor"> Right </button>
//                   </div>
//                   <div id="extra">
//                       <button id="prevBtn__extra"> Left </button>
//                       <label id="label__extra"></label>
//                       <button id="nextBtn__extra"> Right </button>
//                   </div>
//               </div>
//             </Col>

//             <Col>
//               <canvas id="main__canvas" width="196" height="196"></canvas>
//             </Col>

//           </Row>
//         </Container> 
//       </section>
//   )
// }

// export default View
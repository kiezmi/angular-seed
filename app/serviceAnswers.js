import answers from './answers';

// Usar como objeto .factory
// function magicService() {
//   return {
//     responde: (question) => {
//       let randomIndex = (Math.floor(Math.random() * answers.length));
//       console.log(answers[randomIndex]);
//       return {
//         question,
//         answer: answers[randomIndex]

//       }
//     }
//   }
// }


// Usar como clase .service
class magicService {
  responde(question) {
    let randomIndex = (Math.floor(Math.random() * answers.length));
    console.log(answers[randomIndex]);
    return {
      question,
      answer: answers[randomIndex]

    }
  }
}


// Funcion vieja
// function magicService() {
//   this.responde = function(question){
//         let randomIndex = (Math.floor(Math.random() * answers.length));
//         console.log(answers[randomIndex]);
//         return {
//           question,
//           answer: answers[randomIndex]
    
//         }
//       }
// }

export default magicService

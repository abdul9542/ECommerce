import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';

const INITIAL_STATE = {
    cardetails:[
      {
        name: "Leanne Graham",
        username: "Bret",
         images:[dp1,dp2,dp3], email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        price:"229",selected:false,phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        name: "Ervin Howell",
        username: "Antonette",
         images:[dp2,dp1,dp3], email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        price:"229",selected:false,phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        name: "Clementine Bauch",
        username: "Samantha",
         images:[dp1,dp2,dp3], email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        price:"229",selected:false,phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        name: "Patricia Lebsack",
        username: "Karianne",
         images:[dp3,dp2,dp1], email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990",
          },
        },
        price:"229",selected:false,phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services",
        },
      },
      {
        name: "Chelsey Dietrich",
        username: "Kamren",
         images:[dp2,dp1,dp3], email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342",
          },
        },
        price:"229",selected:false,phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems",
        },
      },
      {
        name: "Leanne Graham",
        username: "Bret",
         images:[dp1,dp2,dp3], email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        price:"229",selected:false,phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        name: "Ervin Howell",
        username: "Antonette",
         images:[dp3,dp2,dp1], email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        price:"229",selected:false,phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        name: "Clementine Bauch",
        username: "Samantha",
         images:[dp2,dp1,dp3], email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        price:"229",selected:false,phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        name: "Patricia Lebsack",
        username: "Karianne",
         images:[dp1,dp2,dp3], email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990",
          },
        },
        price:"229",selected:false,phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services",
        },
      },
      
      {
        name: "Ervin Howell",
        username: "Antonette",
         images:[dp3,dp2,dp1], email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        price:"229",selected:false,phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        name: "Clementine Bauch",
        username: "Samantha",
         images:[dp2,dp1,dp3], email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        price:"229",selected:false,phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        name: "Patricia Lebsack",
        username: "Karianne",
         images:[dp1,dp2,dp3], email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990",
          },
        },
        price:"229",selected:false,phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services",
        },
      },
      {
        name: "Chelsey Dietrich",
        username: "Kamren",
         images:[dp3,dp2,dp1], email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342",
          },
        },
        price:"229",selected:false,phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems",
        },
      },
        
    ]
}

const cardReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CARD_DATA':
            // const cards=state.cardetails;
            console.log('cardetails',state.cardetails)
            const temp = action.payload;
            const cards = [...state.cardetails, temp] 
            console.log("cards given", action.payload)
            console.log("cards saved", cards)
            return{
                ...state,
                cardetails:cards
            }
        case 'SELECT_CARD':
          console.log("card selected", state.cardetails[action.payload].selected )
            let card= state.cardetails[action.payload];
            card.selected=true;
            console.log("selected", card)
            const final = [...state.cardetails];
          return{
            ...state,
                cardetails:final

          }
            default: return state
    }
}
export default cardReducer;
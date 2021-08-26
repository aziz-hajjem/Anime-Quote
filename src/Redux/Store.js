import { createSlice,configureStore } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';

const intialeQuotesState=[{"id":uuid(),"anime":"D.Gray-man","character":"Allen Walker","quote":"Our injuries will heal as long as we're alive. But the scars will remain.",
url:"https://images.alphacoders.com/260/thumb-1920-260421.jpg"},
{"id":uuid(),"anime":"Dragon Ball","character":"Frieza","quote":"There are three things I cannot tolerate: cowardice, bad haircuts, and military insurrection. It is very unfortunate that our friend Vegeta possesses all three of these.",
url:"https://images7.alphacoders.com/878/thumb-1920-878515.jpg"}
,{"id":uuid(),"anime":"Code Geass: Lelouch of the Rebellion","character":"Lelouch Lamperouge","quote":"Don't mistake borrowed power for your own ability!",
url:"https://images4.alphacoders.com/775/thumb-1920-775477.jpg"},
{"id":uuid(),"anime":"Jinrui wa Suitai Shimashita","character":"Y","quote":"Children aren't sweet or innocent. The weird ones are left unchecked. It's rare to find anyone you can trust!",
url:"https://images8.alphacoders.com/388/thumb-1920-388749.png" },
{"id":uuid(),"anime":"Dragon Ball","character":"Vegeta","quote":"What's wrong Frieza? Is your brain another one of your weak and under used muscles?",url:"https://images5.alphacoders.com/653/thumb-1920-653698.jpg"},
{"id":uuid(),"anime":"Detective Conan","character":"Shinichi Kudou","quote":"There is only one truth.",url:"https://images8.alphacoders.com/811/thumb-1920-811580.jpg"},
{"id":uuid(),"anime":"Highschool Of The Dead","character":"Takashi Komuro","quote":"*to Rei Miyamoto* I'd be an actor if I could look happy right now.",url:"https://images7.alphacoders.com/650/thumb-1920-650446.jpg"},
{"id":uuid(),"anime":"Detective Conan","character":"Hidemi Hondou","quote":"Our contribution will never come into light, but the failure will be noticed immediately.",url:"https://images7.alphacoders.com/811/thumb-1920-811575.jpg"},
{"id":uuid(),"anime":"Persona 3","character":"Pharos","quote":"Time is something no one can escape. It delivers us all to the same end.",url:"https://images3.alphacoders.com/577/thumb-1920-577303.jpg"},
{"id":uuid(),"anime":"Fairy Tail","character":"Ichiya Vandalay Kotobuki","quote":"Everyone makes mistakes, but then you recover. Look at all of the friends you have here who adore you. It would be difficult for anything to change that. If you keep that in mind, you should be able to get back on your feet any number of times.",url:"https://images8.alphacoders.com/735/thumb-1920-735718.jpg"},
{"id":uuid(),"anime":"Attack on titan","character":"Eren Jager","quote":"You Have The Freedom To Defend The World's Freedom And I Have The Freedom To Continue Moving Forward.",url:"https://niindo64.files.wordpress.com/2021/04/aot-s4-4.jpeg"},
{ "id":uuid(),"anime":"Soul Eater","character":"Death the Kid","quote":"Ooops....My finger slipped.","url":"https://images7.alphacoders.com/841/thumb-1920-841341.png"} ,
{ "id":uuid(),"anime":"Detective Conan","character":"Shinichi Kudou","quote":"The moon does not mourn over the dead. What it does is shine light on the truth.","url":"https://images4.alphacoders.com/231/thumb-1920-231264.jpg" },{ "id":uuid(),"anime":"Joker Game","character":"Lieutenant Colonel Yuuki","quote":"Women tend to kill when it's not necessary. They kill for reasons of passion. For trivial reasons like love and hate.","url":"https://images6.alphacoders.com/907/thumb-1920-907479.jpg" },
{ "id":uuid(),"anime":"Fairy Tail","character":"Natsu Dragneel","quote":"We all have the right to choose our own future. We should be able to walk the paths that we choose, not the future youÂ´ve decided for us.","url":"https://images7.alphacoders.com/320/thumb-1920-320649.jpg" },

{ "id":uuid(),"anime":"Kimi To Boku.","character":"Asaba Yuki","quote":"I wouldn't learn German just to apologize, that would be too much work.","url":"https://images6.alphacoders.com/723/thumb-1920-723790.jpg " },
 { "id":uuid(),"anime":"Grisaia no Rakuen","character":"Matsushima Michiru","quote":"I don't like sparklers all that much. It burns so beautifully for just a little while and when it's done, only black cinders remain. It's like a misbegotten life and it makes me feel lonely for no good reason.","url":" https://images8.alphacoders.com/707/thumb-1920-707270.png" },
 { "id":uuid(),"anime":"Berserk","character":"Guts","quote":"Throughout my life, the moments, and people who have defined me... they have all been illuminated by sparks.","url":"https://images3.alphacoders.com/843/thumb-1920-84365.jpg" },
 { "id":uuid(),"anime":"Jinrui wa Suitai Shimashita","character":"Y","quote":"I found a job after graduation, but it was at the school. So much for sentimental farewells.","url":"https://images6.alphacoders.com/388/thumb-1920-388739.jpg" },
 { "id":uuid(),"anime":"Kuroshitsuji","character":"Ciel Phantomhive","quote":"Death is like being born, but backwards. It only hurts for a little while, then a new life begins. A life with no sorrow, no pain, a glorious new beginning. A beginning that will last an eternity.","url":"https://images7.alphacoders.com/440/thumb-1920-440866.jpg" },
  {"id":uuid(), "anime":"Tonari No Kaibutsu-kun","character":"Shizuku Mizutani","quote":"The old me would never have known how blue the afternoon sky looks from the roof. My world is growing. What I once considered background noise is now comforting.","url": "https://images.alphacoders.com/711/thumb-1920-711385.jpg " },{"id":uuid(), "anime":"Tokyo Ravens","character":"Tsuchimikado Natsume","quote":"The truth is the truth, regardless of whether it comes out of a genius' mouth or a commoner's.","url": " https://images.alphacoders.com/501/thumb-1920-501961.png" },{"id":uuid(), "anime":"R-15","character":"Suiboku Kuroki","quote":"Genius is 1% inspiration and 99% perspiration! In other words, believe in your inspiration and fight to the end! Perspiration without inspiration is worthless! No matter what others say ignore them! Trust your talent! Follow your own path!","url": "https://images2.alphacoders.com/552/thumb-1920-552512.jpg " },{"id":uuid(), "anime":"Guilty Crown","character":"Tsugumi","quote":"Sympathy only gets people hurt.","url": "https://images3.alphacoders.com/104/thumb-1920-104235.jpg " },{"id":uuid(), "anime":"Kami Nomi zo Shiru Sekai","character":"Keima Katsuragi","quote":"The game design for life is flawed.","url": "https://images2.alphacoders.com/792/thumb-1920-792503.jpg " },{"id":uuid(), "anime":"Bleach","character":"Aizen Sousuke","quote":"We think the flower on the precipice is beautiful, because our fear makes our feet stop at its edge, instead of stepping forward into the sky, like that flower.","url": "https://images2.alphacoders.com/218/thumb-1920-218170.jpg " },
  { "id":uuid(),"anime":"The Melancholy of Haruhi Suzumiya","character":"Kyon","quote":"There's something wrong with people who seek reality in fiction.","url":"https://images.alphacoders.com/821/thumb-1920-82151.jpg " }
 ,{ "id":uuid(),"anime":"Soul Eater","character":"Maka Albarn","quote":"We have to find a way to face this scar.","url":"https://images2.alphacoders.com/508/thumb-1920-50892.jpg " }
 ,{ "id":uuid(),"anime":"Un-Go","character":"Kaishou Rinroku","quote":"You can't extract a god out of a human. However, by kowtowing to the thing that is considered to be a god, it is possible to create a god and shove it down the throats of people.","url":"https://images6.alphacoders.com/963/thumb-1920-963704.jpg " }
 ,{ "id":uuid(),"anime":"Nodame Cantabile","character":"Chiaki Shinichi","quote":"You can't sit around envying other peoples worlds. You have to go out and change your own.","url":" https://images3.alphacoders.com/228/thumb-1920-228627.jpg " }
 ,{ "id":uuid(),"anime":"One Piece","character":"Luffy","quote":"Without strength, you won't be able to save anyone.","url":"https://images7.alphacoders.com/402/thumb-1920-402897.jpg " }
 ,{ "id":uuid(),"anime":"Fairy Tail","character":"Gray Fullbuster","quote":"If  you are lookin' back all the time, you'll never get ahead!","url":"https://images2.alphacoders.com/541/thumb-1920-541052.jpg " }
 ,{ "id":uuid(),"anime":"Tokyo Ghoul","character":"Kaneki Ken","quote":"You don't need to blame yourself just because you've hurt someone, just like when you're walking you can't really blame yourself to crush some ants... that's what being stronger ones means.","url":"https://images8.alphacoders.com/545/thumb-1920-545909.jpg " }
 ,{ "id":uuid(),"anime":"Tokyo Ghoul √A","character":"Kaneki Ken","quote":"\"Never trust anyone too much... Remember the devil was once an angel...\"","url":"https://images8.alphacoders.com/546/thumb-1920-546902.jpg " }
 ,{ "id":uuid(),"anime":"CLANNAD","character":"Yoshino Yūsuke","quote":"Being unable to trust anything is the same as being unable to sense other people's love.","url":"https://images7.alphacoders.com/331/thumb-1920-331320.jpg " 
 },{ "id":uuid(),"anime":"Attack On Titan","character":"Mikasa","quote":"Once I’m dead, I won’t even be able to remember you. So I’ll win, no matter what. I’ll live, no matter what!","url":"https://images8.alphacoders.com/416/thumb-1920-416969.jpg " 
}
]



const randomQuote=intialeQuotesState[Math.floor(Math.random() * intialeQuotesState.length) + 1];





const quoteSlice=createSlice({
    name:"anime",
    initialState:intialeQuotesState,
    reducers:{
       addQuote:(state,action)=>{state.push(action.payload)},
       
    }
 })
 

 const randomSlice=createSlice({
    name:"quote",
    initialState:randomQuote,
    reducers:{
       getQuote:(state,action)=>state=action.payload[Math.floor(Math.random() * action.payload.length) + 1],
       

    }
 })


const favoriteSlice=createSlice({
    name:"favorite",
    initialState:[],
    reducers:{
       addFavorite:(state,action)=>{const index=state.find((el)=>el.id===action.payload.id);
        index||state.push(action.payload)
    },
       deleteFavorite:(state,action)=>{return state.filter((el)=>el.id!==action.payload)}
    }
})

 const store=configureStore({
    reducer:{anime :quoteSlice.reducer,quote:randomSlice.reducer ,favorite:favoriteSlice.reducer}
 });
 export const quoteActions=quoteSlice.actions;
 export const RandomActions=randomSlice.actions;
 export const favoriteActions=favoriteSlice.actions;


 
 export default store;
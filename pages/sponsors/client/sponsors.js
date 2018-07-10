const ourSponsors = [
 {name:"Google",amt:"$50 million", date:"1/1/2018", ceo:"Jimmy"},
 {name:"Apple",amt:"$20 million", date:"2/2/2018", ceo},
 {name:"My Mom",amt:"$10", date:"3/3/2018", ceo"Naomi"},
 {name:"My Dad",amt:"$9.99", date: "4/4/2018", ceo"Dean"},
 {name:"Facebook",amt:"$40 million", date: "5/5/2018", ceo"Mark"},

]

let time = new Date()

const  moreJSON = [
  2018,
  3.14245689,
  "hello world",
  true,
  false,
  null,
  undefined,
  ['Uno',' Dos']

]

const obj = {first:"Dylan", middle:"Marc"}

Template.sponsors.helpers({
sponsorData: ourSponsors,
randomStuff: moreJSON,
time:time,
})

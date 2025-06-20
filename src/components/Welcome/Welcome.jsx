import Intro from "./Intro";
import Break from "./break";
import Section from "./Section";
// import logo from "/images/logo.jpg";
export default function Welcome() {

   let uniData = {
      "title": "Joint universities",
      "description": "Universities participating in the Bis platform provide the best content, protect university privacy and the data of professors and students, and offer features and integrate artificial intelligence into educational content.",
      "members": [
         {
            "name": "Olivia Rhye",
            "role": "Founder & CEO",
            "img": "/images/Avatar.png"
         },
         {
            "name": "Phoenix Baker",
            "role": "Engineering Manager",
            "img": "/images/Avatar-1.png"
         },
         {
            "name": "Lana Steiner",
            "role": "Product Manager",
            "img": "/images/Avatar-2.png"
         },
         {
            "name": "Demi Wilkinson",
            "role": "Frontend Developer",
            "img": "/images/Avatar-3.png"
         }
      ]
   }

   let teamData = {
      "title": "Meet our team",
      "description": "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
      "members": [
         {
            "name": "Engineer : Mohamed Reda",
            "role": "Flutter mobile application developer",
            "img": "/images/Avatar-4.png"
         },
         {
            "name": "Engineer : Samir",
            "role": "Ui Ux Design",
            "img": "/images/Avatar-5.png"
         },
         {
            "name": "Engineer Ahmed Hassan",
            "role": "Senior Backend developer",
            "img": "/images/Avatar-5.png"
         },
         {
            "name": "Engineer Mahmoud",
            "role": "Front-end developer",
            "img": "/images/Avatar-1.png"
         },
         {
            "name": "Engineer: Rawda",
            "role": "Front-end developer",
            "img": "/images/Avatar.png"
         },
         {
            "name": "Engineer : Rawan",
            "role": "Front-end developer",
            "img": "/images/Avatar.png"
         },
         {
            "name": "Engineer : Renad",
            "role": "Front-end developer",
            "img": "/images/Avatar.png"
         }
      ]
   }



   return (
      <>
         <Intro explore={true} />
         <Break />
         <Section
            title={uniData.title}
            description={uniData.description}
            members={uniData.members}
         />
         <Break />
         <Section
            title={teamData.title}
            description={teamData.description}
            members={teamData.members}
         />
      </>
   );
}
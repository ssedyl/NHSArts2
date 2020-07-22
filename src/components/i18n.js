import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translations: {
            "Welcome to Nowheresville Highschool's Arts Club!":"Welcome to Nowheresville Highschool's Arts Club!",
            "ABOUT US AND THIS WEBSITE":"ABOUT US AND THIS WEBSITE",
            "We are the Nowhereville High School Arts Club! Our club is dedicated to the wonderful past time of art.":"We are the Nowhereville High School Arts Club! Our club is dedicated to the wonderful past time of art.",
            "Click to learn about us!":"Click to learn about us!",
            "BROWSE OUR CLUB MEMBERS' ART":"BROWSE OUR CLUB MEMBERS' ART",
            "Our club members have made great pieces of art in the past! With plenty of genres and plenty of pieces, what are you waiting for?":"Our club members have made great pieces of art in the past! With plenty of genres and plenty of pieces, what are you waiting for?",
            "Click to browse our art!":"Click to browse our art!",
            "APPLY TO JOIN THE CLUB":"APPLY TO JOIN THE CLUB",
            "We at the N-HS Arts Club are always looking for new club members! Come see us in person or fill out a simple form on our website!":"We at the N-HS Arts Club are always looking for new club members! Come see us in person or fill out a simple form on our website!",
            "Click to join our club!":"Click to join our club!",
            "SUGGESTIONS AND COMMENTS":"SUGGESTIONS AND COMMENTS",
            "Do you have any suggestions and/or comments for us? Perhaps our club could do things a little better or perhaps you think we're doing a great job, let us know!":"Do you have any suggestions and/or comments for us? Perhaps our club could do things a little better or perhaps you think we're doing a great job, let us know!",
            "Click here to give us your suggestions and comments!":"Click here to give us your suggestions and comments!",
          }
      },
      fr: {
        translations: {
            "Welcome to Nowheresville Highschool's Arts Club!":"Bienvenue au Club des Arts de Nowheresville Highschool!",
            "ABOUT US AND THIS WEBSITE":"À PROPOS DE NOUS ET DE CE SITE WEB",
            "We are the Nowhereville High School Arts Club! Our club is dedicated to the wonderful past time of art.":"Nous sommes le Nowhereville High School Arts Club! Notre club est dédié au merveilleux passé de l'art.",
            "Click to learn about us!":"Cliquez pour en savoir plus sur nous!",
            "BROWSE OUR CLUB MEMBERS' ART":"PARCOURIR L'ART DES MEMBRES DE NOTRE CLUB",
            "Our club members have made great pieces of art in the past! With plenty of genres and plenty of pieces, what are you waiting for?":"Les membres de notre club ont fait de grandes œuvres d'art dans le passé! Avec beaucoup de genres et de pièces, qu'attendez-vous?",
            "Click to browse our art!":"Cliquez pour parcourir notre art!",
            "APPLY TO JOIN THE CLUB":"POSTULER POUR REJOINDRE LE CLUB",
            "We at the N-HS Arts Club are always looking for new club members! Come see us in person or fill out a simple form on our website!":"Au N-HS Arts Club, nous sommes toujours à la recherche de nouveaux membres! Venez nous voir en personne ou remplissez un simple formulaire sur notre site Web!",
            "Click to join our club!":"Cliquez pour rejoindre notre club!",
            "SUGGESTIONS AND COMMENTS":"SUGGESTIONS ET COMMENTAIRES",
            "Do you have any suggestions and/or comments for us? Perhaps our club could do things a little better or perhaps you think we're doing a great job, let us know!":"Avez-vous des suggestions et / ou des commentaires à nous faire? Peut-être que notre club pourrait faire les choses un peu mieux ou peut-être pensez-vous que nous faisons un excellent travail, faites-le nous savoir!",
            "Click here to give us your suggestions and comments!":"Cliquez ici pour nous faire part de vos suggestions et commentaires!",
        }
      }
    },
    fallbackLng: "en",
  });

export default i18n;
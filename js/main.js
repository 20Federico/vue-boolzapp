'use strict'
Vue.config.devtools = true;

window.addEventListener('DOMContentLoaded', function () {
  new Vue({
      el: '#root',
      data: {
        contactList: [
          {
            name: 'Michele',
            profileImgSrc: 'img/avatar_1.jpg',
            messages: [
              {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received' 
              }
            ],
          },
          {
            name: 'Fabio',
            profileImgSrc: 'img/avatar_2.jpg',
            messages: [
              {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              }
            ],
          },
          {
            name: 'Samuele',
            profileImgSrc: 'img/avatar_3.jpg',
            messages: [
              {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
            ],
          },
          {
            name: 'Luisa',
            profileImgSrc: 'img/avatar_io.jpg',
            messages: [
              {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
            ],
          },
        ],
        activeContact: "",
      },

      methods: {
        lastMsg (messages) {
          let lastMsg;

          if (messages.length === 0 || !messages) {
            lastMsg = '';
          } else {
            lastMsg = messages[messages.length - 1].text;
          }
          
          return(lastMsg);

        },
        openChat(contact) {
          this.activeContact = contact;
        }
      },
      mounted () {
        this.activeContact = this.contactList[0];  
      },
  });
})
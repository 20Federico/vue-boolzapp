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
            active: false,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                infoOpen: false
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                infoOpen: false
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                infoOpen: false 
              }
            ],
          },
          {
            name: 'Fabio',
            profileImgSrc: 'img/avatar_2.jpg',
            active: false,
            messages: [
              {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
                infoOpen: false 
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                infoOpen: false 
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                infoOpen: false 
              }
            ],
          },
          {
            name: 'Samuele',
            profileImgSrc: 'img/avatar_3.jpg',
            active: false,
            messages: [
              {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
                infoOpen: false 
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                infoOpen: false 
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
                infoOpen: false 
              }
            ],
          },
          {
            name: 'Luisa',
            profileImgSrc: 'img/avatar_io.jpg',
            active: false,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                infoOpen: false 
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                infoOpen: false 
              }
            ],
          },
        ],
        typing: false,
        toFindContact: "",
        filteredContactList: [],
        activeContact: "",
        newMsg: "",
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

        showFilteredContacts(toFindContact) {
          this.filteredContactList = this.contactList.filter(contact => {
            return contact.name.toLowerCase().includes(toFindContact.toLowerCase().trim())
          });
        },
        
        openChat(contact) {
          this.activeContact = contact;
          for (const key in this.contactList) {
            this.contactList[key].active = false
          }
          this.activeContact.active = true;
        },

        onOpenOptions(message) {
          this.activeContact['messages'].forEach(element => {
            element.infoOpen = false;
          });
          message.infoOpen = true;
        },

        isTyping() {
          if (this.newMsg === "") {
            this.typing = false;
          } else {
            this.typing = true;
          };
        },
        
        onEnterAddNewMsg() {
          
          if (this.newMsg === "") {
            return;
          } else {
            this.activeContact.messages.push({
              date: '10/01/2020 15:30:55',
              text: this.newMsg,
              status: 'sent',
              infoOpen: false 
            })
            this.newMsg = "";
            this.typing = false;
            
            setTimeout(() => {
              this.activeContact.messages.push({
                date: '10/01/2020 15:30:55',
                text: 'ok',
                status: 'received',
                infoOpen: false 
              });
            }, 1000)
          };
        },
      },
      
      mounted () {
        this.activeContact = this.contactList[0];  
        this.activeContact.active = true;
        this.filteredContactList = this.contactList
      },
    });
  })
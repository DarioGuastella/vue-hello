const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Questo testo è inserito tramite Vue!",
        message2: "Anche la seguente immagine è stata inserita tramite Vue:",
        photo: "https://picsum.photos/200/300"
      }
    }
  }).mount('#app')

  document.body.style.backgroundColor =  "#ff000080";
  document.body.style.color = "White";
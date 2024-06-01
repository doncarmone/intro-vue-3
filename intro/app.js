const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm batman");
    const author = ref('Bruce Wayne');

    const showAuthor = () => {
      message.value = 'I am Ironman';
      author.value = 'Tony Stark';
    };
    return {
      message,
      author,
      showAuthor,
      changeMessage
    };
  },
});

app.mount('#myApp');

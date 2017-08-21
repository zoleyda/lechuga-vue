<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <carousel-3d :inverse-scaling="1500" :space="800">
      <slide :index="0">
        <h2> slide 1 content - USD </h2>
      </slide>
      <slide :index="1">
        <h2> slide 2 content - EUR </h2>
      </slide>
      <slide :index="2">
        <h2> slide 3 content - nose </h2>
      </slide>
    </carousel-3d>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul> 
    <p>Made with <md-icon>favorite_border</md-icon> by me</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Lechuga today',
      posts: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

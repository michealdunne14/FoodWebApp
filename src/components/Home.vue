<template>
  <div class="hero">
    <!-- Button to open the modal login form -->
    <button onclick="document.getElementById('id01').style.display='block'">Login</button>
    <!-- The Modal -->
    <div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'"
        class="close" title="Close Modal">&times;</span>

      <!-- Modal Content -->
      <form class="modal-content animate" onstart="micheal" action="/action_page.php">
        <div class="imgcontainer">
          <img src="../assets/patrickeating.gif" alt="Avatar" class="avatar">
        </div>

        <div class="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" :data="authName" required>

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" :data="authPassword" required>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
      </form>
    </div>
    <h1 class="vue-title">Food Items</h1>
    <p></p>
    <p class="lead"></p>
    <footer>
      <p>Posted by: Micheal Dunne</p>
    </footer>
  </div>
</template>

<script>
import foodservice from '@/services/foodservice'

export default {
  name: 'User',
  data () {
    return {
      authName: '',
      authPassword: '',
      loginStatus: null
    }
  },
  created () {
    this.loadUsers()
  },
  methods: {
    loadUsers: function () {
      foodservice.fetchUser()
        .then(response => {
          this.authName = response.data
          this.authPassword = response.data
          console.log(this.authName)
          console.log(this.authPassword)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 5px auto; /* 15% from the top and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    /* Position it in the top right corner outside of the modal */
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }

  /* Close button on hover */
  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }

  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
  }

  @-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
  }

  @keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
  }
</style>

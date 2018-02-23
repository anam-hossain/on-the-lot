<template>
  <div class="hello col">
      <router-link to="/plate-scanner">
        <span>Scan License Plate</span>
      </router-link>
      <h1>{{ msg }}</h1>
      <div class="">
        <img class="logo" src="/static/img/icons/mstile-150x150.png"></img>
      </div>
    <form class="col">
      <div class="form-group">
        <label for="exampleFormControlInput1">Search cars</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="car">
          <option>Honda</option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1" placeholder="type">
          <option>Accord</option>
          <option>Civic</option>
          <option>CRV</option>
          <option>City</option>
          <option>Euro</option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1" placeholder="price">
          <option>Less than $10,000</option>
          <option>Less than $15,000</option>
          <option>Less than $20,000</option>
          <option>Less than $25,000</option>
          <option>Less than $30,000</option>
          <option>Less than $35,000</option>
        </select>
      </div>
      <div class="form-group">
        <i class="fi-target-two"></i>
        <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="location">
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-dark">Search</button>
      <div class="dealer">
        <a href="">Do you need help at the dealer?</a>
      </div>
    </form>
</div>


</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Autotrader'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}

body {
  padding-bottom: 30px;
}

.btn {
  background-color: #35495E
}

.home-page {
  padding-left: 50px;
  padding-right: 50px;
}

.dealer {
  padding-top: 10px;
}


</style>

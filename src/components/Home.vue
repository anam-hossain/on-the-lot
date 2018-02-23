<template>
  <div class="hello">
      <router-link  to="/plate-scanner">
        <span>Scan License Plate</span>
      </router-link>
      <h1>{{ msg }}</h1>
    <form>
      <div class="form-group home-page">
        <label for="exampleFormControlInput1">Search cars</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="car">
          <option>Honda</option>
        </select>
      </div>
      <div class="form-group home-page">
        <select class="form-control" id="exampleFormControlSelect1" placeholder="type">
          <option>Accord</option>
          <option>Civic</option>
          <option>CRV</option>
          <option>City</option>
          <option>Euro</option>
        </select>
      </div>
      <div class="form-group home-page">
        <select class="form-control" id="exampleFormControlSelect1" placeholder="price">
          <option>Less than $10,000</option>
          <option>Less than $15,000</option>
          <option>Less than $20,000</option>
          <option>Less than $25,000</option>
          <option>Less than $30,000</option>
          <option>Less than $35,000</option>
        </select>
      </div>
      <div class="form-group home-page">
        <select class="form-control" id="exampleFormControlSelect1" placeholder="location">
          <option>NSW - All</option>
          <option>NSW - Central Coast</option>
          <option>NSW - Central West</option>
          <option>NSW - Sydney </option>
          <option>NSW - South Coast</option>
          <option>NSW - North West</option>
        </select>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-dark home-page">Search Cars</button>
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

.home-page {
  padding-left: 50px;
  padding-right: 50px;
}
</style>

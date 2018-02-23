<template>
    <div class="container">
        <div class="detail row">
            <div class="header-img header-img-vehicle col-6">
                <img :src="img_url">
            </div>
            <div class="header-img header-img-owner col-6">
                <img src="/static/img/content/Carl-D-norm.png">
            </div>
            <div class="make col-12">
                <strong> {{ make }} </strong>
            </div>
            <div class="model col-12">
                <strong>{{ model }} {{ year }}</strong>
            </div>
            <div class="price-chart col-12">
                <img :src="chart_url">
            </div>
            <div class="car-data price-minmax col-12">
                <dl v-for="price in prices">
                    <dt>{{ price.name }}</dt>
                    <dd>${{ price.value }}</dd>
                </dl>
            </div>
            <div class="car-data price-depreciation col-12">
                <dl>
                    <dt>Price depreciation 15 Feb 2018</dt>
                    <dd>$84,999 &#8594; $79,500</dd>
                </dl>
                <dl>
                    <dt style="display: inline">Time on the lot</dt>
                    <dd style="display: inline">29 days</dd>
                </dl>
            </div>

            <div class="car-data car-history col-12">
                <strong>Vehicle history</strong>
                <dl>
                    <dt>Accident check</dt>
                    <dd>&#10004;</dd>
                </dl>
                <dl>
                    <dt>Finance owned check</dt>
                    <dd>&#10004;</dd>
                </dl>
                <dl>
                    <dt>One owner</dt>
                    <dd>&#10004;</dd>
                </dl>

            </div>


            <div class="car-data car-history col-12">
                <strong>Running cost</strong>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Yearly cost</th>
                        <th scope="col">3 year cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Fuel cost</th>
                        <td>$2,089</td>
                        <td>$6,267</td>
                    </tr>
                    <tr>
                        <th scope="row">Insurance</th>
                        <td>$1,097</td>
                        <td>$3,291</td>
                    </tr>
                    <tr>
                        <th scope="row">Service</th>
                        <td>$792</td>
                        <td>$2376</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>

</template>

<script>
  export default {
    data () {
      return {
        make: 'Mercedes-Benz',
        model: 'C300 coupe',
        year: '2016',
        img_url: '/static/img/content/VLT16L.jpg',
        chart_url: '/static/img/content/pricing-chart.png',
        prices: [
          {name: 'Low price', value: '76,990'},
          {name: 'High price', value: '108,579'},
          {name: 'Current price', value: '79,500'},
        ],
      }
    },
  }
</script>

<style scoped>
.header-img img {
    width: 100%;
}
.header-img-owner img {
    width: 50%;
}
    .make {
        margin-top: 10px;
    }
    .price-chart img {
        width: 100%;
    }
    .car-data {
        margin-top: 15px;
        padding-top: 15px;
        border-top: lightgrey solid 2px;
        text-align: left;
    }
    .price-minmax dt, .price-minmax dd,
    .car-history dt, .car-history dd {
        padding: 0 5px;
        display: inline;
    }
    .car-history dl {
        margin-bottom: 0;
    }
</style>
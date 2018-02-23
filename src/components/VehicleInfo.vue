<template>
<div v-if="plate" class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ info.make }}</h5>
    <p class="card-text">his C300 is finished in Tenorite Grey with Black Leather interior and features 19 Inch Alloys, Satellite Navigation, Electric Panoramic Sunroof, Park Distance Control with Surround Camera, Auto Tailgate, Xenon Headlights.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Plate number: {{ info.plate }}</li>
    <li class="list-group-item">Kms: {{ info.kms }}</li>
    <li class="list-group-item">Price: {{ info.price }}</li>
  </ul>
</div>
</template>

<script>

  export default {
    props: ['plate'],

    data () {
      return {
        info: {}
      }
    },

    mounted () {
      if (this.plate) {
          this.info = this.getInfo();
      }
    },
    
    methods: {
      getInfo () {
        return {
            "plate": "DDN 29B",
            "make": "2016 MERCEDES-BENZ C300",
            "kms": "5000",
            "price": "80000",
            "transmission": "Automatic",
            "engine": "4 cyl, 2.0 L"
        }
      }
    }
  }
</script>
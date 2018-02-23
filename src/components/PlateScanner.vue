<template>
  <div>
    <div v-if="!captured" class="camera-modal">
      <video ref="video" class="camera-stream"/>
      <div class="camera-modal-container">
        <button class="btn btn-lg btn-success" @click="capture">Scan</button>
        <br>
        <div v-if="processing" class="alert alert-info" role="alert">
          Processing...
        </div>
      </div>
    </div>

    <div v-if="plate" class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://res.cloudinary.com/carsguide/image/private/t_cg_car_l/v1/car/0591/3984/2016_mercedes-benz_c300_used_5913984_1.jpg?version=1518775371" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">2016 MERCEDES-BENZ C300</h5>
        <p class="card-text">his C300 is finished in Tenorite Grey with Black Leather interior and features 19 Inch Alloys, Satellite Navigation, Electric Panoramic Sunroof, Park Distance Control with Surround Camera, Auto Tailgate, Xenon Headlights.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Plate number: DDN 29B</li>
        <li class="list-group-item">Kms: 5000</li>
        <li class="list-group-item">Price: $80,000</li>
      </ul>
      <a class="btn btn-primary btn-lg btn-block" role="button"><router-link  to="/car-detail">
        <span>View Car detail</span>
      </router-link></a>
    </div>
  </div>
</template>

<script>
  // import Tesseract from 'tesseract.js'
  import router from '@/router';

  export default {
    data () {
      return {
        mediaStream: null,
        plate: '',
        processing: false,
        captured: false
      }
    },

    mounted () {
      console.log(this.plate);
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))
    },

    methods: {
      capture () {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(mediaStreamTrack)
    
        return imageCapture.takePhoto().then(blob => {
          this.processing = true;
          this.plate = "DDN 29B";
          this.captured = true;
          this.processing = false;
          window.location = "/#/car-detail";
          //this.showDetails();
          // Tesseract.recognize(blob)
          //   .progress(message => console.log(message))
          //   .catch(err => console.error(err))
          //   .then(result => {
          //     this.plate = result.text;
          //     this.processing = false;
          //     this.captured = true;
          //   })
        })
      },
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
    },

    destroyed () {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    }
  }
</script>

<style scoped>
    .camera-modal {
      width: 100%;
      height: 60%;
      top: 20px;
      /* position: absolute; */
      background-color: white;
      z-index: 10;
    }
    .camera-stream {
      width: 100%;
      max-height: 100%;
    }
    .camera-modal-container {
      /* position: absolute; */
      margin-top: 20px;
      bottom: 0;
      width: 100%;
      align-items: center;
      margin-bottom: 24px;
    }
    .take-picture-button {
      display: flex;
    }
  .btn span {
    color: white;
    font-weight: bold;
  }
</style>
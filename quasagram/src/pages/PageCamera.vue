<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video 
        v-show="!imageCaptured"
        ref="video"
        class="full-width"
        autoplay
      />
      <canvas 
        v-show="imageCaptured"
        ref="canvas"
        class="full-width"
        height="240"
      />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        v-if="hasCameraSupport"
        @click="captureImage"
        color="grey-10"
        icon="eva-camera"
        size="lg"
        round
      />
      <q-file
        v-else
        v-model="imageUpload"
        @input="captureImageFallback"
        label="Choose an image"
        accept="image/*"
        outlined 
      >
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline"/>
        </template>
      </q-file>
      <div class="row justify-center q-ma-md">
        <q-input 
          v-model="post.caption"
          class="col col-sm-6"
          label="Caption"
          dense
        />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input 
          v-model="post.location"
          class="col col-sm-6"
          label="Location"
          dense
        >
          <template v-slot:append>
            <q-btn 
              round 
              dense 
              flat 
              icon="eva-navigation-2-outline"
            />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn 
          unelevated
          rounded
          color="primary"
          label="Post Image"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'
require('md-gum-polyfill')

export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    }
  },
  methods: {
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video: true
      })
        .then(stream => {
          this.$refs.video.src = stream
        }).catch(error => {
          this.hasCameraSupport = false;
        });
    },
    captureImage(){
      let video = this.$refs.video;
      let canvas = this.$refs.canvas;
      canvas.width = video.getBoundingClientRect().width;
      canvas.height = video.getBoundingClientRect().height;
      let context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.imageCaptured = true;
      this.post.photo = this.dataURItoBlob(canvas.toDataURL());

    },
    captureImageFallback(file){
      this.post.photo = file;

      var reader = new FileReader();
      reader.onload() = (event) => {
        var img = new Image();
        img.onload() = () => {
          canvas.width = img.width;
          canvas.height = img.height;

        }
      }
    },
    dataURItoBlob(dataURI){
      // Convert Base64 to raw binary data which is held in a string
      // It does not handle URLEncoded DataURI's
      var byteString = atob(dataURI.split(',')[1]);

      // Separate out the MIME component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(',')[0];

      // Write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // Create a view into the buffer
      var ia = new Uint8Array(ab);

      // Set the bytes of the buffer to the correct values
      for(var i = 0; i < byteString.length; i++){
        ia[i] = byteString.charCodeAt(i);
      }

      // Write the ArrayBuffer to a BLOB
      var blob = new Blob([ab], {type: mimeString});
      return blob;

    }
  },
  mounted(){
    this.initCamera();
  }
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>

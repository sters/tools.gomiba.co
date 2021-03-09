<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="2">
        <v-btn :class="$style.detect" @click="refreshDeviceList">DETECT VIDEO DEVICES</v-btn>
        <v-select solo :items="deviceLabels" @change="onDeviceItemsChanged"
          placeholder="Choose device"></v-select>
        <v-btn class="restart" @click="reopenMediaStream">RESTART</v-btn>
        <v-btn class="switch" @click="flipDevice">FLIP</v-btn>
        <v-textarea solo readonly wrap="off" :class="$style.infos" :value="deviceInfo"
          placeholder="show device info here"></v-textarea>
      </v-col>
      <v-col cols="12" sm="12" md="9" lg="10">
        <video autoplay :class="$style.video" :srcObject.prop="stream"></video>
      </v-col>
    </v-row>
  </div>
</template>

<style module>
  .fixed {
      position: fixed;
  }

  .video {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      object-fit: fill;
  }

  .detect {
    width: 100%;
  }

  .infos textarea {
      resize: none;
      width: 100%;
      height: 300px;
      overflow: scroll;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const FACING_MODE_ENVIRONMENT = 'environment';
const FACING_MODE_USER = 'user';

@Component({
  components: {},
})
export default class MediastreamVideoTest extends Vue {
  mode = FACING_MODE_ENVIRONMENT;

  currentDeviceId = 'default';

  stream: MediaStream | null = null;

  deviceList: {[label: string]: string} = {};

  deviceLabels: string[] = [];

  deviceInfo = '';

  async refreshDeviceList() {
    this.deviceList = {};
    this.deviceLabels = [];

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    stream.getTracks().forEach((t) => t.stop());

    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((device) => {
      if (device.kind !== 'videoinput') {
        return;
      }

      this.deviceList[device.label] = device.deviceId;
      this.deviceLabels.push(device.label);
    });
  }

  flipDevice() {
    this.mode = this.mode === FACING_MODE_USER ? FACING_MODE_ENVIRONMENT : FACING_MODE_USER;
    this.reopenMediaStream();
  }

  onDeviceItemsChanged(label: string) {
    this.currentDeviceId = this.deviceList[label];
    this.reopenMediaStream();
  }

  async reopenMediaStream() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: this.mode,
        deviceId: this.currentDeviceId,
      },
    });

    const texts: string[] = [];
    this.stream.getTracks().forEach((t) => {
      const s = t.getSettings();
      texts.push(`setting.aspectRatio: ${s.aspectRatio}`);
      texts.push(`setting.autoGainControl: ${s.autoGainControl}`);
      texts.push(`setting.channelCount: ${s.channelCount}`);
      texts.push(`setting.deviceId: ${s.deviceId}`);
      texts.push(`setting.echoCancellation: ${s.echoCancellation}`);
      texts.push(`setting.facingMode: ${s.facingMode}`);
      texts.push(`setting.frameRate: ${s.frameRate}`);
      texts.push(`setting.groupId: ${s.groupId}`);
      texts.push(`setting.height: ${s.height}`);
      texts.push(`setting.latency: ${s.latency}`);
      texts.push(`setting.noiseSuppression: ${s.noiseSuppression}`);
      texts.push(`setting.sampleRate: ${s.sampleRate}`);
      texts.push(`setting.sampleSize: ${s.sampleSize}`);
      texts.push(`setting.width: ${s.width}`);
      texts.push('');

      const c = t.getCapabilities();
      texts.push(`capabilities.aspectRatio: ${c.aspectRatio}`);
      texts.push(`capabilities.autoGainControl: ${c.autoGainControl}`);
      texts.push(`capabilities.channelCount: ${c.channelCount}`);
      texts.push(`capabilities.deviceId: ${c.deviceId}`);
      texts.push(`capabilities.echoCancellation: ${c.echoCancellation}`);
      texts.push(`capabilities.facingMode: ${c.facingMode}`);
      texts.push(`capabilities.frameRate: ${c.frameRate}`);
      texts.push(`capabilities.groupId: ${c.groupId}`);
      texts.push(`capabilities.height: ${c.height}`);
      texts.push(`capabilities.latency: ${c.latency}`);
      texts.push(`capabilities.noiseSuppression: ${c.noiseSuppression}`);
      texts.push(`capabilities.sampleRate: ${c.sampleRate}`);
      texts.push(`capabilities.sampleSize: ${c.sampleSize}`);
      texts.push(`capabilities.width: ${c.width}`);
      texts.push('');

      const cc = t.getConstraints();
      texts.push(`constraints.aspectRatio: ${cc.advanced}`);
      texts.push(`constraints.aspectRatio: ${cc.aspectRatio}`);
      texts.push(`constraints.autoGainControl: ${cc.autoGainControl}`);
      texts.push(`constraints.channelCount: ${cc.channelCount}`);
      texts.push(`constraints.deviceId: ${cc.deviceId}`);
      texts.push(`constraints.echoCancellation: ${cc.echoCancellation}`);
      texts.push(`constraints.facingMode: ${cc.facingMode}`);
      texts.push(`constraints.frameRate: ${cc.frameRate}`);
      texts.push(`constraints.groupId: ${cc.groupId}`);
      texts.push(`constraints.height: ${cc.height}`);
      texts.push(`constraints.latency: ${cc.latency}`);
      texts.push(`constraints.noiseSuppression: ${cc.noiseSuppression}`);
      texts.push(`constraints.sampleRate: ${cc.sampleRate}`);
      texts.push(`constraints.sampleSize: ${cc.sampleSize}`);
      texts.push(`constraints.width: ${cc.width}`);
    });
    this.deviceInfo = texts.join('\n');
  }

  mounted() {
    this.refreshDeviceList();
  }

  beforeDestroy() {
    if (this.stream !== null) {
      this.stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    this.stream = null;
  }
}
</script>

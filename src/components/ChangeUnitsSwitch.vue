<script setup lang="ts">

defineProps<{
  onChange: () => void,
  currentUnit: string
}>()

</script>

<template>
    <div class="switchWrapper">
        <button class="radio_button" @click="() => onChange()"> <span :class="`${currentUnit} bullet`"></span></button>
    </div>
</template>

<style>
.radio_button{
    border: 3px solid  #f0b23f;
    background-color: #f0b23f;
    height: 40px;
    border-radius: 20px;
    width: 120px;
    position: relative;
    cursor: pointer;
}
.bullet {
    background-color: grey;
    opacity: 0.7;
    top:0;
    height: 30px;
    width: 30px;
    border: 3px solid #000000;
    border-radius: 50%;
    position: absolute;
    transition: 0.2s;
}
.metric{
    top: 50%;
    left: 0%;
    transform: translate(0, -50%);
}

.imperial{
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}
.switchWrapper {
    display: flex;
    align-items: center;
}
</style>
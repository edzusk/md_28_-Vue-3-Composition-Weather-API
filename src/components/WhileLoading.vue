

<template>
 <div class="container loading">
    <h1 class="loading__text">Loading...</h1>
 </div>
</template>

<style scoped>
.loading{
   min-height: 300px;
   position: relative;
}
.loading__text{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
}
</style>
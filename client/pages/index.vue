<template>
 <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({store}){
    await store.dispatch("fetchArtists")
  }
}
</script>

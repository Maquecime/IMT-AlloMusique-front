export const state = () => ({
    artists: []
})
  
export const mutations = {
SET_ARTIST(state, data) {
    state.artists = data
}
}


export const actions = {
async fetchArtists({commit}){
    await this.$axios.get("http://localhost:5010/rest/artist").then(res => {
        return commit("SET_ARTIST", res.data)
    }).catch(err => console.log(err));
}
}

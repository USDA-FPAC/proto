

const state = () =>({
  isLoaded: false
});
  

const getters = {
  getIsLoaded: state => state.isLoaded  
};

const actions = {

  setLoaded( { commit }, _payload ){
    commit('SET_IS_LOADED', _payload );
  }

};

const mutations = {
  SET_IS_LOADED(_state, _payload){
    _state.isLoaded = _payload;
  }

};

export const today = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
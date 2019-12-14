const INITIAL_STATE = { 
    offerName : '',
    offerDescription:'',
    offerCandidates:[],
  };
  
  function jobOfferReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'SET_JOBOFFER': {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }
  
  export default jobOfferReducer;
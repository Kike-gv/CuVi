const INITIAL_STATE = { 
  cvName: '',
  cvDatePicker:'01-01-1900',
  cvTelephone: '',
  cvEmail: '',
  cvPortfolio: '',

  cvPresentation: '',

  cvStudyName: '',
  cvStudyCenter: '',

  cvJobPosition: '',
  cvJobCompany: '',

  cvLanguage: '',
  
  cvSkill: '',

  cvHobby: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_USER': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
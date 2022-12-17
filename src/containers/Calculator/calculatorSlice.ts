import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  firstVal: string;
  secondVal: string;
  operator: string;
  result: string;
  screen: string;
  equally: string;
}

const initialState : CalculatorState = {
  firstVal: '',
  secondVal: '',
  operator: '',
  result: '',
  screen: '',
  equally: ''
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    getResult: (state) => {
      try {
        if (state.operator === '+') {
          // eslint-disable-next-line no-eval
          state.result = eval(state.firstVal + '+' + state.secondVal);
          state.equally = '=';
        } else if (state.operator === '-') {
          // eslint-disable-next-line no-eval
          state.result = eval(state.firstVal + '-' + state.secondVal);
          state.equally = '=';
        } else if (state.operator === '*') {
          // eslint-disable-next-line no-eval
          state.result = eval(state.firstVal + '*' + state.secondVal);
          state.equally = '=';
        } else if (state.operator === '/') {
          // eslint-disable-next-line no-eval
          state.result = eval(state.firstVal + '/' + state.secondVal);
          state.equally = '=';
        } else {
          state.firstVal = '';
          state.secondVal = '';
          state.result = '';
          state.operator = '';
          state.screen = '';
          state.equally = '';
        }

        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      } catch (e) {
        state.firstVal = '';
        state.secondVal = '';
        state.result = '';
        state.operator = '';
        state.screen = '';
        state.equally = '';
        window.alert('Not correct' + e);
      }
    },
    plus: (state) => {
      if (state.operator !== '-' &&
          state.operator !== '*' &&
          state.operator !== '/' &&
          state.firstVal !== '')
      {
        state.operator = '+';
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }
    },

    minus: (state) => {
      if (state.operator !== '+' &&
        state.operator !== '*' &&
        state.operator !== '/' &&
        state.firstVal !== '')
      {
        state.operator = '-';
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }
    },

    multiplication: (state) => {
      if (state.operator !== '+' &&
        state.operator !== '-' &&
        state.operator !== '/' &&
        state.firstVal !== '')
      {
        state.operator = '*';
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }
    },

    division: (state) => {
      if (state.operator !== '+' &&
        state.operator !== '-' &&
        state.operator !== '*' &&
        state.firstVal !== '')
      {
        state.operator = '/';
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }
    },

    getNumber: (state,action:PayloadAction<string>) => {
      if (state.firstVal === state.secondVal || state.operator === '') {
        state.firstVal += action.payload;
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }

      if (state.operator !== '' && state.equally !== '=') {
        state.secondVal += action.payload;
        state.screen = state.firstVal + state.operator + state.secondVal + state.equally + state.result;
      }
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {plus, minus, multiplication, division, getNumber, getResult} = calculatorSlice.actions;
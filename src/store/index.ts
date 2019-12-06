import Vue from 'vue';
import Vuex from 'vuex';
import {HydroCalculator} from 'aqueduct';

Vue.use(Vuex);

function update(state: any, value: any) {
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      state[key] = value[key];
    }
  }
}


const sectForm = {
  state: {},
  mutations: {
    updateSectForm(state: any, value: any) {
      update(state, value);
    },
  },
};

const heightForm = {
  state: {
    buttonDisabled: true,
  },
  mutations: {
    updateHeightForm(state: any, value: any) {
      update(state, value);
    },
  },
};

const floorSectForm = {
  state: {
    up: {},
    down: {},
  },
  mutations: {
    updateFloorSectForm(state: any, value: {sectPosition: 'up' | 'down', value: any}) {
      update(state[value.sectPosition], value);
    },
  },
};

const transForm = {
  state: {
    inlet: {},
    outlet: {},
  },
  mutations: {
    updateTransForm(state: any, value: {transPositon: 'inlet' | 'outlet', value: any}) {
      update(state[value.transPositon], value);
    },
  },
};

const flumeForm = {
  state: {},
  mutations: {
    updateFlumeForm(state: any, value: any) {
      update(state, value);
    },
  },
};

const lineForm = {
  state: {},
  mutations: {
    updateLineForm(state: any, value: any) {
      update(state, value);
    },
  },
};

export default new Vuex.Store({
  state: {
    hydro: new HydroCalculator(),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sectForm,
    heightForm,
    floorSectForm,
    transForm,
    flumeForm,
    lineForm,
  },
});

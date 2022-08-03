import { setLocalStorageData } from "@/helpers/localStorageHelper";

export const state = () => ({
  cardsList: [],
  loading: false,
  intervalKey: null,
  sortByCost: "1",
});

export const getters = {
  getCardsList(state) {
    return state.cardsList;
  },
  getLoading(state) {
    return state.loading;
  },
  getFilter(state) {
    return state.sortByCost;
  },
};

export const mutations = {
  setFilter(state, filter) {
    state.sortByCost = filter;
  },
  setLoadingState(state, value) {
    state.loading = value;
  },
  setCard(state, card) {
    state.cardsList.unshift(card);
    setLocalStorageData({
      key: "cardsList",
      value: state.cardsList,
    });
  },
  deleteCard(state, index) {
    state.cardsList.splice(index, 1);
    setLocalStorageData({
      key: "cardsList",
      value: state.cardsList,
    });
  },
  setIntervalKey(state, key) {
    state.intervalKey = key;
  },
  setCardList(state, cardList) {
    state.cardsList = cardList;
  },
};

export const actions = {
  async fakeQuery(context, { value, mutationName }) {
    context.commit("setLoadingState", true);
    if (context.intervalKey) {
      clearTimeout(context.intervalKey);
    }
    const key = setTimeout(() => {
      context.commit(mutationName, value);
      context.commit("setLoadingState", false);
    }, 2000);
    context.commit("setIntervalKey", key);
  },
};

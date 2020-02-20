import * as Api from './service';

export default {
    namespace: 'home',
    state: {
      flag: 0,
    },
    
    effects: {
      *load(_, { call, put,select }) {
        console.log("load incoming")
        const { flag } = yield select(state => state.home);
        console.log("load flag " + flag)
       // const res = yield call(Api.demo, {});
       // console.log(res)
        yield put({type:'save',payload:{flag:1}})
      }
    },

    reducers: {
      save(state, { payload }) {

        return { ...state, ...payload };
      },
    },
};
  
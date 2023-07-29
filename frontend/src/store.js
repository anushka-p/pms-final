import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            studentIsAuthorized: false,
            collegeIsAuthorized: false
        }
    },
    mutations: {
        setStudentIsAuthenticated(state, replacement){
            state.studentIsAuthorized = replacement
        },
        setCollegeIsAuthenticated(state, replacement){
            state.collegeIsAuthorized = replacement
        }
    }
})

export default store;
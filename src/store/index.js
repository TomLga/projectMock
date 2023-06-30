import { createStore } from 'vuex'
const dataURL = "https://tomlga.github.io/jsonServer/data.json"
export default createStore({
  state: {
    shoes: "",
    education:"",
    projects:""


  },
  getters: {
  },
  mutations: {
    setProducts(state, shoes) {
      state.shoes =shoes
    },
    setEducation(state, education){
      state.education= education
    },
    setProjects(state, projects){
      state.projects = projects
    }
  },
  actions: {
  async fetchProducts (context){
    try{
      let res = await fetch (dataURL)
      let {shoes} = await res.json() //use the key for what you described your array
      if (shoes){
        context.commit ('setProducts', shoes) //the key is the array name 
      }else{
        context.commit ('setSpinner', true)
      }
    }catch(e){
      console.log(e.message);
    }
  },
  async fetchEducation (context){
    try{
      let ed = await fetch (dataURL)
      let {education} = await ed.json()
    if (education){
      context.commit ('setEducation', education)
    } else {
      context.commit ('setSpinner', true)
     
    }
    } catch(e){
      console.log(e.message)
    }
  },
  async fetchProjects(context){
    try{
      let websites = await fetch (dataURL)
      let {projects} = await websites.json()
      if(projects){
        context.commit ('setProjects', projects)
      } else{
        context.commit ('setSpinner', true)
      }
    } catch(e){
      console.log(e.message)
    }
  
},



  
},


  modules: {
  }
})

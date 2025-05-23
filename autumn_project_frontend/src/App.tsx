import React from 'react';
import './App.css';
import LoginPage from './Pages/Login';
import AddEventForm from './Pages/Add_an_event'; 
import CreateTeamForm from './Pages/Create_Team';
import CreateGroupForm from './Pages/Create_Group';
import PersonProfileCard from './Components/Person_Profile_Card';
import ManageTeamPage from './Components/Manage_Team';
import EventCard from './Components/Event_Card';
import ProfileDisplayCard from './Components/Profile_Display_Card';
import EventTemplatePage from './Components/Events_Page_Template Component';
import TeamCard from './Components/Team_Card';
import TeamTemplatePage from './Components/Teams_Page_Template';
import GroupTemplatePage from './Components/Groups_Page_Template';
import ContactDetailsFormCard from './Components/Contact_Details_Form';
import SkillFormCard from './Components/Skill_Form_Component';
import ExperienceFormCard from './Components/Experience_Form_Component';
import ProjectFormCard from './Components/Project_Form_Card';
import EditProfileTemplatePage from './Components/Edit_Profile_Component';
import SignupPage from './Pages/Signup';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import { channeliRoute } from './route';
import TeamProfile from './Components/Team_Profile';
import YourTeams from './Components/Your_Teams'
import ViewProfilePage from './Components/View_Profile_Page';


export {}; 


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/signup' element={<SignupPage/>}> </Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/create_event' element={<AddEventForm/>}></Route>
      <Route path='/events' element={<EventTemplatePage/>}></Route>
      <Route path='/edit_profile' element ={<EditProfileTemplatePage/>}></Route>
      <Route path='/create_group' element = {<CreateGroupForm/>}></Route>
      <Route path='/groups' element = {<GroupTemplatePage/>}></Route>
      <Route path='/teams' element = {<TeamTemplatePage/>}></Route>
      <Route path='/create_team' element = {<CreateTeamForm/>}></Route>
      <Route path='/team' element = {<TeamProfile/>}></Route>
      <Route path='/your_teams' element = {<YourTeams/>}></Route>
      <Route path='/manage_team' element = {<ManageTeamPage/>}></Route>
      <Route path='/view_profile' element = {<ViewProfilePage/>}></Route>
      </Routes>
     </BrowserRouter> 
    </>
  )
}
  
  
 // return (
   // <div className="App">
     //<SignupPage/> 
  //</div>
  //)
//}

export default App;
//здесь будут запросы к серваку
import { bindActionCreators } from '@reduxjs/toolkit';
import {ActionCreators} from '../app/missionsReducer';


export const GetMissions = async(dispath)=>{
   try {
       //api call
       const missions = [
           {id: 1, name:'Name1', description: 'Description1', missionLvl: 1, missionType: 'Sequrity1'},
           {id: 1, name:'Name2', description: 'Description2', missionLvl: 2, missionType: 'Sequrity2'},
           {id: 1, name:'Name3', description: 'Description3', missionLvl: 3, missionType: 'Sequrity3'},
           {id: 1, name:'Name4', description: 'Description4', missionLvl: 4, missionType: 'Sequrity4'}
       ];

       dispath(ActionCreators.setMissions(missions))
       
   } catch (error) {
       console.log('Error!');
   } 
}
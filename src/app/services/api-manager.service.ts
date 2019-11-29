import { Injectable } from '@angular/core';
import { ApiConfig } from '../api-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(public config: ApiConfig,
              private http:HttpClient) { }

  //ListModelsComponent
  getModelList(modelName: string){
    return this.http.get(this.config.apiUrl + "all/" + modelName);
  }

  searchForModel(modelName: string, paramName: string, paramValue: any){
    return this.http.get(this.config.apiUrl + 'search/' + modelName + '/' + paramName + '/' + paramValue);
  }

  deleteModel(modelName: string, id: number){
    return this.http.delete(this.config.apiUrl + "deletemodel/" + modelName + '/' + id);
  }

  //AddModelComponent
  addModel(modelName: string, modelData: any){
    let verificationOptions = this.config.httpOptions;
    verificationOptions.headers = verificationOptions.headers.append("Bearer", localStorage.getItem("token"));
    return this.http.post(this.config.apiUrl + "addmodel/" + modelName, modelData, verificationOptions);
  }
  
  uploadImage(modelName: string, id: number, input: FormData){
    return this.http.post(this.config.apiUrl + modelName + "/image/" + id, input);
  }

  //ClubMembersComponent
  getClubMembers(clubId: number){
    return this.http.get(this.config.apiUrl + 'clubmembers/' + clubId);
  }

  getClubMembersBy(clubId: number, searchParamName: string, searchFieldValue){
    return this.http.get(this.config.apiUrl + 'clubmembers/' + clubId + '/'+ searchParamName +'/' + searchFieldValue );
  }

  getUnassignedFightersBy(searchParamName: string, searchFieldValue){
    return this.http.get(this.config.apiUrl + '/fighters/unassigned/' + searchParamName +'/' + searchFieldValue );
  }

  getUnassignedFighters(){
    return this.http.get(this.config.apiUrl + 'fighters/unassigned');
  }
  
  //FeaturedTournamentComponent
  getAllPageConfigurations(page: string){
    return this.http.get(this.config.apiUrl + 'pageconfig/' + page);  
  }

  //TournamentFightManagerComponent
  getTournamentProgram(tournamentId: number){
    return this.http.get(this.config.apiUrl + 'tournamentprogram/' + tournamentId);
  }


  //PageConfigurationScreenComponent
  savePageConfigurationList(page: string, configurationList: any){
    let verificationOptions = this.config.httpOptions;
    verificationOptions.headers = verificationOptions.headers.append("Bearer", localStorage.getItem("token"));
    return this.http.post(this.config.apiUrl + 'pageconfig/' + page, configurationList, verificationOptions);
  }

  //UnassignedFightersComponent
  assignFighters(clubId: number, fighterList: any){
    return this.http.post(this.config.apiUrl + "assign/fighters/" + clubId, {fighterlist: fighterList});
  }

  getVideos(query){
    let querystring = '?';
    let queryKeys = Object.keys(query);
    for(let element of queryKeys){
      if(query[element]){
        querystring += element + "=" + query[element] + "&";
      }
    }
    querystring = querystring.substring(0, querystring.length -1);
    return this.http.get(this.config.apiUrl + 'videos' + querystring);
  }

  getFighterProfileData(fighterid: number){
    return this.http.get(this.config.apiUrl + 'fighterprofile/' + fighterid);
  }

  //Common 
  getStorageUrl(){
    return this.config.storageUrl;
  }


  getAllChannelVideos(){
    return this.http.get(this.config.apiUrl + 'all/channelvideo');
  }

}

import { HttpHeaders } from '@angular/common/http';

export class ApiConfig {
    
    apiUrl: string = "http://localhost:8080/api/";
    storageUrl: string = "http://localhost/images/";
    profileImagePlaceholderUrl: string = "http://www.planystech.com/wp-content/uploads/2017/03/profile-placeholder.jpg";
    fightclubImagePlaceholderUrl: string = "https://kemri-wellcome.org/wp-content/themes/kemri/img/img_placeholder.png";
    tournamentImagePlaceholderUrl: string = "https://kemri-wellcome.org/wp-content/themes/kemri/img/img_placeholder.png";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };   

}

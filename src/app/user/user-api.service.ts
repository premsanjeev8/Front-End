import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private hc:HttpClient) { }

  // userAccount behavioral Subject
  user=new BehaviorSubject(null)
  userAccount=this.user.asObservable()
  
  // user Registration
  userRegistration(userObj):Observable<any>{
    return this.hc.post('http://localhost:5000/user/create-user',userObj)
  }
  // userLogin
  loginUser(loginObj):Observable<any>{
    return this.hc.post('http://localhost:5000/user/user-login',loginObj)
  }
  // editUser
  editAccount(updatedObj):Observable<any>{
    return this.hc.put('http://localhost:5000/user/edit-user',updatedObj)
  }
  // deleteAccount
  deleteAccount(email):Observable<any>{
    return this.hc.delete(`http://localhost:5000/user/delete-user/${email}`)
  }
  logoutUser(){
    // remove token
    localStorage.removeItem('token')
    // make behaviour subect into null
    this.user.next(null)
  }

}

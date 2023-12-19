import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user/user.module'; // Assuming you have a User model/interface

@Injectable({
  providedIn: 'root'
})
export class YourApiService {
  private baseUrl = 'http://localhost:8080/'; // Your backend base URL

  constructor(private http: HttpClient) { }

  saveUserData(userData: User): Observable<User> {
    const url = `${this.baseUrl}/users`; // Endpoint to save user data
    return this.http.post<User>(url, userData);
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.baseUrl}/{userId}`; // Endpoint to fetch user by ID
    return this.http.get<User>(url);
  }

  getAllUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/allusers`; // Endpoint to fetch all users
    return this.http.get<User[]>(url);
  }

  // Other API endpoints and methods related to your backend
}

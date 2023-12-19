import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YourApiService } from './Shared/your-api-service.service'; // Import your API service

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: YourApiService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      phone_number: ['', Validators.required],
      batch_preference: ['', Validators.required]
      // Add other form controls and validations here
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      // Call your API service method to send data to the backend
      this.apiService.saveUserData(formData).subscribe(
        (response: any) => {
          console.log('Data saved successfully:', response);
          // Handle success response, show a success message, etc.
        },
        (error: any) => {
          console.error('Error saving data:', error);
          // Handle error response, show an error message, etc.
        }
      );
    }
  }
}

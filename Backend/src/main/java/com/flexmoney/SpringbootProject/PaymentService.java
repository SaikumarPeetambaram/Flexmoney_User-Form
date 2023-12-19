package com.flexmoney.SpringbootProject;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    // Assuming UserService or UserRepository is injected for user validation
    private final UserService userService;

    public PaymentService(UserService userService) {
        this.userService = userService;
    }

    public PaymentResponse completePayment(User user, double d) {
        // Perform data validation and error handling here.
        // For example, check if user exists in the database.
        boolean userExists = userService.checkUserExists(user.getId()); // Example method

        PaymentResponse paymentResponse = new PaymentResponse();

        if (userExists) {
            // Mock payment processing that always succeeds
            paymentResponse.setSuccess(true);
            paymentResponse.setMessage("Payment successful!");
        } else {
            paymentResponse.setSuccess(false);
            paymentResponse.setMessage("User does not exist. Payment failed.");
        }

        return paymentResponse;
    }
}



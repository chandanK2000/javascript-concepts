 faqcontainers = document.createElement("section");
faqcontainers.innerHTML = `
    <div class="container my-4">
        <h3>Frequently Asked Questions</h3>
        
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="faq1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#answer1">
                        How do I start a quiz?
                    </button>
                </h2>
                <div id="answer1" class="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        To start a quiz, click the "Start Quiz" button on the homepage.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="faq2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer2">
                        Can I change my username?
                    </button>
                </h2>
                <div id="answer2" class="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Yes, you can change your username in the profile settings.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="faq3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer3">
                        What happens if I forget my password?
                    </button>
                </h2>
                <div id="answer3" class="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        If you forget your password, click the "Forgot Password" link on the login page. We will send you instructions to reset your password.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="faq4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer4">
                        How can I contact support?
                    </button>
                </h2>
                <div id="answer4" class="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        You can reach our support team through the "Contact Us" page. We usually respond within 24 hours.
                    </div>
                </div>
            </div>
            
            <!-- Add more FAQ items here -->
        </div>
    </div>

`;
document.body.appendChild(faqcontainers);

const contactContainer = document.createElement("section");

contactContainer.innerHTML = `
     <section class="container-fluid mt-5 p-4 bg-light" id="contactus">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <h2 class="text-center mb-4">Contact Us</h2>
                <p class="text-center">Have a question or feedback about Quiz Edu? We'd love to hear from you!</p>
                <p class="text-center">Reach out to us at:</p>
                <address class="text-center">
                    <p>Email: <a href="mailto:contact@quizedu.com">contact@quizedu.com</a></p>
                    <p>Phone: <a href="tel:+123456789">+123 456 789</a></p>
                </address>
                <div class="text-center">
                    <button class="btn btn-primary">Send Us a Message</button>
                </div>
            </div>
        </div>
    </section>



`;
document.body.appendChild(contactContainer);

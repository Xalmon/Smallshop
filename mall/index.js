document.querySelectorAll('.feature-item').forEach(function(item) {
    let currentIndex = 0;
    const totalImages = item.querySelectorAll('img').length;

    function slideNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateTransform();
    }

    function updateTransform() {
        const translateValue = -currentIndex * 100 + '%';
        container.querySelector('.feature-item').style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(slideNext, 3000);
});
const fullName = document.getElementById("fullName");
const title = document.getElementById("title");
const sender = document.getElementById("senderEmail");
const content = document.getElementById("content");

function senderEmail() {
    const emailData = {
        fullName: fullName.value,
        title: title.value,
        senderEmail: sender.value,
        content: content.value
    };

   console.log("Email Data:", emailData);
}
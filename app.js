// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registeration => {
        console.log("Registration Succeded!");
    }).catch(error => {
        console.log("Registration Error: " + error);
    });
} else 
{
    console.log("Hosted on Non HTTPS Website!");
}
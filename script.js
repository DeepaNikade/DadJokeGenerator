let btn = document.getElementById("btn");
        btn.addEventListener("click", clickHandler);

        var p = document.querySelector("#output > p");
        var emojiImage = document.querySelector("#output > img");

        function clickHandler() {
            let joke = "";
            // Display fetching message
            btn.innerText = "FETCHING...";

            // Fetch joke via API
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
            xhr.setRequestHeader('X-Api-Key', 'K7YDut2oimEXin2s5Dc41g==TQyCFfHrci7gI2zg');
            
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const result = JSON.parse(xhr.responseText);
                    joke = result[0].joke;

                    // Update the joke inside the DOM
                    p.innerText = joke;

                    // Load the image after fetching the joke
                    emojiImage.src = 'https://media.istockphoto.com/id/1159623275/photo/3d-rendering-happy-emoji-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=00nFUMvMosNkdoV9RHpfRa8I0kBrl5bzh2pJ1zxm6Fs=';
                    emojiImage.style.display = 'inline-block';

                    // Reset the button text
                    btn.innerText = "TELL ME JOKE";
                }
            };

            // Handle network errors
            xhr.onerror = function () {
                p.innerText = "Failed to fetch joke. Please try again later.";
                // Reset the button text
                btn.innerText = "TELL ME JOKE";
            };

            xhr.send();
        }
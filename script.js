let input = document.body.querySelector('input');
const apiKey = 'FuJuTsz4SxIGmnWZeoPlMVEsjkBFpa3gYFseoOpOatCCXaYWoQdwGwnE';
const imgDiv = document.body.querySelector('#img-div')
let errorShow = document.body.querySelector('#error-msg');
document.body.querySelector('#btn').addEventListener('click', function () {
    if (input.value.trim() === "") {
        input.value = ""
    }
    else {
        let inputValue = input.value.trim();
        imgDiv.innerHTML = "";
        const response = fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=20`, {
            headers: { Authorization: apiKey }
        })
            .then((response) => {

                return response.json();
            })
            .then((data) => {
                // console.log(data);
                if (data.cod === "404") {
                    errorShow.innerText = "Keyword not found. Please enter a valid kwyword!";
                    return;
                }
                (data.photos.forEach(element => {
                    let img = document.createElement('img');
                    let newSrc = element.src.large
                    img.src = newSrc;
                    img.className = "w-full mb-4 rounded-lg"
                    console.log(img);
                    imgDiv.appendChild(img);

                }));


            })
            .catch((error) => {
                errorShow.innerText = "⚠️ Something went wrong. Please try again!";
            })
        input.value = ""

    }
})
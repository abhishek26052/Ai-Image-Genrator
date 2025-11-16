let input = document.body.querySelector('input');
const apiKey = 'FuJuTsz4SxIGmnWZeoPlMVEsjkBFpa3gYFseoOpOatCCXaYWoQdwGwnE';
const imgDiv = document.body.querySelector('#img-div')
document.body.querySelector('#btn').addEventListener('click', function () {
    if (input.value.trim() === "") {
        input.value=""
    }
    else {
        let inputValue = input.value.trim();
        const response = fetch(`https://api.pexels.com/v1/search?query=${inputValue}_page=10`, {
            headers: { Authorization: apiKey }
        })
            .then((response) => {

                return response.json();
            })
            .then((data) => {
               // console.log(data);
                (data.photos.forEach(element => {
                    let img = document.createElement('img');
                    let newSrc = element.src.large
                    img.src = newSrc;
                    img.className="w-full mb-4 rounded-lg"
                    console.log(img);
                    
                    imgDiv.appendChild(img);


                }));


            })
            .catch((error) => {

            })
            input.value=""

    }
})
const style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;

    }
    body{
       display: flex;
       justify-content: center;
       background-color: hsl(0, 0%, 98%);
    }
    h1{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 800;
        font-size: 17px;
        margin-bottom: 15px;
        color: hsl(200, 15%, 8%);
    }
    h2{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 10px;
        display: inline-block;
        color: hsl(200, 15%, 8%);
    }
    p{
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 10px;
        display: inline;
        color: hsl(200, 15%, 8%);
    }
    `

const head = document.getElementsByTagName('head')[0];
head.style.innerHTML = "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap' rel='stylesheet'></link>" 


    document.getElementsByTagName('head')[0].appendChild(style);

    const divBig = document.createElement('div');
    divBig.id = 'divBig';
    divBig.style.margin = '100px';
    divBig.style.display = 'flex';
    divBig.style.flexWrap = 'wrap';
    divBig.style.width = '1245px';
    document.getElementsByTagName('body')[0].appendChild(divBig);

    const countryCodes = [135, 186, 214, 228, 176, 9, 36, 115]

    for (let i=0; i < 8; i++){

        var countryCard = document.createElement('div');
        countryCard.style.cssText = 'margin: 0 50px 100px 0; overflow: hidden; width: 272px; border-radius: 5px; background-color: hsl(0, 0%, 100%);';
        countryCard.id = 'countryCard'+i;
        document.getElementById('divBig').appendChild(countryCard);

        var cardImage = document.createElement('div');
        cardImage.style.cssText = 'height: 163px; width: 272px; background-size: cover; background-position: center';
        cardImage.id = 'cardImage'+i;
        document.getElementById('countryCard'+i).appendChild(cardImage);

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => document.getElementById('cardImage'+i).style.backgroundImage = "url('" + (data[countryCodes[i]].flags.svg) + "')");

        var cardText = document.createElement('div');
        cardText.style.cssText = 'height: 185px; width: 272px; padding: 25px';
        cardText.id = 'cardText'+i;
        document.getElementById('countryCard'+i).appendChild(cardText);

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => document.getElementById('cardText'+i).innerHTML = "<h1>" + (data[countryCodes[i]].name.official) + "</h1><h2>Population: </h2><p> " + (data[countryCodes[i]].population) + "</p></br><h2>Region: </h2><p> " + (data[countryCodes[i]].region) + "</p></br><h2>Capital: </h2><p> " + (data[countryCodes[i]].capital) + "</p>");


        if((i+1)%4==0){
            countryCard.style.marginRight = 0;
        }

    }





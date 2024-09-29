async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9c480ffa-bedc-486d-82f7-bf4d646dcb8b&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            // const relevantData = matchesList.filter(match => match.series_id == "{your_api_key}").map(match => `${match.name}, ${match.status}`);
            // const relevantData = matchesList.filter(match => match.series_id == "9fa5c32f-9130-4804-8805-f286c4efd8bd").map(match => `${match.name}, ${match.status}`);
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            // console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
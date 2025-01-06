// ajax e fetch

fetch('data.json')
      .then(response => response.json())
      .then(response =>{
            console.log(response[5])

      }
      )

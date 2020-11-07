$("#new-pic").click( () => {
    $.ajax({
        url: "https://aws.random.cat/meow",
        method: "GET"
      }).then((response)=> {
          console.log(response.file)
          const kittyPic = response.file
          $("#kitty").attr("src", kittyPic)
          $("#kitty-container").css("display", "block")          
      })
})
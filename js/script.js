let searchBtn = document.querySelector('#searchBtn')
let searchUser = document.querySelector('#searchUser')
let ui = new UI()

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value
    if(userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            if(data.message == 'Not Found') {
                // alert
                ui.showAlert("User not found", "alert alert-danger")
            } else {
                // profile show
                ui.showProfile(data)
            }
        })
        fetch(`https://api.github.com/users/${userText}/repos`)
        .then(result => result.json())
        .then(data => {
            if(data.message == 'Not Found') {
                // alert
                ui.showAlert("Repos not found", "alert alert-danger")
            } else {
                // profile show
                ui.showReposList(data)
            }
        })
    } else {
        //  clear profile
        ui.showAlert("Please fillup the form", "alert alert-danger")
    }
})
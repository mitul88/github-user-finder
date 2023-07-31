class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
        this.repos = document.querySelector('#repos')
    }

    showProfile(user) {
        this.clearAlert()
        this.profile.innerHTML = `
        <div class='card card-body mb-3'>
            <div class='row'>
                <div class='col-md-3'>
                    <img class='img-fluid mb-2' src=${user.avatar_url} />
                    <a href=${user.html_url} target='_blank' class='btn btn-primary btn-block w-100 mb-4'>View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class="badge bg-dark p-2">Public Repos: ${user.public_repos}</span>    
                    <span class="badge bg-dark p-2">Public Gists: ${user.public_gists}</span>    
                    <span class="badge bg-dark p-2">Followers: ${user.followers}</span>    
                    <span class="badge bg-dark p-2">Following: ${user.following}</span>    
                    <ul class='list-group mt-3'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Blog: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>`
        document.querySelector('#search-title').textContent = "Search Another Github User"
    }

    showReposList(repos){
        if (repos.length === 0) { 
            this.repos.innerHTML = ''
            return 
         }
         
        this.repos.innerHTML = `
            <h3 class='text-center'>All Public Repositories</h3>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Title</th>
                    <th scope="col">Id</th>
                    <th scope="col">Description</th>
                    <th scope="col">Forks</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class='repo-list'>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
            </table>
        `
        let repoList = document.querySelector('.repo-list')
        let tableRow = ''
        repos.forEach((repo, index) => {
            tableRow += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${repo.name}</td>
                    <td>${repo.id}</td>
                    <td>${repo.description != null ? repo.description : ''}</td>
                    <td>${repo.forks}</td>
                    <td><a href=${repo.html_url} target='_blank' class='btn btn-sm btn-primary'>Link</a></td>
                </tr>
            `
        })
        repoList.innerHTML = tableRow
    }

    clearProfile() {
        this.profile.innerHTML = ""
    }

    showAlert(message, className) {
        this.clearAlert()
        this.clearProfile()
        let div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.searchContainer')
        let search = document.querySelector('.search')
        container.insertBefore(div, search)
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert')
        if(currentAlert) {
            currentAlert.remove()
        }
    }
}
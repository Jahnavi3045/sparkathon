import React from 'react'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand" href="/">Walmart</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/requests">Requests</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/orders">Orders</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/">Help</a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Policies
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/">Action</a></li>
                      <li><a class="dropdown-item" href="/">Another action</a></li>
                      <li><a class="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                  </li>
              </ul>
              </div>
          </div>
        </nav>
    </div>
  )
}

export default Header

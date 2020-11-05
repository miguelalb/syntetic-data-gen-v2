<template>
    <div class="sidebar">
        <div class="top-card">
            <img src="../assets/anomuser.png" alt="">
            <div>
                <h2>Miguel Acevedo</h2>
                <h4>@miguelacevedo</h4>
            </div>
        </div>
        <div class="menu-content">
            <router-link to="/generator" class="menu-item"><h2><i class="fas fa-database"></i>  Generate Data</h2></router-link>
            <router-link to="/text-editor" class="menu-item"><h2><i class="far fa-file-alt"></i>  Document Editor</h2></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>
<style>
    h2,h4 {
        font-weight: 300;
    }

    .menu-item h2 {
        font-size: 1.7rem;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        background: var(--color-palette1);
        max-width: 16%;
        height: 100vh;
        overflow: hidden;
        color: #fff;
    }

    .top-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 20px;
        width: 100%;
        height: 15%;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }

    .top-card:hover {
        background-color: var(--color-palette2)
    }

    .top-card > img {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        margin-right: 10px;
    }

    .top-card > div {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        text-align: left;
    }

    .menu-content{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        align-items: center;
        text-align: left;
        justify-content: center;
        
    }
    
    .menu-item {
        padding: 1rem;
        margin: 1rem 0;
        width: 100%;
        text-decoration: none;
        color: white !important;
        transition: all 0.5s ease-in-out;
    }
    .menu-item:hover {
        background: var(--color-palette3);
    }

    @media(width: 960px){

    }
</style>
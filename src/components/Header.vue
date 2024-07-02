<script setup lang="ts"></script>
<template>
    <header class="mb-3">
        <div class="container d-flex flex-row align-self-center">
            <div class="logo">
                <img src="../assets/logo.png" class="logo-img" />
                <span>SoccerStat</span>
            </div>
            <ul class="nav">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link">Лиги</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/teams" class="nav-link">Команды</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
header {
    padding: 24px 0;
    background: #BCECE0;
    a {
        color: #4C5270;
    }
}
.logo {
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: bold;
    color: #4C5270;   
    margin-right: 36px;

}
.logo-img {
    height: 36px;
    margin-right: 16px;
}
</style>
<script setup lang="ts"></script>
<template>
    <header>
        <div class="container d-flex flex-row align-self-center">
            <div class="logo pr-3">SoccerStat</div>
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
}
.logo {
    font-size: 1.2rem;
    line-height: 2;
}
</style>
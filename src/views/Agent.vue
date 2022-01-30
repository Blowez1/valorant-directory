<template>
    <h1>Agent Landing Page Id : {{ id }}</h1>
</template>
<script>
export default {
    name: "Agent",
    data() {
        return {
            id : this.$route.params.id,
        }
    }
};
</script>
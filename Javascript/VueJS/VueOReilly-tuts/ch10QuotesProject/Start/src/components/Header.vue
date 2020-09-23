<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                    {{ quoteCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quoteCount: Number,
            maxQuotes: Number
        }
    }
</script>

<style scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }
    .quote {
        cursor: pointer;
    }
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>
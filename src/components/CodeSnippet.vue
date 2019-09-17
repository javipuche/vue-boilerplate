<template>
    <div class="c-code">
        <pre><code id="code-snippet"><slot></slot></code></pre>
    </div>
</template>

<script>
    import beautifyHtml from 'js-beautify'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css'

    export default {
        name: 'CodeSnippet',
        mounted: function () {
            const code = this.$el.querySelector('#code-snippet')
            const renderedCode = this.renderCodeSnippet(beautifyHtml.html(code.innerHTML, {
                preserve_newlines: false,
                inline: []
            }))
            code.innerHTML = renderedCode
        },
        methods: {
            renderCodeSnippet: function (code, language = 'html') {
                return hljs.highlight(language, code).value
            }
        }
    }
</script>

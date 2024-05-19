<script setup lang="ts">
    import { ref, onMounted, watch } from 'vue';
    import * as monaco from 'monaco-editor';
    import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';

    const output: any = ref('');
    let input: any = ref('');

    // Configuración del entorno de Monaco para cargar el worker de HTML
    (window as any).MonacoEnvironment = {
        getWorker: (_:any, label:any) => {
            if (label === 'html') {
                return new HtmlWorker();
            }
        }
    };

    watch(input, (newValue) => {
        output.value = newValue;
    });

    // Crear el editor de Monaco una vez que el componente se haya montado
    onMounted(() => {
        const htmlInputElement = document.querySelector('#htmlInput') as HTMLElement;
        if (htmlInputElement) {
            const htmlEditor = monaco.editor.create(htmlInputElement, {
                value: ``,
                language: 'html',
                theme: 'vs-dark',
                minimap: {enabled: false},
                automaticLayout: true,
                lineNumbers: 'on',
                tabSize: 2,
                padding: {top: 10, bottom: 10},
                lineNumbersMinChars: 3,
                tabCompletion: 'on'
            });
            htmlEditor.onDidChangeModelContent(() => {
                input.value = htmlEditor?.getValue() || '';
            });
        }
    });

    // https://github.com/Devzstudio/tailwind_to_css/blob/main/libs/helpers.ts
</script>

<template>
    <section class="lg:flex w-full">
        <div id="htmlInput" class="htmlInput{ w-full h-[48dvh] lg:h-[95dvh] p-2 }"></div>

        <div class="w-full h-[48dvh] lg:h-[95dvh] p-2">
            <textarea v-model="output" readonly name="output" id="output" placeholder="Your css classes" class="cursor-pointer text-white p-2 bg-[#1e1e1e] disabled resize-none w-full h-full border-none focus:border-none focus:outline-none"></textarea>
        </div>
    </section>
</template>
<!--
    <script src="https://cdn.tailwindcss.com"></script>
    <h1 class="text-center text-2xl bg-blue-400 text-white">Hola NexOrb</h1>
-->
import tailwindcss from 'tailwindcss';
import postcss from 'postcss';

const generateTailwindConfig = (htmlContent: any) => ({
    content: [{ raw: htmlContent, extension: 'html' }],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false, // Deshabilita el reinicio de estilos base
    },
    plugins: [],
});

const tailwindBase = `@tailwind utilities;`;

export function generateCss(htmlContent: any) {
    const tailwindConfig = generateTailwindConfig(htmlContent);

    return postcss([
        tailwindcss(tailwindConfig)
    ])
    .process(tailwindBase, { from: undefined })
    .then(result => result.css);
}

const input = `<h1 class="titulo{ text-center }">Hola</h1><div class="content pl-0">Hello World</div>`;
(async () => {
    try {
        const css = await generateCss(input);
        console.log(css);
    } catch (error) {
        console.error('Error generating CSS:', error);
    }
})();

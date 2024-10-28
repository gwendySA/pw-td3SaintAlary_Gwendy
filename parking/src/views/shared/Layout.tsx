import { html } from "hono/html";

type Props = {
    children: any,
    pageTitle: string,
    headerTitle: string
}

export const Layout = ({ children, pageTitle, headerTitle }: Props) => html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageTitle}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css">
    </head>
    <body>
    <h1>${headerTitle}</h1>
    ${children}
    </body>
    </html>`;
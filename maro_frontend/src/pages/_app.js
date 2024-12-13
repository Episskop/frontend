import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                />
                <link rel="manifest" href="/manifest.json" />
                <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/ubuntu" rel="stylesheet" />
                <title>Дизайн интерьеров и мебель в Черногории — MARO</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Студия MARO предлагает эксклюзивные дизайн-проекты в Черногории и прямую поставку мебели от лучших производителей Европы. Индивидуальный подход и выгодные условия для создания вашего идеального интерьера."
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta
                    property="og:title"
                    content="Дизайн интерьеров и мебель в Черногории — MARO"
                />
                <meta
                    property="og:description"
                    content="Студия MARO предлагает эксклюзивные дизайн-проекты в Черногории и прямую поставку мебели от лучших производителей Европы. Индивидуальный подход и выгодные условия для создания вашего идеального интерьера."
                />
                <meta
                    property="og:image"
                    content="https://www.maro-interior.com/img/logo.svg"
                />
                <meta property="og:url" content="https://www.maro-interior.com/" />
                <meta property="og:type" content="website" />
                <meta
                    name="google-site-verification"
                    content="T6dVfhaBQaPo5TdQEQQpGD91RcftmjfvNia7E9PBsFE"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

import Document, { Head, Main, NextScript } from 'next/document'
import 'moment/locale/th';

export default class Mydocument extends Document {
    render() {
        return (
            <html lang="th">
                <Head>
                    

                    <div>
                        <link rel="stylesheet" href="static/vendors/iconfonts/mdi/css/materialdesignicons.min.css" />
                        <link rel="stylesheet" href="static/vendors/css/vendor.bundle.base.css" />
                        <link rel="stylesheet" href="static/vendors/css/vendor.bundle.addons.css" />
                        <link rel="stylesheet" href="static/antd/dist/antd.min.css" />
                        {/* endinject */}
                        {/* plugin css for this page */}
                        {/* <link rel="stylesheet" href="static/vendors/iconfonts/font-awesome/css/font-awesome.min.css" /> */}
                        {/* <link href="https://fonts.googleapis.com/css?family=Prompt|Ubuntu:400,300" rel="stylesheet" /> */}
                        <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet"></link>
                        {/* End plugin css for this page */}
                        {/* inject:css */}
                        <link rel="stylesheet" href="static/css/style.css" />
                    </div>




                    {/* <link href="https://fonts.googleapis.com/css?family=Prompt|Ubuntu:400,300" rel="stylesheet" /> */}
                    {/* <script src="static/vendors/lightgallery/js/lightgallery-all.min.js" />
                    <script src="static/vendors/js/light-gallery.js"></script> */}


                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="static/vendors/js/vendor.bundle.base.js"></script>
                    <script src="static/vendors/js/vendor.bundle.addons.js"></script>

                    <script src="static/js/off-canvas.js"></script>
                    <script src="static/js/hoverable-collapse.js"></script>
                    <script src="static/js/misc.js"></script>
                    <script src="static/js/settings.js"></script>
                    <script src="static/js/todolist.js"></script>
                    <script src="static/js/data-table.js"></script>
                </body>
            </html>
        )
    }

}
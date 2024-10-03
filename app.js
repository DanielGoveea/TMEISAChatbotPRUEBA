const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación','Web']).addAnswer(
    [
        '🌎 Aquí encontraras nuestro portal web  TMEISA',
        '🇲🇽 Contamos con 20 años de experiencia diseñando y fabricando materiales metálicos',
        'Dentro de ello algunas de nuestras opciones son , Racks, paileria, estructuras y equipos especiales ',
        'IMAGENES',
        'https://tmeisa.com.mx/index.html',
        '\n*2* Para siguiente paso.',

    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto', 'contacto']).addAnswer(
    [
        '😊 Te mostramos nuestra sección de contacto ⬇️',
        'https://tmeisa.com.mx/contacto.html',
        'Si desea mas información puede ponerse en contacto con nosotros',
        '📞📞📞📞',
        '👨🏽‍💼 (55) 58 77 -44 49 , 👩🏻‍💼 (55) 58 61 - 48 29',
        'Oficinas y Planta: Atizapan de Zaragoza, Estado de México, C.P 52928',
        '\n*2* Para siguiente paso.',

    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 gracias a ti por comunicarte con nosotros',
        '🔩 Te compartimos un link de nuestros servicios FERRECRUZ 🛠️',
        '',
        '[*FerreCruz*] https://www.construex.com.mx/exhibidores/ferrecruz/productos',
        '[*¿Donde?*] https://www.construex.com.mx/exhibidores/ferrecruz/donde-estamos',
        '[*TMEISA*] https://tmeisa.com.mx/productos.html',
        '\n*2* Para siguiente paso.',

    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord','lugar']).addAnswer(
    [
        '🌐😁 Visitanos !', 'https://www.google.com/maps/dir//Tmeisa+C.+Argentina+44+Ejido+San+Miguel+Chalma+52928+Cdad.+L%C3%B3pez+Mateos,+M%C3%A9x./@19.604724,-99.2353288,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85d21c2d6890bff5:0x3cbcfb62140bc115!2m2!1d-99.2353288!2d19.604724?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D', 
        '\n*2* Para siguiente paso.'
    ],
    null,
    null,
    [flowSecundario]
)




const flowfinal = addKeyword(['producto'])
.addAnswer('🙌 PRODUCTO*🤖🔩')
.addAnswer('🙌 IMAGEN DEL PRODUCTO',{media:'https://tmeisa.com.mx/images/logo.png?crc=3880466303'})
.addAnswer(
    ['ESTE ES PRODUCTO', 
    '🤪 Únete al equipo de Exibidores', 
    'https://tmeisa.com.mx/productos.html', 
     'Prácticos y funcionales',
     'Atractivos para los consumidores',
     'Modernos',
     'Diseños ergonómicos',
    '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)







const flowPrincipal = addKeyword(['hola', 'ole', 'alo','up'])
.addAnswer('🙌 Hola soy *TMEISA-bot*🤖🔩')
.addAnswer('🙌 Visitanos',{media:'https://tmeisa.com.mx/images/logo.png?crc=3880466303'})
.addAnswer(
[
'te comparto los siguientes links de interes sobre TMEISA',
'👉 *Web* para ver nuestro portal ',
'👉 *producto* aquì puedes ver todo lo que podemos ofrecerte',
'👉 *contacto*  para linkearte con uno de nuestros ejecutivos',
'👉 *lugar*  nos econtramos en el Edo de México',
'👉  estamos para servirte',
'',
'',
'🔄 *Up* para regresar al menu.',

        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord, flowfinal]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

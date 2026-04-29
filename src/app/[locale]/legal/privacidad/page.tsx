"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1 id="pol-tica-de-privacidad">POLÍTICA DE PRIVACIDAD</h1>
                <p><strong>CREZK ESTRATEGIA DIGITAL S.A. DE C.V.</strong><br /><strong>Ruta Vix</strong><br /><em>Última actualización: </em> <em>abril</em> <em> de 2026</em><br /><strong>1. Quién es responsable de tus datos</strong><br />Ruta Vix es el responsable del tratamiento de los datos personales que se recaben a través del sitio web <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a>. Operamos desde la Ciudad de México y prestamos servicios de diseño, producción y coordinación de experiencias románticas, fotográficas y de entretenimiento en destinos de la República Mexicana.<br />Datos de identificación del responsable:  </p>
                <ul>
                    <li><strong>Empresa: </strong>CREZK ESTRATEGIA DIGITAL S.A. DE C.V.  </li>
                    <li><strong>RFC:</strong> CED2303235KA  </li>
                    <li><strong>Nombre comercial:</strong> RUTA VIX  </li>
                    <li><strong>Domicilio:</strong> Calle Río Guadiana No. 23, Piso 2, Col. Renacimiento, Alcaldía Cuauhtémoc, C.P. 06500, Ciudad de México, CDMX.  </li>
                    <li><strong>Teléfono:</strong> +52 1 55 5546 4355  </li>
                    <li><strong>Correo electrónico: </strong><a href="mailto:hello@exploratumexico.com" title="mailto:hello@exploratumexico.com">contacto@rutavix.com</a>  </li>
                    <li><strong>Sitio web:</strong> <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a><br /><strong>2. Qué datos recopilamos y por qué los necesitamos</strong><br />Ruta Vix no crea ni administra cuentas de usuario, perfiles en línea ni bases de datos de clientes registrados. El único canal de recopilación de datos personales es el formulario de contacto disponible en el sitio web, el cual se activa cuando un visitante desea conocer más sobre un servicio o solicitar una cotización. Los datos que solicitamos son:  </li>
                    <li><strong>Nombre completo:</strong> para identificar al solicitante y personalizar la atención.  </li>
                    <li><strong>Correo electrónico:</strong> para enviar la respuesta a la solicitud y, en su caso, la confirmación de reservación.  </li>
                    <li><strong>Fecha de la experiencia deseada:</strong> para verificar disponibilidad.  </li>
                    <li><strong>Lugar o destino:</strong> para determinar logística y costos aplicables.  </li>
                    <li><strong>Número de personas:</strong> para dimensionar la producción del servicio.  </li>
                    <li><strong>Mensaje o descripción de la experiencia:</strong> para comprender las necesidades específicas del solicitante.<br />No recopilamos datos de pago directamente a través del formulario de contacto. Los pagos se procesan a través de plataformas externas de cobro (Visa y Mastercard), y Ruta Vix no almacena, retiene ni tiene acceso a los datos bancarios o de tarjeta del cliente.<br />En caso de concretarse la contratación y requerir factura, podremos solicitar datos fiscales adicionales (por ejemplo, RFC y domicilio fiscal) únicamente para efectos de facturación<br /><strong>3. Para qué usamos tu información</strong><br />Los datos recabados tienen las siguientes finalidades primarias, sin las cuales no podríamos atender tu solicitud:  </li>
                    <li>Responder a la solicitud de información o cotización enviada a través del formulario de contacto.  </li>
                    <li>Confirmar disponibilidad de fechas, destinos y equipos de producción.  </li>
                    <li>Coordinar la logística de la experiencia contratada (fechas, lugares, elementos incluidos).  </li>
                    <li>Procesar y confirmar el pago una vez acordados los términos del servicio.<br />Como finalidad secundaria y sujeta a tu consentimiento expreso, podríamos utilizar tu correo electrónico para enviarte información sobre nuevas experiencias, promociones especiales o actualizaciones de nuestro catálogo de servicios. Puedes revocar este consentimiento en cualquier momento escribiendo a <a href="mailto:%20hello@exploratumexico.com" title="mailto:%20hello@exploratumexico.com">contacto@rutavix.com.</a><br /><strong>4. Tu consentimiento</strong><br />Al completar y enviar el formulario de contacto disponible en <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a>, el usuario otorga su consentimiento para el tratamiento de sus datos personales conforme a los términos de esta Política de Privacidad, en cumplimiento del artículo 8 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).<br />Ruta Vix no solicita datos personales sensibles según la definición del artículo 3, fracción VI de la LFPDPPP, ni datos de menores de edad.<br /><strong>5. Tus derechos ARCO</strong><br />Conforme a los artículos 28 a 37 de la LFPDPPP, tienes derecho a:  </li>
                    <li><strong>Acceso:</strong> conocer qué datos tuyos conservamos y cómo los utilizamos.  </li>
                    <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.  </li>
                    <li><strong>Cancelación:</strong> pedir la eliminación de tus datos cuando ya no sean necesarios para la finalidad con la que fueron recabados.  </li>
                    <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para finalidades secundarias.<br />Para ejercer cualquiera de estos derechos, envía tu solicitud al correo <a href="mailto:hello@exploratumexico.com" title="mailto:hello@exploratumexico.com">contacto@rutavix.com</a> o por escrito a nuestro domicilio en Calle Río Guadiana No. 23, Piso 2, Col. Renacimiento, Alcaldía Cuauhtémoc, C.P. 06500, Ciudad de México, indicando tu nombre completo, el derecho que deseas ejercer y la descripción de los datos relacionados.<br />Responderemos en un plazo máximo de 20 días hábiles conforme al artículo 32 de la LFPDPPP y, en caso de que la solicitud resulte procedente, la haremos efectiva dentro de los 15 días hábiles siguientes<br /><strong>6. Transferencia de tus datos a terceros</strong><br />Ruta Vix podrá compartir tus datos personales únicamente con los siguientes terceros, en la medida estrictamente necesaria para prestar el servicio contratado:  </li>
                    <li>Fotógrafos y videógrafos profesionales: para coordinar la cobertura de la experiencia.  </li>
                    <li>Proveedores de logística, montaje y decoración: para preparar el servicio en el destino acordado.  </li>
                    <li>Procesadores de pago autorizados (redes Visa/Mastercard): exclusivamente para gestionar la transacción económica.<br />No compartimos tu información con terceros con fines comerciales o publicitarios ajenos a la prestación del servicio. Las transferencias se realizan conforme al artículo 37 de la LFPDPPP y los terceros están obligados a mantener la confidencialidad de tus datos.<br /><strong>7. Cómo protegemos tu información</strong><br />Ruta Vix implementa medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales contra daño, pérdida, alteración, destrucción o acceso no autorizado, conforme al artículo 19 de la LFPDPPP. El acceso a tu información está restringido únicamente al personal autorizado que la necesite para atender tu solicitud.<br /><strong>8. Cookies y tecnologías de seguimiento</strong><br />El sitio <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a> puede utilizar cookies de sesión y herramientas de analítica web (como Google Analytics) con la finalidad de medir el tráfico del sitio y mejorar la experiencia de navegación. Estas tecnologías no recopilan datos personales identificables.<br />Puedes configurar tu navegador para rechazar el uso de cookies; sin embargo, esto podría afectar la funcionalidad del sitio.<br /><strong>9. Cambios a esta Política de Privacidad</strong><br />Ruta Vix se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier modificación será publicada en <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a> con indicación de la fecha de actualización. El uso continuo del sitio web tras la publicación de cambios implica la aceptación de los mismos. Si se incorporan finalidades adicionales o transferencias que requieran tu consentimiento, te lo solicitaremos de forma expresa antes de tratar tus datos para esos nuevos fines<br />Esta política fue actualizada por última vez en marzo de 2026 y se fundamenta en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, publicada en el DOF el 5 de julio de 2010, y su Reglamento publicado el 21 de diciembre de 2011.  </li>
                </ul>


            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>

                <h1 id="pol-tica-de-privacidad">PRIVACY POLICY</h1>
                <p><strong>CREZK DIGITAL STRATEGY S.A. DE C.V.</strong><br /><strong>Ruta Vix</strong><br /><em>Last update: </em> <em>April</em> <em> 2026</em><br /><strong>1. Who is responsible for your data</strong><br />Ruta Vix is responsible for the processing of personal data collected through the website <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a>. We operate from Mexico City and provide services for the design, production, and coordination of romantic, photographic, and entertainment experiences in destinations across the Mexican Republic.<br />Identification details of the responsible party:  </p>
                <ul>
                    <li><strong>Company: </strong>CREZK DIGITAL STRATEGY S.A. DE C.V.  </li>
                    <li><strong>RFC:</strong> CED2303235KA  </li>
                    <li><strong>Trade name:</strong> RUTA VIX  </li>
                    <li><strong>Address:</strong> Calle Río Guadiana No. 23, Floor 2, Col. Renacimiento, Cuauhtémoc Borough, C.P. 06500, Mexico City, CDMX.  </li>
                    <li><strong>Phone:</strong> +52 1 55 5546 4355  </li>
                    <li><strong>Email: </strong><a href="mailto:hello@exploratumexico.com" title="mailto:hello@exploratumexico.com">contacto@rutavix.com</a>  </li>
                    <li><strong>Website:</strong> <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a><br /><strong>2. What data we collect and why we need it</strong><br />Ruta Vix does not create or manage user accounts, online profiles, or databases of registered clients. The only channel for collecting personal data is the contact form available on the website, which is activated when a visitor wishes to learn more about a service or request a quote. The data we request are:  </li>
                    <li><strong>Full name:</strong> to identify the applicant and personalize the service.  </li>
                    <li><strong>Email address:</strong> to send a response to the request and, where applicable, reservation confirmation.  </li>
                    <li><strong>Desired experience date:</strong> to verify availability.  </li>
                    <li><strong>Location or destination:</strong> to determine logistics and applicable costs.  </li>
                    <li><strong>Number of people:</strong> to size the service production.  </li>
                    <li><strong>Message or description of the experience:</strong> to understand the applicant’s specific needs.<br />We do not collect payment data directly through the contact form. Payments are processed through external payment platforms (Visa and Mastercard), and Ruta Vix does not store, retain, or have access to the client’s banking or card data.<br />If the service is contracted and an invoice is required, we may request additional tax information (for example, RFC and tax address) solely for invoicing purposes<br /><strong>3. What we use your information for</strong><br />The collected data have the following primary purposes, without which we could not process your request:  </li>
                    <li>Respond to information or quotation requests submitted through the contact form.  </li>
                    <li>Confirm availability of dates, destinations, and production teams.  </li>
                    <li>Coordinate the logistics of the contracted experience (dates, locations, included elements).  </li>
                    <li>Process and confirm payment once the service terms have been agreed upon.<br />As a secondary purpose and subject to your express consent, we may use your email address to send you information about new experiences, special promotions, or updates to our service catalog. You may revoke this consent at any time by writing to <a href="mailto:%20hello@exploratumexico.com" title="mailto:%20hello@exploratumexico.com">contacto@rutavix.com.</a><br /><strong>4. Your consent</strong><br />By completing and submitting the contact form available at <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a>, the user grants consent for the processing of their personal data in accordance with the terms of this Privacy Policy, in compliance with Article 8 of the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP).<br />Ruta Vix does not request sensitive personal data as defined in Article 3, Section VI of the LFPDPPP, nor data from minors.<br /><strong>5. Your ARCO rights</strong><br />In accordance with Articles 28 to 37 of the LFPDPPP, you have the right to:  </li>
                    <li><strong>Access:</strong> know what data we hold about you and how we use it.  </li>
                    <li><strong>Rectification:</strong> request correction of inaccurate or incomplete data.  </li>
                    <li><strong>Cancellation:</strong> request deletion of your data when they are no longer necessary for the purposes for which they were collected.  </li>
                    <li><strong>Objection:</strong> object to the processing of your data for secondary purposes.<br />To exercise any of these rights, send your request to the email <a href="mailto:hello@exploratumexico.com" title="mailto:hello@exploratumexico.com">contacto@rutavix.com</a> or in writing to our address at Calle Río Guadiana No. 23, Floor 2, Col. Renacimiento, Cuauhtémoc Borough, C.P. 06500, Mexico City, indicating your full name, the right you wish to exercise, and a description of the related data.<br />We will respond within a maximum period of 20 business days in accordance with Article 32 of the LFPDPPP and, if the request is deemed appropriate, we will implement it within the following 15 business days<br /><strong>6. Transfer of your data to third parties</strong><br />Ruta Vix may share your personal data only with the following third parties, strictly as necessary to provide the contracted service:  </li>
                    <li>Professional photographers and videographers: to coordinate coverage of the experience.  </li>
                    <li>Logistics, setup, and decoration providers: to prepare the service at the agreed destination.  </li>
                    <li>Authorized payment processors (Visa/Mastercard networks): exclusively to manage the financial transaction.<br />We do not share your information with third parties for commercial or advertising purposes unrelated to the provision of the service. Transfers are carried out in accordance with Article 37 of the LFPDPPP and third parties are obligated to maintain the confidentiality of your data.<br /><strong>7. How we protect your information</strong><br />Ruta Vix implements administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized access, in accordance with Article 19 of the LFPDPPP. Access to your information is restricted only to authorized personnel who need it to process your request.<br /><strong>8. Cookies and tracking technologies</strong><br />The site <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a> may use session cookies and web analytics tools (such as Google Analytics) for the purpose of measuring site traffic and improving the browsing experience. These technologies do not collect personally identifiable data.<br />You may configure your browser to reject the use of cookies; however, this may affect the functionality of the site.<br /><strong>9. Changes to this Privacy Policy</strong><br />Ruta Vix reserves the right to update this Privacy Policy at any time. Any modification will be published on <a href="http://www.exploratumexico.com/" title="http://www.exploratumexico.com/">rutavix.com</a> with an indication of the update date. Continued use of the website after the publication of changes implies acceptance of them. If additional purposes or transfers that require your consent are incorporated, we will request it expressly before processing your data for those new purposes<br />This policy was last updated in March 2026 and is based on the Federal Law on Protection of Personal Data Held by Private Parties, published in the Official Gazette of the Federation on July 5, 2010, and its Regulations published on December 21, 2011.  </li>
                </ul>

            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}
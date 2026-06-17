export default function generateBillEmail({
  codOport = '',
  descOport = '',
  parcelasOport = '',
  vlrParcelaOport = 0,
  dtVencParcela = '',
  vlrLiqOport = '',
}) {
  // Format currency to Brazilian Real standard (e.g., 1.000,00)
  const parcelaValueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(vlrParcelaOport);

  const totalValueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(vlrLiqOport);

  return `<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faturamento Aidera</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f7f9;
            font-family: 'Segoe UI', Arial, sans-serif;
        }

        table {
            border-spacing: 0;
            width: 100%;
        }

        td {
            padding: 0;
        }

        img {
            border: 0;
            display: block;
        }

        .container {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
        }

        /* Logo fora do quadro */
        .logo-container {
            padding: 30px 0;
            text-align: center;
            background-color: #f4f7f9;
        }

        /* Quadro Principal */
        .main-card {
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        /* Header Claro com Logo + Título */
        .header {
            background-color: #ffffff;
            padding: 30px 30px 12px;
            border-bottom: 1px solid #eef2f6;
        }

        .header h1 {
            color: #005696;
            font-size: 18px;
            line-height: 24px;
            mso-line-height-rule: exactly;
            margin: 0;
            letter-spacing: 2px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .content {
            padding: 40px 30px;
            color: #444444;
            line-height: 1.6;
        }

        /* Tabela de Dados */
        .invoice-box {
            border: 1px solid #eef2f6;
            border-radius: 8px;
            padding: 20px;
            background-color: #fcfdfe;
        }

        .row {
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }

        .label {
            font-size: 11px;
            color: #999;
            text-transform: uppercase;
            font-weight: bold;
        }

        .value {
            font-size: 15px;
            color: #222;
            font-weight: 500;
        }

        .value-total {
            font-size: 24px;
            color: #f37021;
            font-weight: bold;
        }

        /* Seção de Diferenciais com Texto */
        .features {
            padding: 30px 20px;
            background-color: #ffffff;
            text-align: center;
            border-top: 1px solid #f0f0f0;
        }

        .feature-item {
            padding: 10px;
            width: 33%;
            vertical-align: top;
        }

        .feature-item img {
            margin: 0 auto 10px;
            filter: brightness(0) saturate(100%) invert(21%) sepia(90%) tube(1922%) hue-rotate(192deg) brightness(94%) contrast(101%);
        }

        /* Azul Aidera */
        .feature-item b {
            color: #005696;
            font-size: 13px;
            display: block;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        .feature-item p {
            font-size: 11px;
            color: #777;
            margin: 0;
            line-height: 1.3;
        }

        /* Rodapé com Ícones Monocromáticos */
        .footer {
            background-color: #005696;
            padding: 40px 30px;
            text-align: center;
            color: #ffffff;
            font-size: 12px;
        }

        .social-icons {
            margin-bottom: 20px;
        }

        .social-icons img {
            display: inline-block;
            margin: 0 12px;
            width: 20px;
            height: 20px;
        }

        .btn {
            display: inline-block;
            padding: 14px 30px;
            background-color: #f37021;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin-top: 25px;
        }
    </style>
</head>

<body>
    <table role="presentation" class="container">
        <tr>
            <td style="height: 30px; line-height: 30px; font-size: 0;">&nbsp;</td>
        </tr>

        <tr>
            <td class="main-card">
                <table role="presentation">
                    <tr>
                        <td class="header">
                            <table role="presentation">
                                <tr>
                                    <td align="left" valign="bottom"
                                        style="width: 1%; white-space: nowrap; padding-bottom: 18px;">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Aidera-Logo.png"
                                            alt="Aidera Logo" width="150" style="display: block;">
                                    </td>
                                    <td align="right" valign="bottom">
                                        <h1>Faturamento de Serviços</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td class="content">
                            <p>Prezado Cliente,</p>
                            <p>Informamos que o faturamento dos serviços realizados pela equipe técnica foi processado.
                                Para mais detalhes, confira os dados abaixo:</p>

                            <div class="invoice-box">
                                <table role="presentation">
                                    <tr>
                                        <td class="row" colspan="4">
                                            <div class="label">Descrição do Projeto</div>
                                            <div class="value">${codOport} - ${descOport}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="row" style="width: 1%; white-space: nowrap; padding-right: 46px;">
                                            <div class="label">Pedido de Compra</div>
                                            <div class="value">${parcelaValueFormatted}</div>
                                        </td>
                                        <td class="row" style="width: 1%; white-space: nowrap; padding-right: 46px;">
                                            <div class="label">Parcela</div>
                                            <div class="value">${parcelasOport}</div>
                                        </td>
                                        <td class="row" style="width: 1%; white-space: nowrap;">
                                            <div class="label">Vencimento</div>
                                            <div class="value">${dtVencParcela}</div>
                                        </td>
                                        <td class="row" style="width: 100%;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" style="padding-top: 15px;">
                                            <div class="label">Valor Total</div>
                                            <div class="value-total">${totalValueFormatted}</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                        </td>
                    </tr>

                    <tr>
                        <td class="features">
                            <table role="presentation">
                                <tr>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Financas-Icon.png"
                                            width="35">
                                        <b>Financeiro</b>
                                        <p>Gestão precisa e controle total de suas operações.</p>
                                    </td>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Logistica-Icon.png"
                                            width="35">
                                        <b>Logística</b>
                                        <p>Otimização de fluxos e eficiência em estoques.</p>
                                    </td>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Fiscal-Icon.png"
                                            width="35">
                                        <b>Fiscal</b>
                                        <p>Conformidade e agilidade em obrigações tributárias.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td class="footer">
                <div class="social-icons">
                    <a href="https://www.instagram.com/aidera.tecnologia/" target="_blank" rel="noopener"><img
                            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                            class="social-icon-img" alt="Instagram" width="20" height="20"
                            style="width: 20px; height: 20px;"></a>
                    <a href="https://wa.me/5511954235073?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener"><img
                            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                            class="social-icon-img" alt="WhatsApp" width="20" height="20"
                            style="width: 20px; height: 20px;"></a>
                    <a href="https://www.linkedin.com/company/aidera-tecnologia-empresarial/" target="_blank" rel="noopener"><img
                            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                            class="social-icon-img" alt="LinkedIn" width="20" height="20"
                            style="width: 20px; height: 20px;"></a>
                    <a href="https://aidera.com.br" target="_blank" rel="noopener"><img
                            src="https://img.icons8.com/ios-filled/50/ffffff/globe.png" class="social-icon-img"
                            alt="Site" width="20" height="20" style="width: 20px; height: 20px;"></a>
                </div>
                
                <p style="font-style: italic; margin-top: 25px; font-size: 11px; opacity: 0.6;">"Não se deixem vencer
                    pelo mal, mas vençam o mal com o bem." <br> Romanos 12:21</p>
            </td>
        </tr>
    </table>
</body>

</html>`;
}

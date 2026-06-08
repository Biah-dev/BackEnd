export default function generateReviewEmail({
  codOport = '',
  descOport = '',
  parcelasOport = '',
  vlrLiqOport = '',
  cotacaoDesc = '',
  tipoCobrancaOport = '',

}) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(vlrLiqOport);

  return `<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposta Comercial Aidera</title>
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

        /* Header Azul */
        .header {
            background-color: #005696;
            padding: 40px 20px;
            text-align: center;
        }

        .header h1 {
            color: #ffffff;
            font-size: 20px;
            margin: 0;
            letter-spacing: 3px;
            font-weight: bold;
            text-transform: uppercase;
        }

        .content {
            padding: 40px 30px;
            color: #444444;
            line-height: 1.6;
        }

        /* Tabela de Detalhes */
        .proposal-box {
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
            font-size: 14px;
            color: #222;
            font-weight: 500;
        }

        .observation {
            background-color: #fff9f4;
            border-left: 4px solid #f37021;
            padding: 15px;
            margin-top: 20px;
            font-size: 13px;
            color: #555;
        }

        .value-total {
            font-size: 24px;
            color: #f37021;
            font-weight: bold;
        }

        /* Ícones de Serviços (Financeiro, Logística, Fiscal) */
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
            text-align: center;
        }

        /* Aplica o azul da Aidera nos ícones flats */
        .feature-icon {
            margin: 0 auto 10px;
            width: 32px;
            height: 32px;
        }

        .feature-item b {
            color: #005696;
            font-size: 12px;
            display: block;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .feature-item p {
            font-size: 11px;
            color: #777;
            margin: 0;
            line-height: 1.4;
            padding: 0 5px;
        }

        /* Rodapé com Ícones Sociais Quadrados/Proporcionais */
        .footer {
            background-color: #005696;
            padding: 40px 30px;
            text-align: center;
            color: #ffffff;
            font-size: 12px;
        }

        .social-icons {
            margin-bottom: 20px;
            height: 24px;
        }

        .social-icons a {
            display: inline-block;
            text-decoration: none;
            margin: 0 10px;
        }

        .social-icon-img {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
        }

        /* Força o branco puro */

        .btn {
            display: inline-block;
            padding: 14px 30px;
            background-color: #f37021;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin-top: 25px;
            text-transform: uppercase;
            font-size: 13px;
        }
    </style>
</head>

<body>
    <table role="presentation" class="container">
        <tr>
            <td class="logo-container">
                <img src="https://aidera.new7.dev/wp-content/uploads/Aidera-Logo.png" alt="Aidera Logo" width="180"
                    style="margin: 0 auto;">
            </td>
        </tr>

        <tr>
            <td class="main-card">
                <table role="presentation">
                    <tr>
                        <td class="header">
                            <h1>Proposta Comercial</h1>
                        </td>
                    </tr>

                    <tr>
                        <td class="content">
                            <p>Prezado Cliente,</p>
                            <p>Apresentamos nossa proposta comercial para a execução dos serviços de integração e
                                consultoria técnica conforme solicitado.</p>

                            <div class="proposal-box">
                                <table role="presentation">
                                    <tr>
                                        <td class="row">
                                            <div class="label">Proposta</div>
                                            <div class="value">${codOport} | ${descOport}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="row">
                                            <div class="label">Modelo de Contratação</div>
                                            <div class="value">${tipoCobrancaOport} (${parcelasOport} Parcelas)</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-top: 15px;">
                                            <div class="label">Investimento Total</div>
                                            <div class="value-total">${formattedValue}</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div class="observation">
                                <strong>Escopo Técnico:</strong><br>
                                ${cotacaoDesc}
                            </div>


                        </td>
                    </tr>

                    <tr>
                        <td class="features">
                            <table role="presentation">
                                <tr>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Financas-Icon.png"
                                            class="feature-icon" alt="Financeiro">
                                        <b>Financeiro</b>
                                        <p>Gestão de fluxo e controle de operações financeiras.</p>
                                    </td>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Logistica-Icon.png"
                                            class="feature-icon" alt="Logística">
                                        <b>Logística</b>
                                        <p>Otimização de estoques e fluxos de suprimentos.</p>
                                    </td>
                                    <td class="feature-item">
                                        <img src="https://aidera.new7.dev/wp-content/uploads/Fiscal-Icon.png"
                                            class="feature-icon" alt="Fiscal">
                                        <b>Fiscal</b>
                                        <p>Conformidade tributária e gestão de obrigações.</p>
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
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                            class="social-icon-img" alt="Instagram"></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384007.png"
                            class="social-icon-img" alt="WhatsApp"></a>
                    <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                            class="social-icon-img" alt="LinkedIn"></a>
                </div>
                <p style="letter-spacing: 1px;"><b>AIDERA TECNOLOGIA</b></p>
                <p style="opacity: 0.7; margin-top: 5px;">Especialista ERP Datasul</p>
                <p style="font-style: italic; margin-top: 25px; font-size: 11px; opacity: 0.5;">"Não se deixem vencer
                    pelo mal, mas vençam o mal com o bem." <br> Romanos 12:21</p>
            </td>
        </tr>
    </table>
</body>

</html>`;
}

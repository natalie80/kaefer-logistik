import React, { Component } from 'react';

import "./LegalNotice.scss";

class LegalNotice extends Component {
    render() {
        return (
            <div className="LegalNotice">
              <h2 className="Headline">Impressum</h2>
                <div>
                    <ul>
                        <li className="Bold">Angaben gemäß § 5 TMG:</li>
                        <li>Käfer Logistik GmbH</li>
                        <li>Steller Str. 30 A</li>
                        <li> 27755 Delmenhorst</li>
                        <li>Telefon:  +49 (4221) 288 40 50</li>
                        <li>Telefax:  +49 (4221) 288 40 59</li>
                        <li>info@kaefer-logistik.com</li>
                    </ul>
                </div>
                <div>
                    <p className="MarginNull">Amtsgericht-Registerrecht-Oldenburg, HRB 212212 </p>
                     <p className="MarginNull">  Ust-ID.: DE815711670 </p>
                     <p className="MarginNull"> St-Nr.: 5720209294 </p>
                </div>
                <p> <span className="Bold">  Vertreten durch den Geschäftsführer:</span> Tatiana Käfer  </p>
                <div>
                    <ul>
                        <li className="Bold">Kontakt</li>
                        <li>Telefon: +49 (4221) 288 40 50</li>
                        <li>Telefax: +49 (4221) 288 40 59</li>
                        <li> E-Mail: info@kaefer-logistik.com</li>
                    </ul>
                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
                <div>
                    <h4 className="Subheadline">Haftung für Inhalte: </h4>
                    
                    <p> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                    Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p>
                </div>
                <div>
                    <h4 className="Subheadline"> Haftung für Links: </h4>
                   
                   <p> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                </div>
                <div>
                   <h4 className="Subheadline"> Urheberrecht: </h4>
                   
                   <p> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                    nicht kommerziellen Gebrauch gestattet. </p>
                    <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                        Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </div>
                <div>
                   <h4 className="Subheadline"> Wichtiger Haftungshinweis für unsere Kunden: </h4>
    
                    <p> Wir arbeiten ausschließlich auf der Grundlage der Allgemeinen Deutschen Spediteurbedingungen 2017 (ADSp 2017). </p>
                    <p>  Es gilt Deutsches Recht.  Wir arbeiten ausschließlich auf Grundlage der Allgemeinen Deutschen Spediteurbedingungen 2017 – (ADSp 2017) –. Hinweis: Die ADSp 2017 weichen
                    in Ziffer 23 hinsichtlich des Haftungshöchstbetrages für Güterschäden (§ 431 HGB) vom Gesetz ab, indem sie die Haftung bei multimodalen Transporten unter Einschluss einer Seebeförderung und
                    bei unbekanntem Schadenort auf 2 SZR/kg und im Übrigen die Regelhaftung von 8,33 SZR/kg zusätzlich auf 1,25 Millionen Euro je Schadenfall sowie 2,5 Millionen Euro je Schadenereignis, mindestens aber 2 SZR/kg, beschränken.
                    Soweit Ihnen die ADSp 2017 nicht vorliegen, übersenden wir diese auf Anforderung; sie stehen Ihnen auch als Link auf unserer Homepage unter der Rubrik "AGB" zur Verfügung. </p>
                </div>
            </div>
        );
    }
}

export default LegalNotice;
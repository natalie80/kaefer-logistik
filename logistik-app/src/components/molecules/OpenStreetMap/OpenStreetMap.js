import React  from 'react';

export default function Map () {
    return (
        <div className="OpenStreetMap">
            <iframe width='100%' height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.635017871856691%2C53.013905416265885%2C8.663341999053957%2C53.02528999622052&amp;layer=mapnik&amp;marker=53.01959808174852%2C8.649179935455322"
                    style={{border: '1px solid black'}}></iframe>
            <br/>
            <small>
                <a href="https://www.openstreetmap.org/?mlat=53.0196&amp;mlon=8.6492#map=16/53.0196/8.6492">Größere Karte anzeigen</a>
            </small>
        </div>
    );
}
import {Component} from '@core/Component';

export class Geolocation extends Component {
  static className = 'geolocation';

  constructor($root, options = {}) {
    super($root, {
      name: 'Geolocation',
      ...options,
    });
  }

  toHTML() {
    return `
        <div id="map" class="geolocation__map"></div>        
        <div class="geolocation__coordinates">
          <div class="geolocation__latitude latitude">  
            <span class="latitude en active-lang">Latitude:</span>
            <span class="latitude__desc ru none">Широта:</span>
            <span class="latitude__desc be none">Шырата:</span>
            <span class="latitude__degrees">'this.latitude.degree}°</span>
            <span class="latitude__minute">'this.latitude.min}'</span>
          </div>
          <div class="geolocation__longitude longitude">
            <span class="longitude__desc en active-lang">Longitude:</span>
            <span class="longitude__desc ru none">Долгота:</span>
            <span class="longitude__desc be none">Даўгата:</span>
            <span class="longitude__degrees">'this.longitude.degree}°</span>
            <span class="longitude__minute">'this.longitude.min}'</span>
          </div>
        </div>`.trim();
  }

  onClick(event) {
    console.log(event);
    // const $target = $(event.target);
  }
}

import { Markable } from "./Markable";


export class Map {
    private googleMap: google.maps.Map;

    constructor(element:HTMLElement) { 
        this.googleMap = new google.maps.Map(element ,{
            zoom: 1,
            center  : {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(markable: Markable) : void {
        const marker =  new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markable.location.latitude,
                lng: markable.location.longitude
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markable.showContent()
            });

            infoWindow.open(this.googleMap,marker);
        });
    }
}